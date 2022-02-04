import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { AiOutlineMenu } from 'react-icons/ai';

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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

