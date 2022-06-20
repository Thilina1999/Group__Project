import React from 'react';
import { Navbar, Container, Form, FormControl, Button, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
// import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Logo from '../assets/miniBelllogo.png';
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Favorite } from "@material-ui/icons";

export default function NavBar1() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#75C6DC", height: "15px" }}>
        <Container>
          <span
            varient="info"
            style={{ marginLeft: "550px", color: "white", fontSize: "14px" }}
          >
            Upto 30% off for Selected Items
          </span>
        </Container>
      </Navbar>
      <Navbar
        style={{ backgroundColor: "#D4F2FF", padding: "1px" }}
        expand="lg"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Button
              className="me-2"
              variant="outline"
              type="button"
              style={{ fontSize: "14px" }}
            >
              EN
            </Button>
            <Form className="d-flex" style={{ padding: "5px" }}>
              <FormControl
                type="search"
                className="me-2"
                aria-label="Search"
                style={{
                  width: "400px",
                  height: "30px",
                  borderRadius: "50px",
                  border: "none",
                  padding: "5px",

                }}
              />

              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
            <img
              src={Logo}
              alt=""
              style={{
                marginBottom: "-70px",
                marginLeft: "180px",
                width: "230px",
                height: "130px",
                zIndex: "1",
                placeItems: "center",
              }}
            />
            <Container className="d-flex" style={{ marginRight: "-400px" }}>
              <Link to="/signin">
                <Button
                  className="me-2"
                  variant="light"
                  style={{
                    borderRadius: "50px",
                    width: "100px",
                    marginLeft: "210px",
                    fontSize: "14px",
                    padding: "7px 7px 7px 7px",
                  }}
                >
                  Sign In{" "}
                </Button>
              </Link>
              <Link
                to="/"
                style={{
                  borderRadius: "50px",
                  width: "160px",
                  cursor: "poiner",
                  fontSize: "14px",
                }}
              >
                <Button
                  className="me-2"
                  variant="outline"
                  type="button"
                  style={{
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Create Account{" "}
                </Button>
              </Link>
            </Container>
            <Container>
              <Container
                className="d-flex"
                style={{
                  backgroundColor: "white",
                  borderRadius: "50px",
                  width: "100px",
                  padding: "7px 7px 7px 7px",
                  marginRight: "-30px",
                  marginLeft: "400px",
                }}
              >
                <Badge badgeContent={4} color="primary">
                  <Favorite style={{ color: "red" }}></Favorite>
                </Badge>
                <Badge badgeContent={2} color="primary">
                  <ShoppingCartOutlined></ShoppingCartOutlined>
                </Badge>
              </Container>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" expand={false}>
        <Container fluid style={{ backgroundColor: "white", margin: "0 auto" }}>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            style={{
              backgroundColor: "#D4F2FF",
              border: "none",
              fontSize: "13px",
              borderRadius: "10px",
              padding: "7px 7px 7px 7px",
              marginLeft: "50px",
            }}
          />
          <Nav className="d-flex flex-row" style={{ marginRight: "980px" }}>
            <Nav.Link href="#features" style={{ marginLeft: "0px" }}>
              <Link
                to="/home"
                style={{
                  color: "#6C757D",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#features" style={{ marginLeft: "0px" }}>
              <Link
                to="/Buyer"
                style={{
                  color: "#6C757D",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Buyer Protection
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ marginLeft: "50px" }}>
              <Link
                to="/cusservice"
                style={{
                  color: "#6C757D",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Customer Service
              </Link>
            </Nav.Link>
            <Nav.Link style={{ marginLeft: "50px" }}>
              <Link
                to="/sell"
                style={{
                  color: "#6C757D",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Sell
              </Link>
            </Nav.Link>
            <Nav.Link style={{ marginLeft: "50px" }}>
              <Link
                to="/viewCategory"
                style={{
                  color: "#6C757D",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                category
              </Link>
            </Nav.Link>
            <Nav.Link style={{ marginLeft: "50px" }}>
              <Link
                to="/productview"
                style={{
                  color: "#6C757D",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Product
              </Link>
            </Nav.Link>
            <Nav.Link style={{ marginLeft: "50px" }}>
            <Link
              to="/viewprofile"
              style={{
                color: "#6C757D",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Profile
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