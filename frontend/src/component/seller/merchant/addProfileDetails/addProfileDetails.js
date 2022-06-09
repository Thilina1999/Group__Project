import React,{ useState,useEffect }from'react';
import './addProfileDetails.css';
import { app } from "../../../../firebase"
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const AddProfileDetails=()=> {
  
  let [Merchantid, SetMerchantid] = useState("");
  let [MerchantlegalName, SetMerchantlegalName] = useState("");
  let [OfficialWebsite,SetOfficialWebsite]=useState("");
  let [ContactPersonEmailID,SetContactPersonEmailID]=useState("");
  let [ContactPersonMobileNumber,SetContactPersonMobileNumber]=useState("");
  let [BusinessAddress,SetBusinessAddress]=useState("");
  let [Profile,SetProfile]=useState("");
  let [ProductDescription,SetProductDescription]=useState("");
  let [AverageProductValue,SetAverageProductValue]=useState("");
  let [CompanyLogourl,SetCompanyLogourl]=useState("");
 
    
  const Addprofile = (e) => {
      e.preventDefault();
      var addmerchant = {
        Merchantid,
        MerchantlegalName,
        OfficialWebsite,
        ContactPersonEmailID,
        ContactPersonMobileNumber,
        BusinessAddress,
        Profile,
        ProductDescription,
        AverageProductValue,
        CompanyLogourl,
      };
      console.log(Merchantid);
      console.log(typeof(Merchantid));
      axios
        .post(`http://localhost:8080/createMerchant`, {
          
          merchantlegalname: addmerchant.MerchantlegalName,
          officialwebsite: addmerchant.OfficialWebsite,
          contactpersonemailid: addmerchant.ContactPersonEmailID,
          contactpersonmobilenumber: addmerchant.ContactPersonMobileNumber,
          businessaddress: addmerchant.BusinessAddress,
          profile: addmerchant.Profile,
          productdescription: addmerchant.ProductDescription,
          averageproductvalue: addmerchant.AverageProductValue,
          companylogourl: addmerchant.UploadCompanyLogo,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert("Information added");
          } else {
            alert("Information Add Failed");
          }
        })
        .catch((error) => {
          console.log(error);
        });

  }

    const OnAddlogo = async (e) => {
      let profilePhoto="";
      
      const file = e.target.files[0];
      
      const storageRef = app.storage().ref("profilePhoto");
      const fileRef = storageRef.child(file.name);
      fileRef.put(file).then(() => {
        console.log("Uploaded file", file.name);
        profilePhoto = fileRef.getDownloadURL(fileRef.ref).then((url) => {
        
          SetCompanyLogourl(url);
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
      <div className="containerFour_add">
        <div className="container">
          <Form className="form4_add">
            <Form.Group controlId="ControlInput1" name="id1">
              <h2 className="h2">Merchant Profile</h2>
              <hr></hr>
              <br/>
            </Form.Group>
            <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label">Merchant Name</Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Merchant Name"
                onChange={(e) => {
                  SetMerchantlegalName(e.target.value);
                }}
              />
              <br />
            </Form.Group>
            <Form.Group controlId="formFile">
              <Form.Label className="label">Upload Company logo</Form.Label>
              <Form.Control type="file" onChange={OnAddlogo} />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput3" name="id3">
              <Form.Label className="label">Official Website</Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Official Website"
                onChange={(e) => {
                  SetOfficialWebsite(e.target.value);
                }}
              />
              <br />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label">Email Address</Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="email"
                placeholder="Email Address"
                onChange={(e) => {
                  SetContactPersonEmailID(e.target.value);
                }}
              />
               <br />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label">Mobile Number</Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Mobile Number"
                onChange={(e) => {
                  SetContactPersonMobileNumber(e.target.value);
                }}
              />
              <br />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label">Address</Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Address"
                onChange={(e) => {
                  SetBusinessAddress(e.target.value);
                }}
              />
             <br/>
            </Form.Group>
            <Form.Group controlId="ControlInput4" name="id3">
              <Form.Label className="label">Profile</Form.Label>
              <Form.Control
                className="text1_add"
                as="textarea"
                placeholder="Profile"
                style={{ height: "200px" }}
                onChange={(e) => {
                  SetProfile(e.target.value);
                }}
              />
            <br/>
            </Form.Group>
            <Form.Group controlId="ControlInput4" name="id3">
              <Form.Label className="label">Product Description</Form.Label>
              <Form.Control
                className="text1_add"
                as="textarea"
                placeholder="Product Description"
                style={{ height: "200px" }}
                onChange={(e) => {
                  SetProductDescription(e.target.value);
                }}
              />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput5" name="id4">
              <Form.Label className="label">Average Product Value</Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="number"
                placeholder="Average Product Value"
                onChange={(e) => {
                  SetAverageProductValue(e.target.valueAsNumber);
                }}
              />
              <br />
            </Form.Group>
            <br />
            <br />
            <Link
              to="/profileView"
              onClick={(e) => DelayRedirect(e, "/profileView")}
            >
              <Button
                variant="outline-dark"
                type="set"
                className="button4_add btn btn-light"
                onClick={Addprofile}
              >
                Set
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    );
}

export default AddProfileDetails;
