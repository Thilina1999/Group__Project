import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import "./updateCategory.css";

const UpdateCategory = () => {
  const [id, setID] = useState("");
  const [category, setCategory] = useState("");

  const data1 = Number(localStorage.getItem("CategoryId"));

  useEffect(() => {
    setID(data1);
    setCategory(localStorage.getItem("CategoriesName"));
  }, []);

  const UpdateApi = () => {
    const updateData = {
      id,
      category,
    };

    axios
      .put(`http://localhost:8090/update/{id}`, updateData)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  // if(redirect){
  //     return <Navigate to="/viewCategory" />;

  // }
  const navigate = useNavigate();

  function delayRedirect(e, path) {
    e.preventDefault();

    // Do something..

    setTimeout(() => navigate(path), 300);
  }

  return (
    <Form className="form">
      <h1>Category Update</h1>
      <Form.Group className="mb-3" controlId="ControlInput3" name="category">
        <Form.Label>Category Name</Form.Label>

        <Form.Control
          type="text"
          placeholder={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant="outline-dark" type="submit" className="button">
        cancel
      </Button>
      <Button
        variant="outline-dark"
        type="submit"
        className="button1"
        onClick={UpdateApi}
      >
        Submit
      </Button>
    </Form>
  );
};

export default UpdateCategory;
