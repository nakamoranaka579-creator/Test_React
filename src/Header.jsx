import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 120);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div>
        <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-border text-primary"
      role="status"
      style={{ width: "3rem", height: "3rem" }}
    />
  </div> 
  {/* Spinner End */}
  {/* Topbar Start */}

  <div
    className="container-fluid bg-primary text-white d-none d-lg-flex wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-3">
      <div className="d-flex align-items-center">
        <Link to="/">
          <h2 className="text-white fw-bold m-0">WELDORK</h2>
        </Link>
        <div className="ms-auto d-flex align-items-center">
          <small className="ms-4">
            <i className="fa fa-map-marker-alt me-3" />
            123 Street, New York, USA
          </small>
          <small className="ms-4">
            <i className="fa fa-envelope me-3" />
            info@example.com
          </small>
          <small className="ms-4">
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </small>
          <div className="ms-3 d-flex">
            <a
              className="btn btn-sm-square btn-light text-primary ms-2"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-sm-square btn-light text-primary ms-2"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-sm-square btn-light text-primary ms-2"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className={`container-fluid bg-white site-navbar${isScrolled ? ' is-scrolled' : ''}`}>
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
        <Link to="/" className="navbar-brand d-lg-none">
          <h1 className="fw-bold m-0">WELDORK</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-0"
          data-bs-toggle="collapse"
          aria-label="Toggle navigation"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/services" className="nav-item nav-link">
              Services
            </Link>
            <div className={`nav-item dropdown${pagesOpen ? ' show' : ''}`}>
              <button
                type="button"
                className="nav-link dropdown-toggle"
                aria-expanded={pagesOpen}
                onClick={() => setPagesOpen((isOpen) => !isOpen)}
              >
                Pages
              </button>
              <div className={`dropdown-menu bg-light rounded-0 rounded-bottom m-0${pagesOpen ? ' show' : ''}`}>
                <Link to="/features" className="dropdown-item">
                  Features
                </Link>
                <Link to="/contact" className="dropdown-item">
                  Contact
                </Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <div className="ms-auto d-none d-lg-block">
            <Link to="/contact" className="btn btn-primary py-2 px-3">
              Get A Quote
            </Link>
          </div>
        </div>
      </nav>
    </div>
  </div>
    </div>
    </>
  )
}

export default Header;
