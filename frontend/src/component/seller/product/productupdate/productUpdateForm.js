import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Image4 from "../../../assets/kimono-baby-sweater-crochet-pattern_ccexpress 2.png";
import { app } from "../../../../firebase";
import "../productupdate/productUpdateForm.css";


const ProductUpdateForm = () => {
  const params = useParams();
  let [producttitle, SetProductTitle] = useState("");
  let [productsubtitle, SetSubTitle] = useState("");
  let [categoryid, SetCategoryId] = useState("");
  let [categoryname, SetCategoryName] = useState("");
  let [imageurl, Seturl] = useState("");
  let [description, Setdescription] = useState("");
  let [price, Setprice] = useState("");
  let [quantity, SetQuantity] = useState("");
  let [productlist, SetProductlist] = useState([]);
  let [categorieslist, setCategorieslist] = useState([]);


    useEffect(() => {
      axios
        .get("http://localhost:8080/getCategory")
        .then((response) => {
          setCategorieslist(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getProductByid/${params.id}`)
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
    categoryid,
    categoryname,
    imageurl,
    description,
    price,
    quantity,
  };
  
  axios.put(`http://localhost:8080/updateProduct/${params.id}`,{
    producttitle: addproduct.producttitle,
    productsubtitle: addproduct.productsubtitle,
    categoryid: Number(addproduct.categoryid),
    imageurl: addproduct.imageurl,
    description: addproduct.description,
    productprice: addproduct.price,
    productquantity: addproduct.quantity,
  }).then((response) => {
     if (response.status === 200) {
       alert("Product Update");
     } else {
       alert("Product Update Failed");
     }
  }).catch((err) => {
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
      <img src={Image4} className="image4_update" />

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
              value={categorieslist.id}
              onChange={(e) => SetCategoryId(e.target.value)}
            >
              <option>Select Category</option>
              {categorieslist.map((category) => {
                return (
                  <React.Fragment key={category.id}>
                    <option value={category.id}>{category.categoryname}</option>
                  </React.Fragment>
                );
              })}
            </Form.Select>
            <br />
          </Form.Group>
          <Form.Group controlId="formFile">
            <Form.Label className="label">file input</Form.Label>
            <Form.Control type="file" onChange={OnAddProduct} />
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
              className="button3_update btn btn-light"
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
              className="button4_update btn btn-light"
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
