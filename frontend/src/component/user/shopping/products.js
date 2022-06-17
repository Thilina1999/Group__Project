import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./product.css";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/cart/cart-context";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/getProducts")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const totalStars = 5;
  const activeStars = 3;

  return (
    <div className="wrapper">
      {products.map((product) => { 
        return (
          <React.Fragment key={product.id}>
            <div>
              <Link
                to={`/productDetail/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card className="card_product">
                  <CardHeader
                    titleTypographyProps={{
                      color: "rgb(252, 0, 0)",
                      fontSize: 27,
                      fontFamily:
                        "source-code-pro, Menlo, Monaco, Consolas, 'Courier New'",
                    }}
                    subheaderTypographyProps={{
                      color: "#000",
                      fontSize: 15,
                      fontFamily:
                        "source-code-pro, Menlo, Monaco, Consolas, 'Courier New'",
                    }}
                    title={product.producttitle}
                    subheader={product.productsubtitle}
                  />
                  <div>
                    <CardMedia
                      className="card__media"
                      component="img"
                      height="300"
                      image={product.imageurl}
                      alt="Kid Cloths"
                    />
                  </div>

                  <CardContent>
                    <Typography
                      style={{
                        fontFamily:
                          "source-code-pro, Menlo, Monaco, Consolas, 'Courier New'",
                        color: "rgb(252, 0, 0)",
                        fontSize: 20,
                      }}
                    >
                      Rs.{product.productprice}.00
                    </Typography>

                    <Box>
                      {[...new Array(totalStars)].map((arr, index) => {
                        return index < activeStars ? (
                          <StarIcon className="start_icon" />
                        ) : (
                          <StarBorderIcon className="start_icon" />
                        );
                      })}
                    </Box>
                  </CardContent>

                  <CardActions disableSpacing>
                    <IconButton>
                      <FavoriteIcon className="share_icon" />
                    </IconButton>
                  </CardActions>
                </Card>
              </Link>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Products;
