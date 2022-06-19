import React, { useState, useEffect,useContext } from "react";
import "./prodAddForm.css";
import { app } from "../../../../firebase";
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Image4 from "../../../assets/kimono-baby-sweater-crochet-pattern_ccexpress 2.png";
import { AutheContext } from "../../../context/auth-context/authContext";

const ProdAddForm = () => {
const { jwt, userId } = useContext(AutheContext);
const [producttitle, SetProductTitle] = useState("");
const [productsubtitle, SetSubTitle] = useState("");
const [categoryname, SetCategoryName] = useState("");
const [imageurl, Seturl] = useState("");
const [description, Setdescription] = useState("");
const [price, Setprice] = useState("");
const [quantity, SetQuantity] = useState("");

const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getCategory`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Addproduct = (e) => {
    e.preventDefault();
    var addproduct = {
      producttitle,
      productsubtitle,
      categoryname,
      imageurl,
      description,
      price,
      quantity,
      userId,
    };
   
    axios
      .post(
        `http://localhost:8080/createProducts`,
        {
          producttitle: addproduct.producttitle,
          productsubtitle: addproduct.productsubtitle,
          categoryname: addproduct.categoryname,
          imageurl: addproduct.imageurl,
          description: addproduct.description,
          productprice: addproduct.price,
          productquantity: addproduct.quantity,
          userid: Number(addproduct.userId),
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert("Product Add");
        } else {
          alert("Product Add Failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const OnAddProduct = async (e) => {
    let photos = "";

    const file = e.target.files[0];

    const storageRef = app.storage().ref("photos");
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("Uploaded file", file.name);
      photos = fileRef.getDownloadURL(fileRef.ref).then((url) => {
        Seturl(url);
        console.log(url);
      });
    });
  };
  const navigate = useNavigate();
  function DelayRedirect(e, path) {
    e.preventDefault();
    setTimeout(() => navigate(path), 1000);
  }

  return (
    <div className="container7_add">
      <img src={Image4} className="image_add" />

      <div className="container-add-product">
        <Form className="form_add-product">
          <Form.Group controlId="ControlInput1" name="id1">
            <h2 className="h2">Add Product</h2>
            <hr></hr>
            <br />
            <br />
          </Form.Group>
          <Form.Group controlId="ControlInput2" name="id2" className="add-pro">
            <Form.Label className="label">Product Title</Form.Label>
            <Form.Control
              className="form-control_add"
              type="text"
              placeholder=""
              onChange={(e) => {
                SetProductTitle(e.target.value);
              }}
            />
            <br />
          </Form.Group>
          <Form.Group controlId="ControlInput3" name="id3" className="add-pro">
            <Form.Label className="label">Product SubTitle</Form.Label>
            <Form.Control
              className="form-control_add"
              type="text"
              placeholder=""
              onChange={(e) => {
                SetSubTitle(e.target.value);
              }}
            />
            <br />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label">Category Select</Form.Label>
            <Form.Select
              className="form-control_add"
              onChange={(e) => SetCategoryName(e.target.value)}
            >
              <option>Select Category</option>
              {categories.map((category) => {
                return (
                  <React.Fragment key={category.id}>
                    <option value={category.categoryname}>
                      {category.categoryname}
                    </option>
                  </React.Fragment>
                );
              })}
            </Form.Select>
            <br />
          </Form.Group>
          <Form.Group controlId="formFile">
            <Form.Label className="label">file input</Form.Label>
            <Form.Control
              type="file"
              onChange={OnAddProduct}
              className="form-control_add"
            />
            <br />
          </Form.Group>
          <Form.Group controlId="ControlInput4" name="id3">
            <Form.Label className="label">Description</Form.Label>
            <Form.Control
              className="text_add"
              as="textarea"
              placeholder="description"
              onChange={(e) => {
                Setdescription(e.target.value);
              }}
            />
            <br />
          </Form.Group>
          <Form.Group controlId="ControlInput5" name="id4">
            <Form.Label className="label">Product Price</Form.Label>
            <Form.Control
              className="form-control_add"
              type="number"
              placeholder=""
              onChange={(e) => {
                Setprice(e.target.valueAsNumber);
              }}
            />
            <br />
          </Form.Group>
          <Form.Group controlId="ControlInput6" name="id4">
            <Form.Label className="label">Product Quantity</Form.Label>
            <Form.Control
              className="form-control_add"
              type="number"
              placeholder=""
              onChange={(e) => {
                SetQuantity(e.target.valueAsNumber);
              }}
            />
            <br />
          </Form.Group>
          <br />
          <br />
          <Link to="/productview">
            <Button
              variant="outline-dark"
              className="button_cancel_add btn btn-light"
            >
              Cancel
            </Button>
          </Link>
          <Link
            to="/productview"
            onClick={(e) => DelayRedirect(e, "/productview")}
          >
            <Button
              variant="outline-dark"
              type="submit"
              className="button_create_add btn btn-light"
              onClick={Addproduct}
            >
              create
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default ProdAddForm;
