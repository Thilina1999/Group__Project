import React, { useState, useEffect}from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Product from './product'
import { Button } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./product.css"

const Products=()=>{
    const [products,setProducts]=useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:8080/getProduct")
          .then((response) => {
            setProducts(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    },[]);
      const totalStars = 5;
      const activeStars = 3;

  return (
    <div className="wrapper">
      {products.map((product) => {
        return (
          <div>
            <Card className="card_product">
              <CardHeader
                title={product.producttitle}
                subheader={product.productsubtitle}
              />
              <CardMedia
                className="card__media"
                component="img"
                height="300"
                image={product.imageurl}
                alt="Kid Cloths"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Rs.{product.productprice}.00
                </Typography>
              </CardContent>
              <CardContent>
                <Box>
                  {[...new Array(totalStars)].map((arr, index) => {
                    return index < activeStars ? (
                      <StarIcon />
                    ) : (
                      <StarBorderIcon />
                    );
                  })}
                </Box>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <Collapse timeout="auto" unmountOnExit></Collapse>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Products;