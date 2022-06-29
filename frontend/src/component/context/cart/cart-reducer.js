import  React,{  useContext } from "react";
import axios from "axios";

const jwt=localStorage.getItem("auth-token") 
 const userId = localStorage.getItem("id");

export const sumItem = (cartItem) => {
  return {
    itemCount: cartItem.reduce((total, product) => total + product.quantity, 0),

    total: cartItem.reduce(
      (total, product) => total + product.quantity * product.productprice,
      0
    ),
  };
};
const createCart = (payload) => {
 
  // console.log(payload);
  axios
    .post(
      `http://localhost:8080/createCart`,
      {
        productid: payload.productid,
        imageurl: payload.imageurl,
        productprice: payload.productprice,
        producttitle: payload.producttitle,
        productsubtitle: payload.productsubtitle,
        quantity: 1,
        userid: Number(userId),
      },
      {
        headers: { Authorization: `Bearer ${jwt}` },
      }
    )
    .catch((error) => {
      console.log(error);
    });
    window.location.reload(true);
};
const updateCart = (product) => {
  console.log("ghhh",product);
  axios
    .put(
      `http://localhost:8080/updateCart/${product.id}`,
      {
        productid: product.productid,
        imageurl: product.imageurl,
        productprice: product.productprice,
        producttitle: product.producttitle,
        productsubtitle: product.productsubtitle,
        quantity: Number(product.quantity),
        userid: Number(userId),
      },
      {
        headers: { Authorization: `Bearer ${jwt}` },
      }
    )
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};
const deleteCart = (id) => {
  axios
    .delete(`http://localhost:8080/deleteCart/${id}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteByUserId=()=>{
  
}

const cartReducer = (state, action) => {
  
  switch (action.type) {
    case "INITIALIZE":
      return {
        ...action.payload,
        ...sumItem(action.payload.cartItem),
      };
    case "ADD_ITEM":
      //check item in the cart list
      if (
        !state.cartItem.find(
          (item) => item.productid === action.payload.productid
        )
      ) {
        state.cartItem.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        cartItem: [...state.cartItem],
        ...sumItem(state.cartItem),
        ...createCart(action.payload),
      };
    case "INCREASE":
      const increaseIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      const q = state.cartItem[increaseIndex];
      if (q.quantity >= 1) {
        q.quantity++;
      }
      //  console.log(q);

      return {
        ...state,
        cartItem: [...state.cartItem],
        ...sumItem(state.cartItem),
        ...updateCart(q),
      };
    case "DECREASE":
      const decreaseIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      const product = state.cartItem[decreaseIndex];
      if (product.quantity > 1) {
        product.quantity--;
      }
      return {
        ...state,
        cartItem: [...state.cartItem],
        ...sumItem(state.cartItem),
        ...updateCart(product),
      };
    case "REMOVE_PRODUCT":
      const newCartItem = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(action.payload.id);
      return {
        ...state,
        cartItem: [...newCartItem],
        ...sumItem(newCartItem),
        ...deleteCart(action.payload.id),
      };
    case "CLEAR":
      return {
        cartItem: [],
        itemCount: 0,
        total: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
