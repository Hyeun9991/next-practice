import Head from 'next/head';

type HeadInfoProps = {
  title: string;
  contents: string;
} & typeof defaultProps;

const defaultProps = {
  title: 'My Blog',
  contents: 'practice next js',
};

const HeadInfo = ({ title, contents }: HeadInfoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={contents} />
    </Head>
  );
};

HeadInfo.defaultProps = defaultProps;

export default HeadInfo;
