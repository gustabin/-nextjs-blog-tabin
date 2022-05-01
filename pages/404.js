import Layout from '../components/Layout';
import Link from 'next/link';

const custom404 = () => {
  return (
    <Layout>
      <h1>404</h1>
      <p>
        This page does not exists, please return to &nbsp;
        <Link href="/">
          <a>Home </a>
        </Link>
      </p>
    </Layout>
  );
};

export default custom404;
