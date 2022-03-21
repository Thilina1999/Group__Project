import React from 'react';
import { Navbar, Container, Form, FormControl, Button, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function NavBar1() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#75C6DC', height: '30px' }}>
        <Container>
          <span varient="info" style={{ marginLeft: '550px', color: 'white' }}>Up to 30% off for selected Item</span>
        </Container>
      </Navbar>

      <Navbar style={{ backgroundColor: '#D4F2FF' }} expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex" style={{ padding: '15px' }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: '700px', borderRadius: '20px' }}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Container className="d-flex" style={{ marginLeft: '300px' }}>
              <Link to="/signin"><Button className="me-2" variant="light" style={{
                borderRadius: '20px',
                width: '100px'
              }}>Sign In</Button></Link>
              <Link to="/signup"><Button className="me-2" variant="outline">Create Account</Button></Link>
            </Container>
            <Container className="d-flex" style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              width: '100px',
              justifyContent: 'center',
            }}>
              <Button className="me-2" variant="outline" style={{ fontSize: '20px' }}><AiOutlineHeart /></Button>
              <Button className="me-2" variant="outline" style={{ fontSize: '20px' }}><AiOutlineShoppingCart /></Button>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Navbar bg="light" expand={false} style={{ backgroundColor: 'red'}}>
        <Container fluid style={{ backgroundColor: 'white', margin: '0 auto' }}>
          <Navbar.Toggle aria-controls="offcanvasNavbar" style={{ backgroundColor: '#D4F2FF' }} />
          <Nav className="d-flex flex-row" style={{ marginRight: '1000px' }} >
            <Nav.Link href="#features" style={{ marginLeft: '50px' }}>Buyer Protection</Nav.Link>
            <Nav.Link href="#pricing" style={{ marginLeft: '50px' }}>Customer Service</Nav.Link>
            <Nav.Link href="/sell" style={{ marginLeft: '50px' }}>Sell</Nav.Link>
          </Nav>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
