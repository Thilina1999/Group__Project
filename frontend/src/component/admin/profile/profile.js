import React from "react";
import { Button,Form,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./profile.css";

function Profile(){
    return(
      <div className="admin-profile-form-rectangle">
        <Form >
          <h1 className="admin-profile-form-topic"><b>Edit Profile</b></h1><br/>
          <div className="admin-profile-form-img"></div>
          <Form.Group className="pf-img">
            <Form.Group controlId="formFile" className="mb-4">
              <Form.Control type="file" />
            </Form.Group>
          </Form.Group>
      
          <Form.Group  className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control type="text" placeholder="Telephone Number" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicCheckbox">
            <Row>
              <Col>
                <Form.Control placeholder="Date of Birth" />
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Select defaultValue="Choose...">
                    <option>Female</option>
                    <option>Male</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form.Group >

          <Form.Group className="admin-profilr-form-btnGrp">
          <Link to="/dashboard">
            <Button className="admin-profile-form-cancelBtn" variant="primary" type="cancel">
              Cancel
            </Button>
            </Link>

            <Link to="/dashboard">
            <Button className="admin-profile-form-savebtn" variant="primary" type="submit">
              Submit
            </Button>
            </Link>
          </Form.Group>  
        </Form>
      </div>
    )
}
export default Profile