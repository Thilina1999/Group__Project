import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiFillFacebook, AiFillTwitterCircle, AiOutlineDribbbleSquare, AiFillLinkedin } from "react-icons/ai";
import '../footer/footer.css';

export default function NavBar2() {
    return (
        <Navbar bg="light" expand="lg" variant="light" style={{ marginLeft: '50px' }}>
            <Container fluid>
                <Navbar.Collapse id="navbarScroll">
                    <Navbar.Brand href="#home"><AiOutlineMenu /></Navbar.Brand>
                    <Nav className="me-auto" >
                        <Nav.Link href="#home">All</Nav.Link>
                        <Nav.Link href="#features" style={{ marginLeft: '50px' }}>Buyer Protection</Nav.Link>
                        <Nav.Link href="#pricing" style={{ marginLeft: '50px' }}>Customer Service</Nav.Link>
                        <Nav.Link href="#pricing" style={{ marginLeft: '50px' }}>Sell</Nav.Link>
                    </Nav>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li style={{ color: 'black', fontSize: '15px', marginRight: '100px', textTransform: 'none' }}>Share</li>
                            <li><a className="facebook" href><AiFillFacebook /></a></li>
                            <li><a className="twitter" href><AiFillTwitterCircle /></a></li>
                            <li><a className="dribbble" href><AiOutlineDribbbleSquare /></a></li>
                            <li><a className="linkedin" href><AiFillLinkedin /></a></li>
                        </ul>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

