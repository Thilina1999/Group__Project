import React from 'react';
import './footer.css';
import { AiFillFacebook, AiFillTwitterCircle, AiOutlineDribbbleSquare, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <h6>Logo</h6>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Company Info</h6>
            <ul className="footer-links">
              <li><a href>C</a></li>
              <li><a href>UI Design</a></li>
              <li><a href>PHP</a></li>
              <li><a href>Java</a></li>
              <li><a href>Android</a></li>
              <li><a href>Templates</a></li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Help And Support</h6>
            <ul className="footer-links">
              <li><a href>About Us</a></li>
              <li><a href>Contact Us</a></li>
              <li><a href>Contribute</a></li>
              <li><a href>Privacy Policy</a></li>
              <li><a href>Sitemap</a></li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Customer Care</h6>
            <ul className="footer-links">
              <li><a href>About Us</a></li>
              <li><a href>Contact Us</a></li>
              <li><a href>Contribute</a></li>
              <li><a href>Privacy Policy</a></li>
              <li><a href>Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p><b>Stay Connected</b></p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href><AiFillFacebook /></a></li>
              <li><a className="twitter" href><AiFillTwitterCircle /></a></li>
              <li><a className="dribbble" href><AiOutlineDribbbleSquare /></a></li>
              <li><a className="linkedin" href><AiFillLinkedin /></a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </footer>
  );
}