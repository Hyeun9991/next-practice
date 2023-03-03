import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
