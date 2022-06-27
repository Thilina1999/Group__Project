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
import Rating from '@mui/material/Rating';
import Box from "@mui/material/Box";

import "./product.css";
import { Link, useParams } from "react-router-dom";
import { WishListContext } from "../../context/wish-list/wishlist-context";
import { AutheContext } from "../../context/auth-context/authContext";
import { IsInList } from "../wish-list/helperList"

import Navbar1 from "../../navbarNew/navbarNew"
import Announcement from '../../Announcement/announcement';
import Footer1 from '../../footerNew/footerNew'

const Products = () => {
  const { addProductList, listItems, removeProductList } =
    useContext(WishListContext);
  const { jwt } = useContext(AutheContext);

  const [products, setProducts] = useState([]);
  const [average, setAverage] = useState();
  const params = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8080/getProducts", {
        headers: { Authorization: `Bearer ${jwt}` }
      })
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getRate()
  }, []);

  const getRate = async (id) => {
    await axios.get(`http://localhost:8080/api/getAverageRating/${id}`)
      .then((res) => {
        setAverage(res.data.averageRating)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>

      <Announcement />
      <Navbar1 />
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
                            fontFamily:
                              "source-code-pro, Menlo, Monaco, Consolas, 'Courier New'",
                            color: "rgb(252, 0, 0)",
                            fontSize: 20,
                          }}
                        >
                          Rs.{product.productprice}.00
                        </Typography>

                        <Box>
                          <Rating name="read-only" value={product.averagerate} readOnly size="large" />
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
                      <IconButton onClick={() => removeProductList(productList)}>
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
      <br />

      <Footer1 />
    </>
  );
};
export default Products;