import React, { useState,useContext } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./addcategory.css";
import { useNavigate, Link } from "react-router-dom";
import Image3 from "../../../assets/kimono-baby-sweater-crochet-pattern_ccexpress 2.png"
import { AutheContext } from "../../../context/auth-context/authContext";
import Notification from "../../../notification/notification"
import Navbar1 from "../../../navbarNew/navbarNew";
import Announcement from "../../../Announcement/announcement";
import Footer1 from "../../../footerNew/footerNew";

const AddCategory = () => {
  const { jwt, userId } = useContext(AutheContext);
  const [ notify, setNotify ] = useState({Open:false, message:'', type:''})
  // console.log(jwt, userId);
  const token = localStorage.getItem('auth-token')
  const [categoryname, setCatname] = useState("");

const SendData = (e) => {
    e.preventDefault();

    var addCategerytData = {
      
      categoryname,
    };
    axios
      .post(`http://localhost:8080/createCategory`, addCategerytData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("d", res);

        if (res.data.status === 200) {
          setNotify({
            Open: true,
            message: res.data.message,
            type: res.data.type,
          })
        } else if (res.data.status === 404) {
           setNotify({
             Open: true,
             message: res.data.message,
             type: res.data.type,
           });
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
      setTimeout(() => navigate(path), 2500);
    }

  return (
    <>
      <Announcement />
      <Navbar1 />
      <br />
      <br />
      <br />
      <br />
      <div className="container6">
        <img src={Image3} className="image3" alt="background" />
        <div className="container-cat">
          <Form className="form">
            <Form.Group className="mb-3" controlId="ControlInput1" name="id">
              <h2 className="h2-add">Add Category</h2>
              <hr></hr>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ControlInput2"
              name="catname"
            >
              <Form.Label className="label-add">Name</Form.Label>
              <Form.Control
                className="form-control-add"
                type="text"
                placeholder="Enter the Category Name"
                onChange={(e) => {
                  setCatname(e.target.value);
                }}
              />
            </Form.Group>
            <br />
            <Link to="/viewCategory">
              <Button
                variant="outline-dark"
                className="button-add btn btn-light"
              >
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
                className="button1-add btn btn-light"
                onClick={SendData}
              >
                create
              </Button>
            </Link>
          </Form>
          <Notification notify={notify} setNotify={setNotify} />
        </div>
      </div>
      <Footer1 />
    </>
  );
};
export default AddCategory;
