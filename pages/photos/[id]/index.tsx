import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface indexProps {
  photo: Photo;
}

const index = ({ photo }: indexProps) => {
  const { title, url } = photo;

  return (
    <div>
      <h2>image {title}</h2>
      <Image width={500} height={500} src={url} alt={photo.title} />
      <Link href="/photos">go back</Link>
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();

  return {
    props: {
      photo,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start0&_end=10`
  );
  const photos = await res.json();
  const ids = photos.map((photo: any) => photo.id);
  const paths = ids.map((id: number) => {
    return {
      params: { id: id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default index;
