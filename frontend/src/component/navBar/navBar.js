import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BsFillCartFill, BsHeartFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex" style={{ padding: '20px' }}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            style={{ width: '900px', }}
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Button className="me-2" variant="outline-primary"><BsFillCartFill />Cart</Button>
                    <Button className="me-2" variant="outline-primary"><BsHeartFill />Wish List</Button>
                    <Button className="me-2" variant="primary" href="/form"><FaUserAlt />Sign In</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
