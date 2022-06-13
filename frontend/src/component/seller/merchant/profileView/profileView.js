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
    useEffect(() => {
      axios
        .get("http://localhost:8080/getMerchant")
        .then((response) => {
          SetProfile(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return (
      <div className="head">
        <div className="header_view">
          <h2 className="font_view">Profile</h2>
          <Link to="/addprofile">
            <IconButton className="icon_button" size="large" >
              <AiOutlinePlusCircle className="view_icon" />
            </IconButton>
          </Link>
        </div>
        <div className="wrapper_view">
          {profile.map((merchant) => {
            return (
              <React.Fragment key={merchant.id}>
                <div>
                  <Card className="card_merchant_view">
                    <CardHeader
                      title={merchant.merchantlegalname} 
                      subheader={merchant.officialwebsite}
                    />
                    <div>
                      <CardMedia
                        className="card__media_view"
                        component="img"
                        height="300"
                        image={merchant.companylogourl}
                        alt="Kid Cloths"
                      />
                    </div>
  
                    <CardContent>
                      <Typography>Reach via: {merchant.contactpersonemailid}</Typography>
                    </CardContent>
                    <CardContent>
                      <Typography>Contact Us: {merchant.contactpersonmobilenumber}</Typography>
                    </CardContent>
                    <CardContent>
                      <Typography>{merchant.businessaddress}</Typography>
                    </CardContent>
                    <CardContent>
                      <Typography>: {merchant. profile}</Typography>
                    </CardContent>
                    <CardContent>
                      <Typography>: {merchant.productdescription}</Typography>
                    </CardContent>
                    <CardContent>
                      <Typography>Average Product Value: {merchant.averageproductvalue}</Typography>
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