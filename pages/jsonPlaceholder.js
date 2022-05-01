/* eslint-disable @next/next/no-img-element */
import Layout from '../components/Layout';
import Head from 'next/head';
import Error from './_error';

const jsonPlaceholder = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Layout>
      <Head>
        <title>jsonPlaceholder page</title>
        <meta name="description" content="content of jsonPlaceholder page" />
      </Head>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card card-body text-center">
            <h1>{user.username}</h1>
            <h3>{user.name}</h3>
            {/* <img src={user.avatar_url} alt="" style={{ width: '100%' }} /> */}
            <h4>{user.email}</h4>
            <p>
              {user.address.street}, {user.address.suite}, {user.address.city},{' '}
              {user.address.zipcode}
            </p>
            <small>
              {user.address.geo.lat} - {user.address.geo.lng}
            </small>
            <h5>{user.phone}</h5>
            <p>{user.website}</p>
            <p>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  console.log(data);
  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default jsonPlaceholder;
