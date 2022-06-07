import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form} from "react-bootstrap";
import  Image2  from "../../../assets/kimono-baby-sweater-crochet-pattern_ccexpress 2.png";
import "./updateCategory.css";

const UpdateCategory = () => {
  const [id,setID] = useState("");
  const [categoryname, setCategory] = useState("");

  const data1 = Number(localStorage.getItem("CategoryId"));

  useEffect(() => {
    setID(data1);
    setCategory(localStorage.getItem("CategoriesName"));
  }, []);

  const UpdateCategory = () => {
    const updateData = {
      categoryname,
    };

    axios
      .put(`http://localhost:8080/updateCategory/${id}`, updateData)
      .then((res) => {
        console.log(res);
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
    <div className="container5">
      <img src={Image2} className="imag2" />
      <div className="container">
        <Form className="form1">
          <h1>Category Update</h1>
          <Form.Group
            className="mb-3"
            controlId="ControlInput3"
            name="category"
          >
            <Form.Label className="label">Category Name</Form.Label>

            <Form.Control
              type="text"
              
              placeholder={categoryname}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </Form.Group>
          <Link to="/viewCategory">
            <Button variant="outline-dark" type="submit" className="button">
              cancel
            </Button>
          </Link>
          <Link
            to="/viewCategory"
            onClick={(e) => {
              DelayRedirect(e, "/viewCategory");
            }}
          >
            <Button
              variant="outline-dark"
              type="submit"
              className="button1"
              onClick={UpdateCategory}
            >
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default UpdateCategory;
