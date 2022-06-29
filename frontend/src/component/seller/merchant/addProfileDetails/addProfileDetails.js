import React,{ useState, useEffect, useContext }from'react';
import './addProfileDetails.css';
import { app } from "../../../../firebase"
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AutheContext } from "../../../context/auth-context/authContext";

const AddProfileDetails=()=> {
  const { jwt, userId } = useContext(AutheContext);
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
  const [isError, setIsError] = useState("");


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
        userId,
      };
      console.log(addmerchant);
    
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
          companylogourl: addmerchant.CompanyLogourl,
          userid: Number(addmerchant.userId),
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
        )
        
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

        const [message, setMessage ] = useState("");
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

        const validation = (a) => {
          const emailVAlidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

          if((emailVAlidation.test(ContactPersonEmailID))){
            isError("Email is valid");
          } 
          else if (emailVAlidation.test(ContactPersonEmailID) && ContactPersonEmailID / "") {
            isError("Email is not valid");
          }else{
            isError("");
          }
        };

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
              <Form.Label className="label"><p>Merchant Name</p></Form.Label>
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
              <Form.Label className="label"><p>Upload Company logo</p></Form.Label>
              <Form.Control type="file" onChange={OnAddlogo} />
              <br />
            </Form.Group>
            <Form.Group controlId="ControlInput3" name="id3">
              <Form.Label className="label"><p>Official Website</p></Form.Label>
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
              <Form.Label className="label"><p>Email Address</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="email"
                placeholder="Email Address"
                errorMessage="It should be a valid email address!"
                onChange={(e) => {
                  SetContactPersonEmailID(e.target.value);
                }}
              />
               <br />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label"><p>Mobile Number</p></Form.Label>
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
              <Form.Label className="label"><p>Address</p></Form.Label>
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
              <Form.Label className="label"><p>Profile</p></Form.Label>
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
              <Form.Label className="label"><p>Product Description</p></Form.Label>
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
              <Form.Label className="label"><p>Average Product Value</p></Form.Label>
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
              to="/viewprofile"
              onClick={(e) => DelayRedirect(e, "/viewprofile")}
            >
              <Button
                variant="outline-dark"
                type="set"
                className="button4_add btn btn-light"
                onClick={Addprofile}
                disabled={!MerchantlegalName || !OfficialWebsite || !ContactPersonEmailID || !ContactPersonMobileNumber || !BusinessAddress || !Profile || !ProductDescription || !AverageProductValue || isError}
              >
                <Link
              to="/viewprofile"
              onClick={(e) => DelayRedirect(e,"/viewprofile")}
              style={{ textDecoration: "none", color: "white" }}
            >
              Set
              </Link>
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    );
}

export default AddProfileDetails;
 