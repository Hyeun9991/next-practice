import type { NextPage } from 'next';
import Link from 'next/link';
import HeadInfo from '../components/HeadInfo';

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface HomeProps {
  posts?: Posts[];
}

const Home: NextPage = ({ posts }: HomeProps) => {
  console.log(posts);
  return (
    <div>
      <HeadInfo title="My Blog" />
      <h1>Welcome to My Blog!</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

// getServerSideProps: 서버에서 데이터가 바꼈을때 즉각적으로 반영해줌
// export const getServerSideProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start0&_end=10`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

// 하지만 Next.js에서는 getStaticProps를 추천하고 있다.
// getStaticProps: 미리 파일을 생성해서 바로바로 접근할 수 있음
// 이미 조회해서 데이터가 들어있는 파일을 생성
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start0&_end=10`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 20, // 20초 지난 시점부터 (언제든)접속이 일어나면 파일을 새롭게 생성
  };
};
