/* eslint-disable @next/next/no-img-element */
import Layout from '../components/Layout';
import Head from 'next/head';
import Error from './_error';
import UsersList from '../components/UsersList';

const jsonLista = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Layout>
      <Head>
        <title>jsonLista page</title>
        <meta name="description" content="content of jsonLista page" />
      </Head>
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card card-body text-center">
              <UsersList users={user} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default jsonLista;
