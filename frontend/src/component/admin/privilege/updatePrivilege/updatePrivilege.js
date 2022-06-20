import React,{ useState,useEffect }from'react';
import './updatePrivilege.css';
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../Updateprivilege/Updateprivilege.css";

const Updateprivilege=()=> {
  const params = useParams();
  let [Privilegeid, SetPrivilegeid] = useState("");
  let [PrivilegeName, SetPrivilegeName] = useState("");
  let [PrivilegeDescription, SetPrivilegeDescription] = useState("");
  let [Privilegelist, SetPrivilegelist] =  useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/getPrivilege")
      .then((response) => {
        SetPrivilegelist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getPrivilegeByid/${params.id}`)
      .then((response) => {
        SetPrivilegelist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const Updateprivilege = (e) => {
      e.preventDefault();
      var addprivilege = {
        Privilegeid,
        PrivilegeName,
        PrivilegeDescription,
      };
      console.log(addprivilege);
    
      axios
        .post(`http://localhost:8080/createPrivilege`, {
          
          privilegename: addprivilege.PrivilegeName,
          privilegedescription: addprivilege.PrivilegeDescription,
           
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert("Privilege added");
          } else {
            alert("Privilege Add Failed");
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

    return (
      <div className="container44_add">
        <div className="container">
          <Form className="form4_add">
            <Form.Group controlId="ControlInput1" name="id1">
              <h2 className="h2">Add Privilege</h2>
              <hr></hr>
              <br/>
            </Form.Group>
            <Form.Group controlId="ControlInput2" name="id2">
              <Form.Label className="label"><p>Privilege Name</p></Form.Label>
              <Form.Control
                className="form-control11_add"
                type="text"
                placeholder="Merchant Name"
                onChange={(e) => {
                  SetPrivilegeName(e.target.value);
                }}
              />
            <br/>
            </Form.Group>
            <Form.Group controlId="ControlInput4" name="id3">
              <Form.Label className="label"><p>Privilege Description</p></Form.Label>
              <Form.Control
                className="text1_add"
                as="textarea"
                placeholder="Product Description"
                style={{ height: "200px" }}
                onChange={(e) => {
                  SetPrivilegeDescription(e.target.value);
                }}
              />
               
            </Form.Group>
            <br />
            <br />
            <Link 
            // to="/productview"
            onClick={(e) => DelayRedirect(e, "/profileView")}
            >
              <Button
                variant="outline-dark"
                className="button33_add btn btn-light"
              >
                Cancel
              </Button>
            </Link>
            <Link
            //   to="/profileView"
              onClick={(e) => DelayRedirect(e, "/profileView")}
            >
              <Button
                variant="outline-dark"
                type="set"
                className="button44_add btn btn-light"
                onClick={Updateprivilege}
              >
                Update
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    );
}

export default Updateprivilege;
 