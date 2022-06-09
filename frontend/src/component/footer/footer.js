import React from 'react';
import './footer.css';
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { CardGroup, Card, Nav, Navbar, Container } from 'react-bootstrap';
import Logo from '../assets/miniBelllogo.png';

export default function Footer() {
  return (
    <div style={{ fontSize: '14px'}}>
    <CardGroup>
  <Card style={{ border: 'none', backgroundColor: '#D4F2FF', height: '210px'}}>
    <img src={Logo} alt="" style={{ marginTop: '50px',  marginLeft: '100px',height:'130px', width: '180px' }}/>
  </Card>
  <Card style={{ border: 'none', backgroundColor: '#D4F2FF', height: '210px', paddingTop: '40px' }}>
    <Card.Body>
      <Card.Title style={{ marginRight: '215px', }}>Shop</Card.Title>
      <ul style={{ textAlign: 'left', listStyleType: 'none'}}>
        <Nav.Link><li>All Products</li></Nav.Link>
        <Nav.Link><li>The Baby Cardigans</li></Nav.Link>
        <Nav.Link><li>The Baby Swimwear</li></Nav.Link>
        <Nav.Link><li>Baby Gift Packs</li></Nav.Link>
      </ul>
    </Card.Body>
  </Card>
  <Card style={{ border: 'none', backgroundColor: '#D4F2FF', height: '210px', paddingTop: '40px' }}>
    <Card.Body>
      <Card.Title style={{ marginRight: '120px'}}>Customer Care</Card.Title>
      <ul style={{ textAlign: 'left', listStyleType: 'none'}}>
        <Nav.Link><li>Customer Service</li></Nav.Link>
        <Nav.Link><li>Buyer Protection</li></Nav.Link>
      </ul>
    </Card.Body>
  </Card>
  <Card style={{ border: 'none', backgroundColor: '#D4F2FF', height: '210px', paddingTop: '40px' }}>
    <Card.Body>
      <Card.Title style={{ marginRight: '115px'}}>Stay Connected</Card.Title>
      <ul style={{ textAlign: 'left', listStyleType: 'none'}}>
        <Nav.Link><li>help@minibell.com</li></Nav.Link>
        <Nav.Link><li>+94 112 783 789</li></Nav.Link>
        <Container style={{ display: 'flex', fontSize: '23px', color: '#75C6DC' }}>
        <Nav.Link><li><AiFillFacebook /></li></Nav.Link>
        <Nav.Link><li><AiFillInstagram /></li></Nav.Link>
        <Nav.Link><li><AiFillTwitterCircle /></li></Nav.Link>
        </Container>
      </ul>
    </Card.Body>
  </Card>
</CardGroup>
<Navbar style={{ backgroundColor: '#D4F2FF', height: '100px' }}>
        <Container>
        <hr style={{ width: '1500px'}}/><br/>
        </Container>
      </Navbar>
      <Navbar style={{ backgroundColor: '#D4F2FF' }}>
        <span style={{ marginLeft: '640px', marginTop: '-70px', color: '#6C757D', fontSize: '12px'}}>&copy; Created by team Zero in 2022</span>
      </Navbar>
</div>




    /* <footer className="site-footer">
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
    </footer> */
  );
}
