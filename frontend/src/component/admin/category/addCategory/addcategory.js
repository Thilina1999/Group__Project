import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./addcategory.css";
import { useNavigate, Navigate, Link } from "react-router-dom";

const AddCategory = () => {
  let [id, setId] = useState("");
  let [category, setCatname] = useState("");

  const SendData = (e) => {
    e.preventDefault();

    var addCategerytData = {
      id,
      category,
    };

    console.log(id, category);
    console.log(typeof addCategerytData.id);

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
        alert(err);
      });
  };
    const navigate = useNavigate();
    function DelayRedirect(e, path) {
      e.preventDefault();

      // Do something..

      setTimeout(() => navigate(path), 300);
    }

  return (
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

      <Button variant="outline-primary" className="button btn btn-light">
        Cancel
      </Button>
      <Button
        variant="outline-primary"
        type="submit"
        className="button1 btn btn-light"
        onClick={SendData}
      >
        <Link
          to="/viewCategory"
          onClick={(e) => DelayRedirect(e, "/viewCategory")}
        >
          create
        </Link>
      </Button>
    </Form>
  );
};
export default AddCategory;
