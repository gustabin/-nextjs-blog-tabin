import Layout from '../components/Layout';
import Head from 'next/head';

import Users from '../components/Users';

const Index = (props) => (
  <>
    <Layout>
      <Head>
        <title>RandomUser</title>
      </Head>
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card card-body text-center">
              <Users users={props.users} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
);

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  return {
    users: data.results,
  };
};

export default Index;
