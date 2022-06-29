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
  const [redirect, setRedirect] = useState(false);
  const token = localStorage.getItem("auth-token");
  
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
 

  const formErrors = validateForm()
  if(Object.keys(formErrors).length > 0){
    setErrors(formErrors)
  }else{
    console.log('form submitted')
  }
  console.log(form)
    
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
          yearsofincorporation: Number(addmerchantapplication.YearsOfIncorporation)
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
        )
        .then((response) => {
          console.log(response);
          if (response.data.status === 201) {
            alert("Information added");
          } else {
            alert("Information Add Failed");
          }
          // const token = localStorage.getItem("auth-token");
          axios.post('http://localhost:8080/api/logout', { headers: { Authorization: `Bearer ${token}` } }, { withCredentials: true });
        
         localStorage.removeItem("auth-token");
         localStorage.removeItem("name");
         localStorage.removeItem("id");
         localStorage.removeItem("role");
        })
        .catch((error) => {
          console.log(error);
          setRedirect(false);
        });

  }

        const navigate = useNavigate();
        function DelayRedirect(e, path) {
          e.preventDefault();
          setTimeout(() => navigate(path), 600);
        }


        // state = {
        //   disabled: true
        // }

        // validation = (a) => {
        //   const emailVAlidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //   if(!(emailVAlidation.test(Email))){
        //     this.setState({
        //         disabled: true
                
        //     });
        //   }else{
        //     this.setState({
        //       disabled: false
        //     });
        //   }
            
          // }
          // else if(!(emailVAlidation.test(ContactPersonEmailID))){
          //   setIsError("Email validation failed")
          // }
          // const logOut = async () => {
          //   try {
              
          //      await axios.post('http://localhost:8080/api/logout', { headers: { Authorization: `Bearer ${token}` } }, { withCredentials: true });
             
          //     localStorage.removeItem("auth-token");
          //     localStorage.removeItem("name");
          //     localStorage.removeItem("id");
          //     localStorage.removeItem("role");
          //   } catch (err) {
          //     console.log(err);
          //     setRedirect(false);
          //   }
          // };  
  const [form, setForm] =  useState ({})
  const [errors, setErrors] = useState({})
  
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    if(!!errors[field])
    setErrors({
      ...errors,
      [field]: null
    })
  }

const validateForm = () => {
  const {MerchantlegalName, MerchantNameOnCardStatement, ContactPersonEmailID, ContactPersonMobileNumber, BusinessAddress, Email, Tel, FaxNo, ProductDescription } = form
  const newErrors = {}

  if(!MerchantlegalName || MerchantlegalName === '') newErrors.MerchantlegalName = 'Please enter your legal name'
  if(!MerchantNameOnCardStatement || MerchantNameOnCardStatement === '') newErrors.MerchantNameOnCardStatement = 'Please enter your name on card statement'
  if(!BusinessAddress || BusinessAddress === '') newErrors.BusinessAddress = 'Please enter your business address'
  // if (ContactPersonMobileNumber.length < 10) newErrors.ContactPersonMobileNumber = 'Invalid contact number! please enter a valid contact number'
  // if (Tel.length < 10) newErrors.Tel = 'Invalid telephone number! please enter a valid telephone number'
  // if (FaxNo.length < 10) newErrors.FaxNo = 'Invalid fax number! please enter a valid fax number'
  if(!ProductDescription || ProductDescription === '') newErrors.ProductDescription = 'Please enter a product description'
  else if (ProductDescription.length < 10) newErrors.ProductDescription = 'Product description is too short, It has to be more than 20 characters'
  

  return newErrors
}

 
 
    return (
      <div className="containerHead_add">
        <div className="container">
          <Form className="form4_add">
            <Form.Group controlId="ControlInput1" name="id1">
              <h2 className="h2">miniBell Merchant Application Form</h2>
              <hr></hr>
              <br/>
              <p className='mandatory'>*All the fields are mandatory to fill</p>
            </Form.Group>
            <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>Merchant Legal Name</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"
                required={true}
                onError=""
                placeholder="Merchant Name"
                value = {form.MerchantlegalName}
                onChange={(e) => {
                  setField('MerchantlegalName', e.target.value)
                  SetMerchantlegalName(e.target.value);
                }}
                isInvalid={!!errors.MerchantlegalName}
              ></Form.Control>
              <Form.Control.Feedback type='Invaid'>
                {errors.MerchantlegalName}
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group controlId="ControlInput3" name="id3">
              <Form.Label className="label"><p>Merchant Name on Card Statement</p></Form.Label>
              <Form.Control
                className="form-controlOne_add"
                type="text"

                placeholder="Merchant Name on Card Statement"
                value = {form.MerchantNameOnCardStatement}
                onChange={(e) => {
                  setField('MerchantNameOnCardStatement', e.target.value)
                  SetMerchantNameOnCardStatement(e.target.value);
                }}
                isInvalid={!!errors.MerchantNameOnCardStatement}
              ></Form.Control>
              <Form.Control.Feedback type='Invaid'>
                {errors.MerchantNameOnCardStatement}
              </Form.Control.Feedback>  
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
                value = {form.ContactPersonEmailID}
                onChange={(e) => {
                  setField('ContactPersonEmailID', e.target.value)
                  SetContactPersonEmailID(e.target.value);
                }}
                isInvalid={!!errors.ContactPersonEmailID}
              ></Form.Control>
              <Form.Control.Feedback type='Invaid'>
                {errors.ContactPersonEmailID}
              </Form.Control.Feedback>  
              </Form.Group>
              <br/>
              <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>Contact Person Mobile Number</p></Form.Label>
              <Form.Control
                className="form-controlOne_add" 
                type="text"
                placeholder="Contact Person Mobile Number"
                value = {form.ContactPersonMobileNumber}
                onChange={(e) => {
                  setField('ContactPersonMobileNumber', e.target.value)
                  SetContactPersonMobileNumber(e.target.value);
                }}
                isInvalid={!!errors.ContactPersonMobileNumber}
              ></Form.Control>
              <Form.Control.Feedback type='Invaid'>
                {errors.ContactPersonEmailID}
              </Form.Control.Feedback>  
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
                value = {form.BusinessAddress}
                onChange={(e) => {
                  setField('BusinessAddress', e.target.value)
                  SetBusinessAddress(e.target.value);
                }}
                isInvalid={!!errors.BusinessAddress}
              ></Form.Control>
              <Form.Control.Feedback type='Invaid'>
                {errors.BusinessAddress}
              </Form.Control.Feedback>  
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
                type="number"
                placeholder="Years of Incorporation"
                onChange={(e) => {
                    SetYearsOfIncorporation(e.target.valueAsNumber);
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
                value = {form.Tel}
                onChange={(e) => {
                  setField('Tel', e.target.value)
                  SetTel(e.target.value);
                }}
                isInvalid={!!errors.Tel}
              ></Form.Control>
              <Form.Control.Feedback type='Invaid'>
                {errors.Tel}
              </Form.Control.Feedback>  
              </Form.Group>
              <br />
              <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>Fax Number</p></Form.Label>
              <Form.Control
                className="form-controlOne_add" 
                type="text"
                placeholder="Fax Number"
                value = {form.FaxNo}
                onChange={(e) => {
                  setField('FaxNo', e.target.value)
                  SetFaxNo(e.target.value);
                }}
                isInvalid={!!errors.FaxNo}
              ></Form.Control>
              <Form.Control.Feedback type='Invaid'>
                {errors.FaxNo}
              </Form.Control.Feedback>  
              </Form.Group>
              <br/>
                <Form.Group>
                  <Form.Label className="label"><p>Business Email Address</p></Form.Label>
                  <Form.Control
                    className="form-controlOne_add"
                    type="email"
                    placeholder="Email Address"
                    value = {form.Email}
                   onChange={(e) => {
                  setField('Email', e.target.value)
                  SetEmail(e.target.value);
                }}
                isInvalid={!!errors.Email}
              ></Form.Control>
              <Form.Control.Feedback type='Invaid'>
                {errors.Email}
              </Form.Control.Feedback>  
              </Form.Group>
              <br/>
            <Form.Group controlId="ControlInput4" name="id3">
              <Form.Label className="label"><p>Product Description</p></Form.Label>
              <Form.Control
                className="text1_add"
                as="textarea"
                placeholder="Product Description"
                style={{ height: "200px" }}
                value = {form.ProductDescription}
                   onChange={(e) => {
                  setField('ProductDescription', e.target.value)
                  SetProductDescription(e.target.value);
                }}
                isInvalid={!!errors.ProductDescription}
              ></Form.Control>
              <Form.Control.Feedback type='Invaid'>
                {errors.ProductDescription}
              </Form.Control.Feedback>  
              </Form.Group>
            <br />
            {/* <span style={{color: "red", fontSize: "13px" }}>{isError}</span> */}
            <Link
              to={"/signin"}    
              onClick={(e) => DelayRedirect(e, "/signin")}     
            >

              <Button
                variant="outline-dark"
                type="set"
                className="button4_add btn btn-light"
                
                onClick={AddMerchantApplication}
                // onClick={AddMerchantApplication}
                disabled={!MerchantlegalName || !OfficialWebsite || 
                !ContactPersonEmailID || !ContactPersonMobileNumber ||
              !BusinessAddress || !ProductDescription || isError}
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
 