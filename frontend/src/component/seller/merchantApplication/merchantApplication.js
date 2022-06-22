import React,{ useState,useEffect,useContext }from'react';
import './merchantApplication.css';
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AutheContext } from "../../context/auth-context/authContext";

const AddApplication=()=> {
  const {jwt,userId}=useContext(AutheContext)
  let [Merchantid, SetMerchantid] = useState("");
  let [MerchantlegalName, SetMerchantlegalName] = useState("");
  let [MerchantNameOnCardStatement, SetMerchantNameOnCardStatement] = useState("");
  let [OfficialWebsite,SetOfficialWebsite]=useState("");
  let [ContactPersonName,SetContactPersonName] = useState("");
  let [ContactPersonEmailID,SetContactPersonEmailID]=useState("");
  let [ContactPersonMobileNumber,SetContactPersonMobileNumber]=useState("");
  let [BusinessAddress,SetBusinessAddress]=useState("");
  let [Province,SetProvince]=useState("");
  let [District,SetDistrict]=useState("");
  let [PostelCode,SetPostelCode]=useState("");
  let [Email,SetEmail]=useState("");
  let [Tel,SetTel]=useState("");
  let [FaxNo,SetFaxNo]=useState("");
  let [ProductDescription,SetProductDescription]=useState("");
  let [YearsOfIncorporation,SetYearsOfIncorporation]=useState("");
  
  const [isError, setIsError] = useState("");
    
  const AddMerchantApplication = (e) => {
      e.preventDefault();
      var addmerchantapplication = {
        Merchantid,
        MerchantlegalName,
        MerchantNameOnCardStatement,
        OfficialWebsite,
        ContactPersonName,
        ContactPersonEmailID,
        ContactPersonMobileNumber,
        BusinessAddress,
        Province,
        District,
        PostelCode,
        Email,
        Tel,
        FaxNo,
        ProductDescription,
        YearsOfIncorporation
      };
      console.log(addmerchantapplication);
    
      axios
        .post(`http://localhost:8080/createMerchantApplication`, {
          
          merchantlegalname: addmerchantapplication.MerchantlegalName,
          merchantnameoncardstatement: addmerchantapplication.MerchantNameOnCardStatement,
          officialwebsite: addmerchantapplication.OfficialWebsite,
          contactperconname: addmerchantapplication.ContactPersonName,
          contactpersonemailid: addmerchantapplication.ContactPersonEmailID,
          contactpersonmobilenumber: addmerchantapplication.ContactPersonMobileNumber,
          businessaddress: addmerchantapplication.BusinessAddress,
          province: addmerchantapplication.Province,
          district: addmerchantapplication.District,
          postelcode: addmerchantapplication.PostelCode,
          email: addmerchantapplication.Email,
          tel: addmerchantapplication.Tel,
          faxno: addmerchantapplication.FaxNo,
          productdescription: addmerchantapplication.ProductDescription,
          yearsofincorporation: addmerchantapplication.YearsOfIncorporation
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

  }

        const navigate = useNavigate();
        function DelayRedirect(e, path) {
          e.preventDefault();
          setTimeout(() => navigate(path), 600);
        }

        const validation = (a) => {
          const emailVAlidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

          if(!(emailVAlidation.test(Email))){
            setIsError("Email validation failed")
          }
          else if(!(emailVAlidation.test(ContactPersonEmailID))){
            setIsError("Email validation failed")
          }
          else {
             
          }
        }

        // const inputs = [
        //   {
        //     id: 1,
        //     name: "Email",
        //     type: "email",
        //     errorMessage:"It should be a valid email address!",
        //     required: true,
        //   },
        //   {
        //     id: 1,
        //     name: "ContactPersonEmailID",
        //     type: "email",
        //     errorMessage:"It should be a valid email address!",
        //     required: true,
        //   },

        // ];

    return (
      <div className="containerHead_add">
        <div className="container">
          <Form className="form4_add">
            <Form.Group controlId="ControlInput1" name="id1">
              <h2 className="h2">miniBell Merchant Application Form</h2>
              <hr></hr>
              <br/>
            </Form.Group>
            <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>Merchant Legal Name</p></Form.Label>
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
            <Form.Group controlId="ControlInput3" name="id3">
              <Form.Label className="label"><p>Merchant Name on Card Statement</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Merchant Name on Card Statement"
                onChange={(e) => {
                    SetMerchantNameOnCardStatement(e.target.value);
                }}
              />
            </Form.Group>
            <br/>
            <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>Official website</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Official website"
                onChange={(e) => {
                  SetOfficialWebsite(e.target.value);
                }}
              />
              </Form.Group>
              <br/>
              <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>Contact Person Name</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Contact Person Name"
                onChange={(e) => {
                    SetContactPersonName(e.target.value);
                }}
              />
              </Form.Group>
              <br/>
              <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>Contact Person Email Address</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Contact Person Email Address"
                onChange={(e) => { 
                  validation(e);
                  SetContactPersonEmailID(e.target.value);
                  
                }}
              />
              </Form.Group>
              <br/>
              <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>Contact Person Mobile Number</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Contact Person Mobile Number"
                onChange={(e) => {
                  SetContactPersonMobileNumber(e.target.value);
                }}
              />
              </Form.Group>
              <br/>
              <Form.Group controlId="ControlInput1" name="id1">
              <br/>
              <hr></hr>
              <h2 className="h2">Business Details</h2>
              <hr></hr>
              <br/>
            </Form.Group>
              <br/>
              <Form.Group controlId="ControlInput4" name="id2">
              <Form.Label className="label"><p>Business Address</p></Form.Label>
              <Form.Control
                className="text1_add"
                as="textarea"
                placeholder="Business Address"
                style={{ height: "100px" }}
                onChange={(e) => {
                  SetBusinessAddress(e.target.value);
                }}
              />
              </Form.Group>
              <br/>
              <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>Province</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Province"
                onChange={(e) => {
                  SetProvince(e.target.value);
                }}
              />
              </Form.Group>
              <br/>
              <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>District</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="District"
                onChange={(e) => {
                  SetDistrict(e.target.value);
                }}
              />
              </Form.Group>
              <br/>
              <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>Postel Code</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Postel Code"
                onChange={(e) => {
                  SetPostelCode(e.target.value);
                }}
              />
              </Form.Group>
              <br/>
            <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>Years of Incorporation</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Years of Incorporation"
                onChange={(e) => {
                    SetYearsOfIncorporation(e.target.value);
                }}
                />
               <br/>
            </Form.Group>
            <Form.Group>
              <Form.Label className="label"><p>Telephone Number</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Telephone Number"
                onChange={(e) => {
                    SetTel(e.target.value);
                }}
              />
              <br />
              <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>Fax Number</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                placeholder="Fax Number"
                onChange={(e) => {
                    SetFaxNo(e.target.value);
                }}
              />
              </Form.Group>
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
              </Form.Group> 
            
                <br/>
                <Form.Group>
                  <Form.Label className="label"><p>Email Address</p></Form.Label>
                  <Form.Control
                    className="form-controlOne_add"
                    type="email"
                    placeholder="Email Address"
                    errorMessage="It should be a valid email address!"
                    onChange={(e) => {
                      SetEmail(e.target.value);
                      validation(e);
                        
                    }}
              />
              </Form.Group>
              <br/>
            <br />
            <span style={{color: "red", fontSize: "13px" }}>{isError}</span>
            <Link
              to="/profileView"
              onClick={(e) => DelayRedirect(e, "/profileView")}
            >
              <Button
                variant="outline-dark"
                type="set"
                className="button4_add btn btn-light"
                onClick={AddMerchantApplication}
            //     disabled={!this.addmerchant.MerchantlegalName || !this.addmerchant.OfficialWebsite || 
            //     !this.addmerchant.ContactPersonEmailID || !this.addmerchant.ContactPersonMobileNumber ||
            //   !this.addmerchant.BusinessAddress || !this.addmerchant.Profile || !this.addmerchant.ProductDescription ||
            // !this.addmerchant.AverageProductValue || !this.addmerchant.UploadCompanyLogo }
              >
                Set
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    );
}

export default AddApplication;
 