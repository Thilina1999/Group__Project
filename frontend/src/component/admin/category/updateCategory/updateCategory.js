import axios from "axios";
import React, { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form} from "react-bootstrap";
import  Image2  from "../../../assets/kimono-baby-sweater-crochet-pattern_ccexpress 2.png";
import "./updateCategory.css";
import { AutheContext } from "../../../context/auth-context/authContext";
import Notification from "../../../notification/notification";
import Announcement from "../../../Announcement/announcement";
import Footer1 from "../../../footerNew/footerNew";
import Navbar1 from "../../../navbarNew/navbarNew";


const UpdateCategory = () => {
  const { jwt, userId } = useContext(AutheContext);
   const token = localStorage.getItem("auth-token");
   const params = useParams();
 const [notify, setNotify] = useState({
   Open: false,
   message: "",
   type: "error",
 });
  const [categoryname, setCategory] = useState("");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getCategoryByid/${params.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const UpdateCategory = () => {
    console.log("gh",jwt)
    axios
      .put(
        `http://localhost:8080/updateCategory/${params.id}`,
        {
          categoryname,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
      if (res.data.status === 200) {
        setNotify({
          Open: true,
          message: res.data.message,
          type: res.data.type,
        });
      } else if (res.data.status === 404) {
        setNotify({
          Open: true,
          message: res.data.message,
          type: res.data.type,
        });
      }
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
      <div className="container5">
        <img src={Image2} className="imag2" />
        <div className="container-update">
          <Form className="form1">
            <h1 className="h1-update-cat">Category Update</h1>
            <hr></hr>
            <Form.Group
              className="mb-3"
              controlId="ControlInput3"
              name="category"
            >
              <Form.Label className="label-cat-update">
                Category Name
              </Form.Label>

              <Form.Control
                className="form-control-update"
                type="text"
                placeholder={categories.categoryname}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </Form.Group>
            <Link to="/viewCategory">
              <Button
                variant="outline-dark"
                type="submit"
                className="button-update"
              >
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
          <Notification notify={notify} setNotify={setNotify} />
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default UpdateCategory;
