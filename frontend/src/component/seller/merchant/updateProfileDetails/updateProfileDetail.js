import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { app } from "../../../../firebase";
import { Description } from "@material-ui/icons";
import { AutheContext } from "../../../context/auth-context/authContext";

const UpdateProfileDetails=()=> {
    const params = useParams();
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
    let [merchantlist, SetMerchantlist] = useState([]);
    
  useEffect(() => {
    
    axios
      .get(`http://localhost:8080/getDataById/${params.id}`,
      {
        headers: { Authorization: `Bearer ${jwt}` },
      }
      )
      .then((response) => {
        SetMerchantlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    const Updateprofile = () => {
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

    axios.put(`http://localhost:8080/updateMerchant/${params.id}`,{
        merchantlegalname: addmerchant.MerchantlegalName,
        officialwebsite: addmerchant.OfficialWebsite,
        contactpersonemailid: addmerchant.ContactPersonEmailID,
        contactpersonmobilenumber: addmerchant.ContactPersonMobileNumber,
        businessaddress: addmerchant.BusinessAddress,
        profile: addmerchant.Profile,
        productdescription: addmerchant.ProductDescription,
        averageproductvalue: addmerchant.AverageProductValue,
        companylogourl: addmerchant.UploadCompanyLogo,
        userid: Number(addmerchant.userId),
    },
    {
      headers: { Authorization: `Bearer ${jwt}` },
    }
    
    ).then((response) => {
        if (response.status === 200) {
            alert("Profile Update");
          } else {
            alert("Profile Update Failed");
          }
       }).catch((err) => {
         console.log(err);
       });
    }

    const OnAddlogo = async (e) => {
        let profilePhoto = "";
      
        const file = e.target.files[0];
      
        const storageRef = app.storage().ref("profilePhoto");
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(() => {
          console.log("Uploaded file", file.name);
          profilePhoto = fileRef.getDownloadURL(fileRef.ref).then((url) => {
            CompanyLogourl(url);
            console.log(url);
          });
        });
      };

    const navigate = useNavigate();
    function DelayRedirect(e, path) {
    e.preventDefault();
    setTimeout(() => navigate(path), 600);
  }
  console.log(merchantlist)
  return (
    
    <div className="containerFour_add">
      <div className="container">
        <Form className="form4_add">
          <Form.Group controlId="ControlInput1" name="id1">
            <h2 className="h2">Update Merchant Profile</h2>
            <hr></hr>
            <br/>
          </Form.Group>
          <Form.Group controlId="ControlInput2" name="id2">
            <Form.Label className="label"><p>Merchant Name</p></Form.Label>
            <Form.Control
              className="form-controlOne_add"
              type="text"
              placeholder={merchantlist.merchantlegalname}
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
              placeholder={merchantlist.officialwebsite}
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
              placeholder={merchantlist.contactpersonemailid}
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
              placeholder={merchantlist.contactpersonmobilenumber}
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
              placeholder={merchantlist.businessaddress}
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
              placeholder={merchantlist.profile}
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
              placeholder={merchantlist.productdescription}
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
              placeholder={merchantlist.averageproductvalue}
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
              onClick={Updateprofile}
            //   disabled={!this.addmerchant.MerchantlegalName || !this.addmerchant.OfficialWebsite || 
            //     !this.addmerchant.ContactPersonEmailID || !this.addmerchant.ContactPersonMobileNumber ||
            //   !this.addmerchant.BusinessAddress || !this.addmerchant.Profile || !this.addmerchant.ProductDescription ||
            // !this.addmerchant.AverageProductValue || !this.addmerchant.UploadCompanyLogo }
            >
              Update
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default UpdateProfileDetails;
