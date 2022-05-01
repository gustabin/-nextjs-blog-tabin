import Form from '../../components/Form';
import Layout from '../../components/Layout';
import Head from 'next/head';

const New = () => {
  const formData = {
    title: '',
    plot: '',
  };

  return (
    <Layout>
      <Head>
        <title>Movies page</title>
        <meta name="description" content="content of movies page" />
      </Head>
      <div>
        <main className="container">
          <h1 className="my-3">Agregar Movie</h1>
          <Form formData={formData} />
        </main>
      </div>
    </Layout>
  );
};

export default New;
