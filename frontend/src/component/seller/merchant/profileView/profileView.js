import React, { useState, useEffect } from "react";
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

const Profileview = () => {
    const [profile, SetProfile] = useState([]);
    const q=5 ;
    useEffect(() => {
      axios
        .get(`http://localhost:8080/getMerchantByid/${""}`)
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
          <Link to="/addprofile">
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
           
          </Link>
        </div>
        <div className="wrapper_view">
          {profile.map((merchant) => {
            return (
              <React.Fragment key={merchant.id}>
                <div>
                  <Card className="card_merchant_view">
                    <CardHeader className="header"
                      title={merchant.merchantlegalname} 
                    />
                    <div>
                      <CardMedia
                        className="card__media_view"
                        component="img"
                        height="300"
                        image={merchant.companylogourl}
                        alt=""
                      />
                    </div>
                    
                    <CardContent className="infocard">
                      <Typography>: {merchant. profile}</Typography>
                    </CardContent>
                    <CardContent className="infocard">
                      <Typography>Reach via:<b>{merchant.officialwebsite}</b> </Typography>
                    </CardContent >
                    <CardContent className="infocard">
                      <Typography><b> {merchant.contactpersonemailid}</b></Typography>
                    </CardContent>
                    <CardContent className="infocard">
                      <Typography><b>{merchant.contactpersonmobilenumber}</b></Typography>
                    </CardContent>
                    <CardContent className="infocard">
                      <Typography><b>{merchant.businessaddress}</b></Typography>
                    </CardContent>
                    <CardContent className="infocard">
                      <Typography><b> Product Description:</b> {merchant.productdescription}</Typography>
                    </CardContent>
                    <CardContent className="infocard">
                      <Typography>Average Product Value: <b>{merchant.averageproductvalue}</b> </Typography>
                    </CardContent>

                    <CardActions disableSpacing>
                      <Link
                        to={`/editprofile/${merchant.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <IconButton className="icon_button_second" size="large">
                          <AiFillEdit className="view_icon" />
                        </IconButton>
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