import React from 'react';
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { CardGroup, Card, Nav, Navbar, Container } from 'react-bootstrap';
import Logo from '../assets/miniBell logo_ccexpress 1.png';

export default function Footer() {
  return (
    // <div>
    //   <CardGroup>
    //     <Card style={{ border: 'none', backgroundColor: '#D4F2FF', height: '210px' }}>
    //       <img src={Logo} alt="" style={{ marginTop: '-20px' }} />
    //     </Card>
    //     <Card style={{ border: 'none', backgroundColor: '#D4F2FF', height: '210px', paddingTop: '40px' }}>
    //       <Card.Body>
    //         <Card.Title style={{ marginRight: '205px' }}>Shop</Card.Title>
    //         <ul style={{ textAlign: 'left', listStyleType: 'none' }}>
    //           <Nav.Link><li>All Products</li></Nav.Link>
    //           <Nav.Link><li>The Baby Cardigans</li></Nav.Link>
    //           <Nav.Link><li>The Baby Swimwear</li></Nav.Link>
    //           <Nav.Link><li>Baby Gift Packs</li></Nav.Link>
    //         </ul>
    //       </Card.Body>
    //     </Card>
    //     <Card style={{ border: 'none', backgroundColor: '#D4F2FF', height: '210px', paddingTop: '40px' }}>
    //       <Card.Body>
    //         <Card.Title style={{ marginRight: '120px' }}>Customer Care</Card.Title>
    //         <ul style={{ textAlign: 'left', listStyleType: 'none' }}>
    //           <Nav.Link><li>Customer Service</li></Nav.Link>
    //           <Nav.Link><li>Buyer Protection</li></Nav.Link>
    //         </ul>
    //       </Card.Body>
    //     </Card>
    //     <Card style={{ border: 'none', backgroundColor: '#D4F2FF', height: '210px', paddingTop: '40px' }}>
    //       <Card.Body>
    //         <Card.Title style={{ marginRight: '115px' }}>Stay Connected</Card.Title>
    //         <ul style={{ textAlign: 'left', listStyleType: 'none' }}>
    //           <Nav.Link><li>help@minibell.com</li></Nav.Link>
    //           <Nav.Link><li>+94 112 783 789</li></Nav.Link>
    //           <Container style={{ display: 'flex', fontSize: '23px', color: '#75C6DC' }}>
    //             <Nav.Link><li><AiFillFacebook /></li></Nav.Link>
    //             <Nav.Link><li><AiFillInstagram /></li></Nav.Link>
    //             <Nav.Link><li><AiFillTwitterCircle /></li></Nav.Link>
    //           </Container>
    //         </ul>
    //       </Card.Body>
    //     </Card>
    //   </CardGroup>
    //   <Navbar style={{ backgroundColor: '#D4F2FF', height: '100px' }}>
    //     <Container>
    //       <hr style={{ width: '1500px' }} /><br />
    //     </Container>
    //   </Navbar>
    //   <Navbar style={{ backgroundColor: '#D4F2FF' }}>
    //     <span style={{ marginLeft: '640px', marginTop: '-70px', color: '#6C757D', fontSize: '12px' }}>&copy; Created by team Zero in 2022</span>
    //   </Navbar>
    // </div>
    <div style={{ backgroundColor: '#D4F2FF' }}>
      <footer class="row row-cols-5 py-5 border-top">
        <div class="col">
          <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"></svg>
          </a>
          <img src={Logo} alt="" style={{ marginTop: '-20px' }} />
        </div>

        <div class="col">

        </div>

        <div class="col">
          <h5>Shop</h5>
          <ul class="nav flex-column" style={{ textAlign: 'left'}}>
            <Nav.Link><li>All Products</li></Nav.Link>
            <Nav.Link><li>The Baby Cardigans</li></Nav.Link>
            <Nav.Link><li>The Baby Swimwear</li></Nav.Link>
            <Nav.Link><li>Baby Gift Packs</li></Nav.Link>
          </ul>
        </div>

        <div class="col">
          <h5>Section</h5>
          <ul class="nav flex-column" style={{ textAlign: 'left'}}>
          <Nav.Link><li>Customer Service</li></Nav.Link>
          <Nav.Link><li>Buyer Protection</li></Nav.Link>
          </ul>
        </div>

        <div class="col">
          <h5>Section</h5>
          <ul class="nav flex-column" style={{ textAlign: 'left'}}>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}