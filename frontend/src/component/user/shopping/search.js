import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./product.css";
import { Link } from "react-router-dom";
import { WishListContext } from "../../context/wish-list/wishlist-context";
import { AutheContext } from "../../context/auth-context/authContext";
import { IsInList } from "../wish-list/helperList";
import Navbar1 from "../../navbarNew/navbarNew";
import Announcement from "../../Announcement/announcement";
import Footer1 from "../../footerNew/footerNew";


const SearchData = () => {
  
  const { addProductList, listItems, removeProductList } =
    useContext(WishListContext);
  const { jwt } = useContext(AutheContext);
  const {name}=useParams();
  // const name = localStorage.getItem("search-name");
  console.log("name",name)
  
 
 const [products, setNameproduct] = useState([]);
  const getProd= () => {
    axios
      .post(
        `http://localhost:8080/searchItem`,
        {
          userSearchCat: name,
        },
        { headers: { Authorization: `Bearer ${jwt}` } },
        { withCredentials: true }
      )
      .then((response) => {
        setNameproduct(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }
 
  
   
 useEffect(() => {
   getProd();
 }, [])
  
  const totalStars = 5;
  const activeStars = 3;

  return (
    <>
      <Announcement />
      <Navbar1 />
      <br />
      <br />
      <br />
      <br />

      <div className="wrapper">
        {products.map((product) => {
          const {
            producttitle,
            productsubtitle,
            imageurl,
            productprice,
            quantity,
            id,
          } = product;
          const productList = {
            producttitle,
            productsubtitle,
            imageurl,
            productprice,
            quantity,
            productid: id,
          };
          const array = GetId(productList, listItems);
          console.log(product);

          return (
            <React.Fragment key={product.id}>
              <div className="">
                <Card className="card_product">
                  <Link
                    to={`/productDetail/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="pointer">
                      <CardHeader
                        titleTypographyProps={{
                          color: "#000",
                          fontSize: 27,
                          fontFamily: "Montserrat;",
                          fontWeight: "bold",
                        }}
                        subheaderTypographyProps={{
                          color: "#000",
                          fontSize: 15,
                          fontFamily: "Montserrat;",
                        }}
                        title={product.producttitle}
                        subheader={product.productsubtitle}
                      />

                      <CardMedia
                        className="card__media"
                        component="img"
                        height="350"
                        // as an example I am modifying width and height

                        image={product.imageurl}
                        alt="Kid Cloths"
                      />

                      <CardContent>
                        <Typography
                          style={{
                            fontFamily: "Montserrat;",
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
                    </div>
                  </Link>
                  <CardActions disableSpacing>
                    {!IsInList(productList, listItems) && (
                      <IconButton onClick={() => addProductList(productList)}>
                        <FavoriteIcon className="fav_icon" />
                      </IconButton>
                    )}
                    {IsInList(productList, listItems) && (
                      <IconButton onClick={() => removeProductList(array)}>
                        <FavoriteIcon
                          className="fav_icon"
                          style={{ color: "red" }}
                        />
                      </IconButton>
                    )}
                  </CardActions>
                </Card>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <Footer1 />
    </>
  );
};

export default SearchData;
