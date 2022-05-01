import Layout from '../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

import conectarDB from '../../lib/dbConnect';
import Movie from '../../models/Movie';

export default function index({ movies }) {
  // console.log(movies);
  return (
    <Layout>
      <Head>
        <title>Movies page</title>
        <meta name="description" content="content of movies page" />
      </Head>
      <div>
        <main className="container">
          <h1>Movies</h1>
          <Link href="/movies/new">
            <a className="btn btn-primary w-100 mb-2">Agregar</a>
          </Link>
          {movies.map(({ _id, title, plot }) => (
            <div className="card mb-2" key={_id}>
              <div className="card-body">
                <div className="h5 text-uppercase">{title}</div>
                <p className="fw-light">{plot}</p>
                <Link href={`/movies/${_id}`}>
                  <a className="btn btn-success btn-sm">Más info...</a>
                </Link>
              </div>
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    await conectarDB();

    const res = await Movie.find({});

    const movies = res.map((doc) => {
      const movie = doc.toObject();
      movie._id = `${movie._id}`;
      return movie;
    });

    // console.log(res)

    return { props: { movies } };
  } catch (error) {
    console.log(error);
    return { props: { success: false, error: error } };
  }
}
