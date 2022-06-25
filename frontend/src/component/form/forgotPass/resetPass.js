import React, { useState } from 'react';
import { Form, Button, Container, FormLabel } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

export default function ResetPass() {
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isError, setIsError] = useState("");

  const resetPass = async (e) => {
    e.preventDefault();
    await axios.post(`api`, {
      password
    })
      .then((res) => {
        alert("Password updated..");
      })
      .catch((err) => {
        console.log(err);
      })
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to="/signin" />;
  }

  const validation = (a) => {
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;

    if (password !== a) {
      setIsError("Password and confirm password don't match");
    }
    else if (password.length < 8 || password.length > 15) {
      console.log(password.length);
      setIsError("Password length should be 8 between 15 characters")
    }
    else if (!(uppercaseRegExp.test(password))) {
      setIsError("Password should have uppercase letter")
    }
    else if (!(lowercaseRegExp.test(password))) {
      setIsError("Password should have a lowercase letter")
    }
    else if (!(digitsRegExp.test(password))) {
      setIsError("Password should have a number");
    }
    else if (!(specialCharRegExp.test(password))) {
      setIsError("Password should have a special character");
    }
    else {
      setIsError("");
    }
  }
  return (
    <div style={{ padding: '30px', backgroundColor: 'rgb(181,214,222)'}}>
      <Container style={{
        height: '340px',
        width: '500px',
        backgroundColor: 'rgba(255, 255, 255, 0.39)',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0px 2px 7px rgba(0,0,0,0.2)'
      }}>
        <FormLabel style={{
          marginRight: '190px',
          paddingRight: '50px',
          paddingTop: '20px',
          paddingBottom: '20px',
          fontSize: '20px',
          fontWeight: '500'
        }}>Reset account password</FormLabel>
        <Form style={{ textAlign: 'left' }}>

          Enter new passowrd and confirm password.<br />
          <br />

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="password" placeholder="New password" style={{ borderRadius: '15px' }} required onChange={(e)=>{
              setPassword(e.target.value);
            }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="password" placeholder="Confirm password" style={{ borderRadius: '15px' }} required onChange={(e)=>{
              const a = e.target.value;
              validation(a);
            }}/>
            <span style={{ color: "red", fontSize: "13px" }}>{isError}</span>
          </Form.Group>
      
          <Link to="/signin/checkmail/resetpass">
          <Button type="submit" style={{ backgroundColor: '#75C6DC', borderRadius: '20px'}} onClick={resetPass}
          disabled={ !password || isError}
          >
            Reset password
          </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}
