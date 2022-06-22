import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Button } from "react-bootstrap";

import "./product.css";
import { IsInCart } from "../shoppingcart/carthelper";
import { CartContext } from "../../context/cart/cart-context";
import { AutheContext } from "../../context/auth-context/authContext";

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import {CardActionArea, CardActions } from '@mui/material';

import { GrSend } from "react-icons/gr";

const Products = () => {
  const { jwt, userId } = useContext(AutheContext);

  const { addProduct, cartItem, inCrease } = useContext(CartContext);

  const params = useParams();
  const [average, setAverage] = useState([]);
  const [product, setProduct] = useState([]);

  const [value, setValue] = useState()
  const [comment, setComment] = useState("")
  const [allComments, setAllComments] = useState([])


  const { producttitle,
    productsubtitle,
    imageurl,
    productprice,
    quantity,
    id, } = product;

  const productCart = {
    producttitle,
    productsubtitle,
    imageurl,
    productprice,
    quantity,
    id,
  };

  useEffect(() => {
    (
      async () => {
        await axios
          .get(`http://localhost:8080/getProductByid/${params.id}`)
          .then((res) => {
            setProduct(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    )();

    (
      async () => {
        await axios.get(`http://localhost:8080/api/getAverageRating/${params.id}`)
          .then((res) => {
            //setAverage[]
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    )();

    (
      async () => {
        await axios.get(`http://localhost:8080/api/getAllReviewsByItem/${params.id}`)
          .then((res) => {
            console.log(res.data.data)
            setAllComments(res.data.data)
          })
          .then((err) => {
            console.log(err.response.data)
          })
      }
    )();

  }, [jwt, params.id]);

  const AddReview = async (e) => {
    console.log(params.id, value, comment)
    await axios.post(`http://localhost:8080/api/createReview`, {
      prodId: Number(params.id),
      rating: Number(value),
      comment: comment
    }, { headers: { Authorization: `Bearer ${jwt}` } })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }

  const totalStars = 5;
  const activeStars = 3;
  const itemInCart = IsInCart(productCart, cartItem);
  return (
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src={product.imageurl} className="product-detail-image" />
        </div>
        <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Box
          sx={{
            '& > legend': { mt: 2 },
          }}
        >
          <Typography component="legend">Rating</Typography>
          <br />
          <Rating
            name="simple-controlled"
            value={value}
            size="large"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />


        </Box>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <>
            <TextField id="standard-basic" label="Comments" variant="standard" style={{ width: '100%' }}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </>
          <div style={{ width: '80%', marginLeft: '50%' }}>
            <Button
              type="button"
              className="add-to-cart"
              style={{ width: '30%' }}
              onClick={AddReview}
            >
              <GrSend style={{ fontSize: '22px' }} />
              &nbsp;&nbsp;&nbsp;
              Send
            </Button>
          </div>
        </Box>
        <br /> <br />
        <div>
          {allComments.map((allComment) => {
            return (
              <div>

<Card sx={{ maxWidth: 345 }}>
      <CardActionArea  >
        <CardContent style={{ width: "100%" }}>
        <Avatar src="/broken-image.jpg" />
          <Typography gutterBottom variant="h6" component="div">
            {allComment.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>

              </div>
            )
          })}
        </div>
      </div>


      <div className="product-detail-desc">
        <h1>{product.producttitle}</h1>
        <h4>{product.productsubtitle}</h4>
        <div className="reviews">

          <div>

            <Rating name="read-only" value={value} readOnly size="large" />

          </div>

        </div>
        <h4>Details: </h4>
        <p>{product.description}</p>
        <p className="price">Rs.{product.productprice}.00</p>

        <div className="buttons">
          {!itemInCart && (
            <Button
              type="button"
              className="add-to-cart"
              onClick={() => addProduct(productCart)}
            >
              Add to Cart
            </Button>
          )}
          {itemInCart && (
            <Button
              type="button"
              className="add-to-cart"
              onClick={() => inCrease(productCart)}
            >
              Already in Cart
            </Button>
          )}
        </div>

      </div>

    </div>

  );
};

export default Products;
