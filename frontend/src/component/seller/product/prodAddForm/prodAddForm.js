import React,{ useState,useEffect }from 'react';
import './prodAddForm.css';
import { app } from "../../../../firebase"
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Image4 from "../../../assets/kimono-baby-sweater-crochet-pattern_ccexpress 2.png";


const ProdAddForm=()=> {
  let[id,Setid]=useState("");
  let [producttitle, SetProductTitle] = useState("");
  let [productsubtitle,SetSubTitle] = useState("");
  let[categoryid,SetCategoryId]=useState("");
  let [categoryname,SetCategoryName]=useState("");
  let[imageurl,Seturl]=useState("");
  let[description,Setdescription]=useState("");
  let[price,Setprice]=useState("");
  let[quantity,SetQuantity]=useState("");

  let[categorieslist,setCategorieslist]=useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/getCategory")
      .then((response) => {
        
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
        producttitle,
        productsubtitle,
        categoryid,
        categoryname,
        imageurl,
        description,
        price,
        quantity,
      };
      console.log(categoryid);
      console.log(typeof(categoryid));
      axios
        .post(`http://localhost:8080/createProducts`, {
          id: addproduct.id,
          producttitle: addproduct.producttitle,
          productsubtitle: addproduct.productsubtitle,
          categoryid: Number(addproduct.categoryid),
          imageurl: addproduct.imageurl,
          description: addproduct.description,
          productprice: addproduct.price,
          productquantity: addproduct.quantity,
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

    const OnAddProduct = async (e) => {
      let photos="";
      
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
                placeholder=""
                onChange={(e) => {
                  Setid(e.target.valueAsNumber);
                }}
              />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label">Product Title</Form.Label>
              <Form.Control
                className="form-control1"
                type="text"
                placeholder=""
                onChange={(e) => {
                  SetProductTitle(e.target.value);
                }}
              />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput3" name="id3">
              <Form.Label className="label">Product SubTitle</Form.Label>
              <Form.Control
                className="form-control1"
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
                className="form-control1"
                value={categorieslist.id}
                onChange={(e) => SetCategoryId(e.target.value)}
              >
                <option>Select Category</option>
                {categorieslist.map((category) => {
                  return (
                    <React.Fragment key={category.id}>
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
              <Form.Label className="label">file input</Form.Label>
              <Form.Control type="file" onChange={OnAddProduct} />
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
                className="form-control1"
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
