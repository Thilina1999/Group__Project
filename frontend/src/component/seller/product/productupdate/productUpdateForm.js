import React, { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Image4 from "../../../assets/kimono-baby-sweater-crochet-pattern_ccexpress 2.png";
import { app } from "../../../../firebase";
import "../productupdate/productUpdateForm.css";
import { AutheContext } from "../../../context/auth-context/authContext";
import Footer1 from "../../../footerNew/footerNew";

import Announcement from "../../../Announcement/announcement";
import Navbar1 from "../../../navbarNew/navbarNew";
import Notification from "../../../notification/notification";

const ProductUpdateForm = () => {
  // const { jwt, userId } = useContext(AutheContext);
  const params = useParams();
  const [producttitle, SetProductTitle] = useState("");
  const [productsubtitle, SetSubTitle] = useState("");
  const [categoryname, SetCategoryName] = useState("");
  const [imageurl, Seturl] = useState("");
  const [description, Setdescription] = useState("");
  const [price, Setprice] = useState("");
  const [quantity, SetQuantity] = useState("");
  const [productlist, SetProductlist] = useState([]);
 const [categories, setCategories] = useState([]);
const [notify, setNotify] = useState({ Open: false, message: "", type: "" });
 const token = localStorage.getItem("auth-token");
const userId = localStorage.getItem("id");

useEffect(() => {
 
      axios
        .get(`http://localhost:8080/getCategory`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setCategories(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getProductByid/${params.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        SetProductlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
const UpdateProduct = () => {
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
  console.log(addproduct.producttitle);
  axios
    .put(
      `http://localhost:8080/updateProduct/${params.id}`,
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
}

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
    setTimeout(() => navigate(path), 2500);
  }


  return (
    <>
      <Announcement />
      <Navbar1 />
      <br />
      <br />
      <br />
      <div className="container7_update">
        <div className="container-update">
          <Form className="form4_update">
            <Form.Group controlId="ControlInput1" name="id1">
              <h2 className="h2-update">Update Product</h2>
              <hr></hr>
              <br />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label-product-update">
                Product Title
              </Form.Label>
              <Form.Control
                className="form-control1_update"
                type="text"
                placeholder={productlist.producttitle}
                onChange={(e) => {
                  SetProductTitle(e.target.value);
                }}
              />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput3" name="id3">
              <Form.Label className="label-product-update">
                Product SubTitle
              </Form.Label>
              <Form.Control
                className="form-control1_update"
                type="text"
                placeholder={productlist.productsubtitle}
                onChange={(e) => {
                  SetSubTitle(e.target.value);
                }}
              />
              <br />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label-product-update">
                Category Select
              </Form.Label>
              <Form.Select
                className="form-control1_update"
                onChange={(e) => SetCategoryName(e.target.value)}
              >
                <option>Select Category</option>
                {categories.map((category) => {
                  return (
                    <React.Fragment key={category.categoryname}>
                      <option value={category.id}>
                        {category.categoryname}
                      </option>
                    </React.Fragment>
                  );
                })}
              </Form.Select>
              <br />
            </Form.Group>
            <Form.Group controlId="formFile">
              <Form.Label className="label-product-update">
                file input
              </Form.Label>
              <Form.Control
                type="file"
                onChange={OnAddProduct}
                className="form-control1_update"
              />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput4" name="id3">
              <Form.Label className="label-product-update">
                Description
              </Form.Label>
              <Form.Control
                className="text1_update"
                as="textarea"
                placeholder={productlist.description}
                style={{ height: "200px" }}
                onChange={(e) => {
                  Setdescription(e.target.value);
                }}
              />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput5" name="id4">
              <Form.Label className="label-product-update">
                Product Price
              </Form.Label>
              <Form.Control
                className="form-control1_update"
                type="number"
                placeholder={productlist.productprice}
                onChange={(e) => {
                  Setprice(e.target.valueAsNumber);
                }}
              />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput6" name="id4">
              <Form.Label className="label-product-update">
                Product Quantity
              </Form.Label>
              <Form.Control
                className="form-control1_update"
                type="number"
                placeholder={productlist.productquantity}
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
                className="button4_update btn btn-light"
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
                className="button5_update btn btn-light"
                onClick={UpdateProduct}
                disabled={
                  !producttitle ||
                  !productsubtitle ||
                  !categoryname ||
                  !price ||
                  !quantity ||
                  !imageurl
                }
              >
                Update
              </Button>
            </Link>
          </Form>
        </div>
      </div>
      <Footer1 />
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default ProductUpdateForm;
