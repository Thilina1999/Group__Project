import React from 'react';

import './prodAddForm.css';
import { app } from "../../../../firebase"
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image4 from "../../../assets/kimono-baby-sweater-crochet-pattern_ccexpress 2.png";


const ProdAddForm=()=> {

    const onAddProduct = (e) => {
      let photos="";
      const file = e.target.files[0];
      const storageRef = app.storage().ref("photos");
      const fileRef = storageRef.child(file.name);
      fileRef.put(file).then(() => {
        console.log("Uploaded file", file.name);
        photos = fileRef.getDownloadURL(fileRef.ref).then((url) => {
        //   setaddGem({ ...addGem, photos: url });
          console.log(url);
          
        });
      });
      
    };
    return (
      <div className="container7">
        <img src={Image4} className="image4" />

        <div className="container">
          <Form className="form4">
            <Form.Group controlId="ControlInput1" name="id1">
              <h2 className="h2">Add Product</h2>
              <hr></hr>
              <br />
              <Form.Label className="label">ID</Form.Label>
              <Form.Control
                className="form-control1"
                type="number"
                placeholder="Enter the Product Id"
              />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput1" name="id2">
              <Form.Label className="label">Product Name</Form.Label>
              <Form.Control
                className="form-control1"
                type="text"
                placeholder="Enter the Product Name"
              />
              <br />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label">Category Select</Form.Label>
              <Form.Select className="form-control1">
                <option>Default select</option>
              </Form.Select>
              <br />
            </Form.Group>
            <Form.Group controlId="formFile">
              <Form.Label className="label">file input</Form.Label>
              <Form.Control type="file" />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput1" name="id3">
              <Form.Label className="label">Description</Form.Label>
              <Form.Control
                className="text1"
                as="textarea"
                placeholder="   description"
                style={{ height: "200px" }}
              />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput1" name="id4">
              <Form.Label className="label">Product Price</Form.Label>
              <Form.Control
                className="form-control1"
                type="text"
                placeholder="Enter the Product price"
              />
              <br />
            </Form.Group>
            <br />
            <br />
            <Link to="/">
              <Button variant="outline-dark" className="button3 btn btn-light">
                Cancel
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="outline-dark"
                type="submit"
                className="button4 btn btn-light"
              >
                create
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    );
}

export default ProdAddForm;
