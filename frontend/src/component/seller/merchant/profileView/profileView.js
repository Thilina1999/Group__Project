import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { AiOutlinePlusCircle, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../profileView/profileView.css";
import { AutheContext } from "../../../context/auth-context/authContext";
import { FormLabel } from "react-bootstrap";
import { Box, Button } from "@material-ui/core";


const Profileview = () => {
    const { jwt, userId } = useContext(AutheContext);
    const [profile, SetProfile] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:8080/getMerchantByid/${userId}`,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
        )
        .then((response) => {
          SetProfile(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  console.log("profile:",profile.length)
    return (
      <div className="head1">
        <div className="header_view">
          <h2 className="font_view">Profile</h2>
          {/* <Link>
            {
              profile.length == 0 &&(
              <IconButton className="icon_button" size="large" >
              <AiOutlinePlusCircle className="view_icon" />
            </IconButton>
            )}
             {
              profile.length != 0 &&(
              <IconButton className="icon_button" size="large" >
              <AiFillEdit className="view_icon" />
            </IconButton>
            )}
           
          </Link> */}
        </div>
        <div className=" ">
          {profile.map((merchant) => {
            return (
              <React.Fragment key={merchant.id}>
                <div className="cardHead">
                  <Card className="card_merchant_view">   
                      <CardMedia 
                        className="card__media_view"
                        component="img"
                        height="230px"
                         
                        image={merchant.companylogourl}
                        alt=""
                        
                      />
                      <CardHeader 
                      className="header"

                      titleTypographyProps={{
                        color: "black",
                        fontSize: 30,
                         
                        fontFamily:
                        "'Roboto', sans-serif",
                      }}

                      title={merchant.merchantlegalname} 
                      />
                      <CardContent className="infocard">   
                      <Typography className="input"><br/>{merchant. profile}</Typography>
                    </CardContent>
                      <CardContent className="">
                      <Typography><b>{merchant.officialwebsite}</b> </Typography>
                    </CardContent >
                    </Card>

                    
                    <Card className="content" width="100px">   
                    
                    
                    <CardContent className="infocard">
                      <Typography className="input"><b>{merchant.contactpersonemailid}</b></Typography>
                    </CardContent>
                    <CardContent className="infocard">
                      <Typography className="input"><b>{merchant.contactpersonmobilenumber}</b></Typography>
                    </CardContent>
                    <CardContent className="infocard">
                      <Typography className="input"><b>{merchant.businessaddress}</b></Typography>
                    </CardContent>
                    
                    <CardContent className="infocard">
                      <Typography className="input"><b></b>{merchant.productdescription}</Typography>
                    </CardContent>
                    <CardContent className="infocard">
                      <Typography className="input"><b>Average Product Value:   LKR {merchant.averageproductvalue}</b> </Typography>
                    </CardContent>

                    <br/>
                    <br/>
                    <CardActions disableSpacing>
                      <Link
                        to={`/editprofile/${merchant.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button className="button"> Edit Profile 
                        <IconButton 
                        className="icon_button_second" 
                        size="large" >
                          <AiFillEdit className="view_icon" />
                        </IconButton>
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default Profileview;