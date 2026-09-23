import React from "react";

const Footer = () => {
  return (
    <footer className="bg-info text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">ShopEase</h5>
            <p className="text-muted small">
              Your one-stop destination for the latest electronics, trendy
              fashion, and premium lifestyle products. Quality and style
              delivered to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#home" className="text-decoration-none text-muted">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#products" className="text-decoration-none text-muted">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-decoration-none text-muted">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-decoration-none text-muted">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a
                  href="#electronics"
                  className="text-decoration-none text-muted"
                >
                  Electronics
                </a>
              </li>
              <li className="mb-2">
                <a href="#fashion" className="text-decoration-none text-muted">
                  Fashion
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#lifestyle"
                  className="text-decoration-none text-muted"
                >
                  Lifestyle
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Stay Connected</h6>
            <p className="text-muted small">
              Email: support@shopease.com
              <br />
              Phone: +91 98765 43210
            </p>
            <div className="d-flex gap-3 fs-5">
              <a href="#facebook" className="text-muted">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#instagram" className="text-muted">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#twitter" className="text-muted">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#linkedin" className="text-muted">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-muted small mb-0">
              &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a
              href="#privacy"
              className="text-muted small text-decoration-none me-3"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted small text-decoration-none">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
