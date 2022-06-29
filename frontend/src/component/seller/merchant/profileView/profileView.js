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
    const { jwt, userId } = useContext(AutheContext)
    const [profile, SetProfile] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:8080/getMerchantByid/${userId}`,
        {
          headers: { Authorization: `Bearer ${jwt}`},
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
           
            {
              profile.length == 0 &&(
             
              <Link
                        to="/addprofile"
                        style={{ textDecoration: "none" }}
                      >
                         <IconButton className="icon_button" size="large" >
              <AiOutlinePlusCircle className="view_icon"/>
              </IconButton>
                      </Link>
            
            )}
             {
              profile.length != 0 &&(
              <IconButton className="icon_button" size="large" >
              {/* <AiFillEdit className="view_icon" /> */}
            </IconButton>
            )}
           
           
        </div>
        <div className=" ">
          
            return (
              <React.Fragment key={profile.id}>
                <div className="cardHead123">
                  <Card className="card_merchant_view">   
                      <CardMedia 
                        className="card__media_view"
                        component="img"
                        height="230px"
                         
                        image={profile.companylogourl}
                        alt=""
                        
                      />
                      <CardHeader 
                      className="header"

                      titleTypographyProps={{
                        color: "black",
                        fontSize: 30,
                         
                        fontFamily:"'Montserrat'",
                      }}

                      title={profile.merchantlegalname} 
                      />
                      <CardContent className="infocard123"
                      titleTypographyProps={{
                        color: "black",
                        fontSize: 30,
                         
                        fontFamily:"'Montserrat'",
                      }} >   
                      <Typography className="input"><br/>{profile.profile}</Typography>
                    </CardContent>
                      <CardContent 
                      titleTypographyProps={{
                        color: "black",
                        fontSize: 30,
                         
                        fontFamily:"'Montserrat'",
                      }}>
                      <Typography><b>{profile.officialwebsite}</b> </Typography>
                    </CardContent >
                    </Card>

                    
                    <Card className="content123" width="100px"
                    titleTypographyProps={{
                      color: "black",
                      fontSize: 30,
                       
                      fontFamily:"'Montserrat'",
                    }}>   
                    
                    
                    <CardContent className="infocard">
                      <Typography className="input"
                      ><b>{profile.contactpersonemailid}</b></Typography>
                    </CardContent>
                    <CardContent className="infocard">
                      <Typography className="input"><b>{profile.contactpersonmobilenumber}</b></Typography>
                    </CardContent>
                    <CardContent className="infocard">
                      <Typography className="input"><b>{profile.businessaddress}</b></Typography>
                    </CardContent>
                    
                    <CardContent className="infocard">
                      <Typography className="input"><b></b>{profile.productdescription}</Typography>
                    </CardContent>
                    <CardContent className="infocard">
                      <Typography className="input"><b>Average Product Value:</b>   LKR {profile.averageproductvalue} </Typography>
                    </CardContent>

                    <br/>
                    <br/>
                    <CardActions disableSpacing>
                      <Link
                        to={`/editprofile/${profile.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button className="button123"> Edit Profile 
                        <IconButton 
                        className="icon_button_second" 
                        size="large" >
                          <AiFillEdit className="view_icon" />
                        </IconButton>
                        </Button>
                      </Link>
                      <Link
                        to="/home"
                        style={{ textDecoration: "none" }}
                      >
                        
                        <Button className="button123"> 
                        Home 
                        <IconButton 
                        className="icon_button_second" 
                        size="large" >
                          
                        </IconButton>
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </div>
              </React.Fragment>
            );
         
        </div>
      </div>
    );
  };
  
  export default Profileview;