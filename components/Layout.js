// import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Navbar from './Navbar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

const Layout = ({ children, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on('routeChangeStart', handleRouteChange);

    router.events.on('routeChangeComplete', () => NProgress.done());

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Navbar />

      <main className="container py-4">{children}</main>

      {footer && (
        <footer className={styles.footer}>
          <a
            href="https://www.gustabin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image
                src="/logoGustabin.svg"
                alt="Gustabin Logo"
                width={144}
                height={32}
              />
            </span>
          </a>
        </footer>
      )}
    </>
  );
};

export default Layout;
