import Layout from '../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import React, { useRef } from 'react';

const URL_LOGIN =
  'https://www.gustabin.com/varios/tutoriales/apiphpLogin/login.php';

const postData = async (form) => {
  try {
    console.log(form);
    const res = await fetch('/api/movie', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    // console.log(data);

    if (!data.success) {
      for (const key in data.error.errors) {
        let error = data.error.errors[key];
        setMenssage((oldmenssage) => [
          ...oldmenssage,
          { message: error.message },
        ]);
      }
    } else {
      router.push('/movies/');
    }
  } catch (error) {
    console.log(error);
  }
};

const enviarData = async (url, data) => {
  const resp = await fetch('/api/movie', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });
  // console.log(resp);
  const json = await resp.json();
  // console.log(json);
};

const Index = (props) => {
  const refUsuario = useRef(null);
  const refClave = useRef(null);

  const handleLogin = () => {
    const data = {
      usuario: refUsuario.current.value,
      clave: refClave.current.value,
    };
    // console.log(data);
    enviarData(URL_LOGIN, data);
  };
  return (
    <Layout>
      <Head>
        <title>Login page</title>
        <meta name="description" content="content of Login page" />
      </Head>
      <div className="row">
        <div className="col-sm-4 offset-sm-4 mt-5">
          <div className="card">
            <div className="card-header text-center">
              <h3>⏲️ Login form</h3>
            </div>
            <div className="card-body text-center">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  📧
                </span>
                <input
                  type="mail"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  ref={refUsuario}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  🔑
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon2"
                  ref={refClave}
                />
              </div>
              <button
                onClick={handleLogin}
                className="btn btn-primary btn-lg w-100"
              >
                Login
              </button>
              <div className="card-footer">
                <span>Forgot password? </span>
                <Link href="/retrieve">
                  <a> Retrieve</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
