import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a>
            <Image
              src="/logo.png"
              alt="logo gustabin"
              className="navbar-brand"
              width={100}
              height={50}
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link active" aria-current="page">
                  Blog
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/github">
                <a className="nav-link">Github</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/jsonPlaceholder">
                <a className="nav-link">jsonPlaceholder</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/randomuser">
                <a className="nav-link">RandomUser</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/jsonLista">
                <a className="nav-link">JsonLista</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/movies">
                <a className="nav-link">Crud</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/modal">
                <a className="nav-link">Crud Mock</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/modalApi">
                <a className="nav-link">Crud API rest</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/challenger">
                <a className="nav-link">challenger</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/jessi">
                <a className="nav-link">Jessica</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
