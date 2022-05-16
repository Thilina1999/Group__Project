import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./addcategory.css";
import { useNavigate, Link } from "react-router-dom";
import Image3 from "../../../assets/kimono-baby-sweater-crochet-pattern_ccexpress 2.png"

const AddCategory = () => {
  let [id, setId] = useState("");
  let [categoryname, setCatname] = useState("");

  const SendData = (e) => {
    e.preventDefault();

    var addCategerytData = {
      id,
      categoryname,
    };

   
    

    axios
      .post(`http://localhost:8080/createCategory`, addCategerytData)
      .then((res) => {
        console.log(res);

        if (res.status === 201) {
          alert("Category Add");
        } else {
          Promise.reject();
        }
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
    const navigate = useNavigate();
    function DelayRedirect(e, path) {
      e.preventDefault();
      setTimeout(() => navigate(path), 300);
    }

  return (
    <div className="container6">
      <img src={Image3} className="image3" alt="background"/>
      <div className="container">
        <Form className="form">
          <Form.Group className="mb-3" controlId="ControlInput1" name="id">
            <h2 className="h2">Add Category</h2>
            <hr></hr>
            <br />
            <Form.Label className="label">ID</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              placeholder="Enter the Category Id"
              onChange={(e) => {
                setId(e.target.valueAsNumber);
              }}
            />
            <br />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlInput2" name="catname">
            <Form.Label className="label">Name</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder="Enter the Category Name"
              onChange={(e) => {
                setCatname(e.target.value);
              }}
            />
          </Form.Group>
          <br />
          <Link to="/viewCategory">
            <Button variant="outline-dark" className="button btn btn-light">
              Cancel
            </Button>
          </Link>
          <Link
            to="/viewCategory"
            onClick={(e) => DelayRedirect(e, "/viewCategory")}
          >
            <Button
              variant="outline-dark"
              type="submit"
              className="button1 btn btn-light"
              onClick={SendData}
            >
              create
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};
export default AddCategory;
