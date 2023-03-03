import Image from 'next/image';
import Link from 'next/link';
import HeadInfo from '../components/HeadInfo';
import photosStyles from '../styles/Photos.module.css';

interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface HomeProps {
  photos: Photos[];
}

const photos = ({ photos }: HomeProps) => {
  return (
    <div>
      <HeadInfo title="My Blog Photos" />
      <h1>My Photos</h1>
      <ul className={photosStyles.photos}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link href={`/photos/${photo.id}`}>
              <Image
                src={photo.thumbnailUrl}
                width={100}
                height={100}
                alt={photo.title}
              />
            </Link>
            <span>{photo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default photos;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start0&_end=10`
  );
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};
