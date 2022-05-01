import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Index</title>
        <meta name="description" content="Content of index page" />
      </Head>
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4">
                <Image
                  src="/paisaje200.jpg"
                  alt=""
                  className="img-fluid"
                  width={200}
                  height={200}
                />
              </div>
              <div className="col-md-8">
                <h1>Ryan Ray</h1>
                <h3>Full Stack Developer</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae atque ullam perferendis harum, nisi porro voluptate,
                  iste consequuntur enim reprehenderit architecto consectetur
                  cum? Totam ad molestias natus illum illo officia.
                </p>
                <Link href="/hireme">
                  <a className="btn btn-outline-light">Hire Me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
}
