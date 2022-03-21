import React from 'react';
import { Form, Button, Container, FormLabel } from 'react-bootstrap';

export default function CheckMail() {
  return (
    <div style={{ padding: '30px', backgroundColor: 'rgb(181,214,222)'}}>
      <Container style={{
        height: '300px',
        width: '500px',
        backgroundColor: 'rgba(255, 255, 255, 0.39)',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0px 2px 7px rgba(0,0,0,0.2)'
      }}>
        <FormLabel style={{
          marginRight: '250px',
          paddingRight: '50px',
          paddingTop: '20px',
          paddingBottom: '20px',
          fontSize: '20px',
          fontWeight: '500'
        }}>Forgot Password</FormLabel>
        <Form style={{ textAlign: 'left' }}>

          No Problem! Enter your email below and then you can reset your password.<br />
          <br />

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" style={{ borderRadius: '15px' }}/>
          </Form.Group>
          <Button type="submit" style={{ backgroundColor: '#75C6DC', borderRadius: '20px'}}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
