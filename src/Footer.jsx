import React from 'react';

export default function Footer() {
  return (
    <footer className="container-fluid bg-dark footer py-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase text-light mb-4">Our Office</h5>
            <p className="mb-2 text-light">
              <i className="fa fa-map-marker-alt text-primary me-3" />
              123 Street, New York, USA
            </p>
            <p className="mb-2 text-light">
              <i className="fa fa-phone-alt text-primary me-3" />
              +012 345 67890
            </p>
            <p className="mb-2 text-light">
              <i className="fa fa-envelope text-primary me-3" />
              info@example.com
            </p>
            <div className="d-flex pt-3">
              <a className="btn btn-square btn-light me-2" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square btn-light me-2" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square btn-light me-2" href="#">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-square btn-light me-2" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase text-light mb-4">Quick Links</h5>
            <a className="btn btn-link text-light" href="#">About Us</a>
            <a className="btn btn-link text-light" href="#">Contact Us</a>
            <a className="btn btn-link text-light" href="#">Our Services</a>
            <a className="btn btn-link text-light" href="#">Terms &amp; Condition</a>
            <a className="btn btn-link text-light" href="#">Support</a>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase text-light mb-4">Business Hours</h5>
            <p className="text-uppercase mb-0 text-light">Monday - Friday</p>
            <p className="text-light">09:00 am - 07:00 pm</p>
            <p className="text-uppercase mb-0 text-light">Saturday</p>
            <p className="text-light">09:00 am - 12:00 pm</p>
            <p className="text-uppercase mb-0 text-light">Sunday</p>
            <p className="text-light">Closed</p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase text-light mb-4">Gallery</h5>
            <div className="row g-1">
              <div className="col-4">
                <img className="img-fluid" src="/1.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="/2.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="/BIU1.png" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="/images (14).jpeg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="/images (17).jpeg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="/images (16).jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
