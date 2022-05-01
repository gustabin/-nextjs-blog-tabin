import Layout from '../../components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import Container from 'next/container';

const User = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(user);
  //   console.log(id);
  return (
    <>
      <Layout>
        <Head>
          <title>jsonLista page</title>
          <meta name="description" content="content of jsonLista page" />
        </Head>
        <div className="row my-5">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header text-center">{user.title}</div>
              <div className="card-body text-center">
                <p>{user.body}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

User.getInitialProps = async (ctx) => {
  // console.log(ctx.query.id)
  //const res = await fetch(`https://randomuser.me/api/${ctx.query.id}`);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.query.id}`
  );
  const resJSON = await res.json();
  //console.log(resJSON);
  return { user: resJSON, fallback: false };
};

export default User;
