import React from 'react';
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
      <Card.Title style={{ marginRight: '150px'}}>Customer Care</Card.Title>
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

  )
}
