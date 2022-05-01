/* eslint-disable @next/next/no-img-element */
import Layout from '../components/Layout';
import Head from 'next/head';
import Error from './_error';

const github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout>
      <Head>
        <title>Github page</title>
        <meta name="description" content="content of github page" />
      </Head>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" style={{ width: '100%' }} />
            <p>{user.bio}</p>
            <a
              href={user.blog}
              target="_blank"
              className="btn btn-outline-secondary my-2"
              rel="noreferrer"
            >
              My Blog
            </a>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary"
              rel="noreferrer"
            >
              Go to Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch('https://api.github.com/users/gustabin');
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  //console.log(data);
  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default github;
