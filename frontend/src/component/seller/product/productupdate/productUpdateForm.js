import React, { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Image4 from "../../../assets/kimono-baby-sweater-crochet-pattern_ccexpress 2.png";
import { app } from "../../../../firebase";
import "../productupdate/productUpdateForm.css";
import { AutheContext } from "../../../context/auth-context/authContext";


const ProductUpdateForm = () => {
  const { jwt, userId } = useContext(AutheContext);
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

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getProductByid/${params.id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
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
        headers: { Authorization: `Bearer ${jwt}` },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        alert("Product Update");
      } else {
        alert("Product Update Failed");
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
    setTimeout(() => navigate(path), 600);
  }


  return (
    <div className="container7_update">
      <div className="container">
        <Form className="form4_update">
          <Form.Group controlId="ControlInput1" name="id1">
            <h2 className="h2">Update Product</h2>
            <hr></hr>
            <br />
            <br />
          </Form.Group>
          <Form.Group controlId="ControlInput2" name="id2">
            <Form.Label className="label">Product Title</Form.Label>
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
            <Form.Label className="label">Product SubTitle</Form.Label>
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
            <Form.Label className="label">Category Select</Form.Label>
            <Form.Select
              className="form-control1_update"
              onChange={(e) => SetCategoryName(e.target.value)}
            >
              <option>Select Category</option>
              {categories.map((category) => {
                return (
                  <React.Fragment key={category.categoryname}>
                    <option value={category.id}>{category.categoryname}</option>
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
              className="form-control1_update"
            />
            <br />
          </Form.Group>
          <Form.Group controlId="ControlInput4" name="id3">
            <Form.Label className="label">Description</Form.Label>
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
            <Form.Label className="label">Product Price</Form.Label>
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
            <Form.Label className="label">Product Quantity</Form.Label>
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
            >
              Update
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default ProductUpdateForm;
