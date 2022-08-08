import React, { useState } from "react";
import './shipping.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Placeholder } from "react-bootstrap";
//import "./Login.css";

export default function Login() {

  const [receivername, setName] = useState("");
  const [streetline01, setLine01] = useState("");
  const [streetline02, setLine02] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isError, setIsError] = useState("");
  const token = localStorage.getItem("auth-token");

  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/setAddress`, {
      receivername,
      streetline01,
      streetline02,
      city,
      country,
      zipcode
    }, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        alert("User added..");
      })
      .catch((err) => {
        console.log(err);
      })
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to="/pay" />;
  }

  return (

    <div className="Login">

      <Form>

        <Form.Group size="lg" controlId="receivername">

          <Form.Label>Receiver's Name</Form.Label>

          <Form.Control

            autoFocus

            type="name"

            value={receivername}

            onChange={(e) => setName(e.target.value)}

            placeholder="Anne Jayathunga"

          />

        </Form.Group>

        <Form.Group size="lg" controlId="streetline01">

          <Form.Label>Street Line 01</Form.Label>

          <Form.Control

            type="name"

            value={streetline01}

            onChange={(e) => setLine01(e.target.value)}
            
            placeholder="No.61/12A "

          />
          </Form.Group>

          <Form.Group size="lg" controlId="streetline02">

          <Form.Label>Street Line 02</Form.Label>

          <Form.Control

            type="name"

            value={streetline02}

            onChange={(e) => setLine02(e.target.value)}

            placeholder="Peter's Avenue"

          />
          </Form.Group>
          <Form.Group size="lg" controlId="city">

          <Form.Label>City</Form.Label>

          <Form.Control

            type="name"

            value={city}

            onChange={(e) => setCity(e.target.value)}

            placeholder="Mirihana"

          />
          </Form.Group>
          <Form.Group size="lg" controlId="country">

          <Form.Label>Country</Form.Label>

          <Form.Control

            type="name"

            value={country}

            onChange={(e) => setCountry(e.target.value)}

            placeholder="Sri Lanka"

          />
          </Form.Group>
          <Form.Group size="lg" controlId="zipcode">

          <Form.Label>Zip Code</Form.Label>

          <Form.Control

            type="name"

            value={zipcode}

            onChange={(e) => setZipcode(e.target.value)}

            placeholder="10287"

          />
          </Form.Group>



        <Button block size="lg" type="submit" onClick={submit}
                disabled={!receivername || !streetline01 || !streetline02 || !city || !country || !zipcode}>

          ENTER

        </Button>

      </Form>

    </div>

  );

}