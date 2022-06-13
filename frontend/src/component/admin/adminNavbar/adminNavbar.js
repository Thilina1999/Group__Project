import React from "react";
import { FormControl,Container,Nav,Navbar, Form} from "react-bootstrap";
import "./adminNavbar.css"
import Logo from '../../assets/miniBell logo_ccexpress 1.png';
import Profile from '../../assets/profile.png';
import { Link } from "react-router-dom";

const AdminNavbar=()=>{
    return(
    <div>
        <Navbar className="adminbar" bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand href="/">
                <img
                    src={Logo}
                    width="120"
                    height="100"
                    className="companylogo"
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
            <div className="profilebtn">
                <button className="profilebutton">
                <Link to="/profile">
                    <img
                    src={Profile}
                    className="profileimg"
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