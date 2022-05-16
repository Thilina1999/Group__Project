import React from 'react';
import { Navbar, Container, Form, FormControl, Button, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Logo from '../assets/miniBell logo_ccexpress 1.png';

export default function NavBar1() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#75C6DC", height: "30px" }}>
        <Container>
          <span varient="info" style={{ marginLeft: "550px", color: "white" }}>
            Up to 30% off for selected Item
          </span>
        </Container>
      </Navbar>
      <Navbar style={{ backgroundColor: "#D4F2FF" }} expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex" style={{ padding: "15px" }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: "600px", borderRadius: "20px" }}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <img
              src={Logo}
              alt=""
              style={{
                marginBottom: "-70px",
                width: "250px",
                height: "150px",
                zIndex: "1",
              }}
            />
            <Container className="d-flex" style={{ marginRight: "-50px" }}>
              <Link to="/signin">
                <Button
                  className="me-2"
                  variant="light"
                  style={{
                    borderRadius: "20px",
                    width: "100px",
                  }}
                >
                  Sign In
                </Button>
              </Link>
              <Link
                to="/signup"
                style={{
                  borderRadius: "20px",
                  width: "160px",
                }}
              >
                <Button className="me-2" variant="outline" type="button">
                  Create Account
                </Button>
              </Link>
            </Container>
            <Container>
              <Container
                className="d-flex"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  width: "130px",
                  marginRight: "-30px",
                }}
              >
                <Nav.Link style={{ fontSize: "20px" }}>
                  <AiOutlineHeart />
                </Nav.Link>
                <Nav.Link style={{ fontSize: "20px" }}>
                  <AiOutlineShoppingCart />
                </Nav.Link>
              </Container>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" expand={false}>
        <Container fluid style={{ backgroundColor: "white", margin: "0 auto" }}>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            style={{ backgroundColor: "#D4F2FF" }}
          />
          <Nav className="d-flex flex-row" style={{ marginRight: "980px" }}>
            <Nav.Link href="#features" style={{ marginLeft: "50px" }}>
              <Link
                to="/Buyer"
                style={{ color: "#6C757D", textDecoration: "none" }}
              >
                Buyer Protection
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ marginLeft: "50px" }}>
              <Link
                to="/cusservice"
                style={{ color: "#6C757D", textDecoration: "none" }}
              >
                Customer Service
              </Link>
            </Nav.Link>
            <Nav.Link style={{ marginLeft: "50px" }}>
              <Link
                to="/sell"
                style={{ color: "#6C757D", textDecoration: "none" }}
              >
                Sell
              </Link>
            </Nav.Link>
            <Nav.Link style={{ marginLeft: "50px" }}>
              <Link
                to="/viewCategory"
                style={{ color: "#6C757D", textDecoration: "none" }}
              >
                category
              </Link>
            </Nav.Link>
            <Nav.Link style={{ marginLeft: "50px" }}>
              <Link
                to="/addProduct"
                style={{ color: "#6C757D", textDecoration: "none" }}
              >
                product
              </Link>
            </Nav.Link>
          </Nav>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
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
