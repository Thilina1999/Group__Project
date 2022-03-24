import React,{ useState,useEffect }from 'react';
import './prodAddForm.css';
import { app } from "../../../../firebase"
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Image4 from "../../../assets/kimono-baby-sweater-crochet-pattern_ccexpress 2.png";


const ProdAddForm=()=> {
  let[id,Setid]=useState("");
  let[productname,Setname]=useState("");
  let[categoryid,SetCategoryId]=useState("");
  let[imageurl,Seturl]=useState("");
  let[description,Setdescription]=useState("");
  let[price,Setprice]=useState("");

  let[categorieslist,setCategorieslist]=useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/getCategory")
      .then((response) => {
        console.log(response.data);
        setCategorieslist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  const Addproduct = (e) => {
      e.preventDefault();
      var addproduct = {
        id,
        productname,
        categoryid,
        imageurl,
        description,
        price
      }
      console.log(addproduct);
      axios
        .post(`http://localhost:8080/createProduct`, {
          id: addproduct.id,
          productname: addproduct.productname,
          categoryid: addproduct.categoryid,
          imageurl: addproduct.imageurl,
          description: addproduct.description,
          productprice: addproduct.price,
        })
        .then((response) => {
          console.log(response);
          if (response.status == 201) {
            alert("Product Add");
          } else {
            alert("Product Add Failed");
          }
        })
        .catch((error) => {
          console.log(error);
        });

  }

    const OnAddProduct = (e) => {
      let photos="";
      const file = e.target.files[0];
      const storageRef = app.storage().ref("photos");
      const fileRef = storageRef.child(file.name);
      fileRef.put(file).then(() => {
        console.log("Uploaded file", file.name);
        photos = fileRef.getDownloadURL(fileRef.ref).then((url) => {
        //   setaddGem({ ...addGem, photos: url });
              Seturl(url);
          console.log(url);
          
        });
      });
      
    };
    return (
      <div className="container7">
        <img src={Image4} className="image4" />

        <div className="container">
          <Form className="form4">
            <Form.Group controlId="ControlInput1" name="id1">
              <h2 className="h2">Add Product</h2>
              <hr></hr>
              <br />
              <Form.Label className="label">ID</Form.Label>
              <Form.Control
                className="form-control1"
                type="number"
                placeholder="Enter the Product Id"
                onChange={(e) => {
                  Setid(e.target.valueAsNumber);
                }}
              />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label">Product Name</Form.Label>
              <Form.Control
                className="form-control1"
                type="text"
                placeholder="Enter the Product Name"
                onChange={(e) => {
                  Setname(e.target.value);
                }}
              />
              <br />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label">Category Select</Form.Label>
              <Form.Select
                className="form-control1"
                onChange={(e) => {
                  SetCategoryId(e.target.value)
                }}
              >
                <option>Select Category</option>
                {categorieslist.map((category) => {
                  return (
                    <React.Fragment key={category.categoryid}>
                      <option value={category.categoryid}>
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
              <Form.Control type="file" onClick={OnAddProduct} />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput4" name="id3">
              <Form.Label className="label">Description</Form.Label>
              <Form.Control
                className="text1"
                as="textarea"
                placeholder="   description"
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
                className="form-control1"
                type="number"
                placeholder="Enter the Product price"
                onChange={(e) => {
                  Setprice(e.target.valueAsNumber);
                }}
              />
              <br />
            </Form.Group>
            <br />
            <br />
            <Link to="/">
              <Button variant="outline-dark" className="button3 btn btn-light">
                Cancel
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="outline-dark"
                type="submit"
                className="button4 btn btn-light"
                onClick={Addproduct}
              >
                create
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    );
}

export default ProdAddForm;
