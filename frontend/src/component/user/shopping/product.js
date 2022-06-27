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
import { CardActionArea, CardActions } from '@mui/material';
import { MdDeleteOutline } from "react-icons/md";

import Navbar1 from "../../navbarNew/navbarNew";
import Announcement from "../../Announcement/announcement";
import Footer1 from "../../footerNew/footerNew";

import { GrSend } from "react-icons/gr";
import Notification from "../../notification/notification"

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";


const Products = () => {
  const { jwt } = useContext(AutheContext);
  const { addProduct, cartItem, inCrease } = useContext(CartContext);
  const params = useParams();

  const [average, setAverage] = useState();

  const [product, setProduct] = useState([]);
  const [value, setValue] = useState()
  const [comment, setComment] = useState("")
  const [allComments, setAllComments] = useState([])

  const [notify, setNotify] = useState({ Open: false, message: '', type: '' })

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

    getRate()
    getProduct()
    getAllCommnets()
    

  }, []);

  const getProduct = async () => {
    await axios
      .get(`http://localhost:8080/getProductByid/${params.id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getRate = async () => {
    await axios.get(`http://localhost:8080/api/getAverageRating/${params.id}`)
      .then((res) => {
        setAverage(res.data.averageRating)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getAllCommnets = async () => {
    await axios.get(`http://localhost:8080/api/getAllReviewsByItem/${params.id}`)
      .then((res) => {
        setAllComments(res.data.data)
        getRate()
        console.log(res.data.data)
      })
      .then((err) => {
        alert(err.response.data)
      })
  }

  const AddReview = async (e) => {
    await axios.post(`http://localhost:8080/api/createReview`, {
      prodId: Number(params.id),
      rating: Number(value),
      comment: comment
    }, { headers: { Authorization: `Bearer ${jwt}` } })
      .then((res) => {
        getRate()
        setNotify({
          Open: true,
          message: res.statusText,
          type: "success"
        })
      })
      .catch((err) => {
        setNotify({
          Open: true,
          message: err.response.data.message,
          type: "error"
        })
      })
    getAllCommnets()
    getRate()
    window.location.reload()
  }

  const deleteReview = async () => {
    await axios.delete(`http://localhost:8080/api/deleteReviewByItem/${params.id}`,
      {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((res) => {
        setNotify({
          Open: true,
          message: res.data.message,
          type: "success"
        })
      })
      .catch((err) => {
        setNotify({
          Open: true,
          message: err.response.data.message,
          type: "error"
        })
      })
    getAllCommnets()
  }

  const itemInCart = IsInCart(productCart, cartItem);

  const totalStars = 5;
  const activeStars = product.averagerate

  return (
    <>
      <Announcement />
      <Navbar1 />
      <br />
      <br />
      <br />
      <br />
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={product.imageurl} className="product-detail-image" />
          </div>

          <br />
          <br /> <br /> <br /> <br /> <br /> <br />

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
              required
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
                disabled={!value || !comment}
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

              let del
              if (allComment.userId == localStorage.getItem("id")) {

                del = (
                  <>
                    <CardActions>
                      <p> &nbsp;&nbsp;&nbsp; &nbsp; </p><p> &nbsp;&nbsp;&nbsp; &nbsp; </p><p> &nbsp;&nbsp;&nbsp; &nbsp; </p>
                      <p> &nbsp;&nbsp;&nbsp; &nbsp; </p><p> &nbsp;&nbsp;&nbsp; &nbsp; </p><p> &nbsp;&nbsp;&nbsp; &nbsp; </p>
                      <p> &nbsp;&nbsp;&nbsp; &nbsp; </p><p> &nbsp;&nbsp;&nbsp; &nbsp; </p><p> &nbsp;&nbsp;&nbsp; &nbsp; </p>
                      <p> &nbsp;&nbsp;&nbsp; &nbsp; </p><p> &nbsp;&nbsp;&nbsp; &nbsp; </p><p> &nbsp;&nbsp;&nbsp; &nbsp; </p>
                      <Button size="small" style={{ backgroundColor: '#dc3545', width: '30%' }} onClick={deleteReview}>
                        <MdDeleteOutline style={{ fontSize: '20px' }} />
                        &nbsp;
                        Delete
                      </Button>
                    </CardActions>
                  </>
                );

              } else {
                del = (
                  <>
                  </>
                );
              }
              return (
                <div>
                  <Card sx={{ maxWidth: 3450 }}>
                    <CardActionArea >
                      <CardContent style={{ width: "100%" }}>
                        <Avatar src="/broken-image.jpg" />

                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                          
                          {[...new Array(totalStars)].map((arr, index) => {
                            return index < allComment.rating ? (
                              <StarIcon className="start_icon" style={{ fontSize: "30px" }} />
                            ) : (
                              <StarBorderIcon className="start_icon" style={{ fontSize: "30px" }} />
                            );
                          })}

                        <Typography gutterBottom variant="h6" component="div" style={{ textAlign: 'left' }}>
                          {allComment.name}
                          
                        </Typography>

                        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
                          {allComment.comment}
                        </Typography>

                      </CardContent>
                    </CardActionArea>

                    {del}

                  </Card>
                  <br />

                </div>

              )
            })}
          </div>

        </div>

        <div className="product-detail-desc">
          <h1 className="h-product">{product.producttitle}</h1>
          <h4
            style={{
              textAlign: "left",
            }}
          >
            {product.productsubtitle}
          </h4>
          <div className="reviews">
            <div
              style={{
                textAlign: "left",
              }}
            >
              {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStars ? (
                  <StarIcon className="start_icon" style={{ fontSize: "30px" }} />
                ) : (
                  <StarBorderIcon className="start_icon" style={{ fontSize: "30px" }} />
                );
              })}
            </div>
          </div>
          <Notification notify={notify} setNotify={setNotify} />
          <h4>Details: </h4>
          <p className="p-product">{product.description}</p>
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
                disabled={true}
              >
                Already in Cart
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Products;