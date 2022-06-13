import React from "react";
import { FormControl,Container,Nav,Navbar, Form} from "react-bootstrap";
import "./adminNavbar.css"
import Logo from '../../assets/miniBelllogo.png';
import Profile from '../../assets/profile.png';
import { Link } from "react-router-dom";

const AdminNavbar=()=>{
    return(
    <div>
        <Navbar className="admin-navbar" bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand href="/">
                <img
                    src={Logo}
                    width="120"
                    height="100"
                    className="admin-navbar-companylogo"
                    alt="Minibel"
                />
            </Navbar.Brand>

            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
            </Form>
            <div className="admin-navbar-profilebtn">
                <button className="admin-navbar-profilebutton">
                <Link to="/profile">
                    <img
                    src={Profile}
                    className="admin-navbar-profileimg"
                    />
                </Link>
                </button>
            </div>
            
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
}
export default AdminNavbar;