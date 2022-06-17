import React, { createContext, useReducer, useState, useEffect } from "react";
import cartReducer, { sumItem } from "./cart-reducer";
import axios from "axios";

export const CartContext = createContext();

// export const CartData =()=>{
//     // const item=[];
//     const [cart, setCart] = useState([]);
//     useEffect(() => {
//       axios
//         .get("http://localhost:8080/getCart")
//         .then((response) => {
//           setCart(response.data);
//           console.log(response.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }, []);
//    item.push(cart);
//     return cart;
// }
// const items=CartData();


const CartContextProvide = ({ children }) =>{
  const itemarray = [];
   const [cart, setCart] = useState([]);
   useEffect(() =>{
    getData();
   
    
   },[])
   const getData=() => {
     axios
       .get("http://localhost:8080/getCart")
       .then((response) => {
        response.data.map((item) => {
          itemarray.push({
            id: item.id,
            imageurl: item.imageurl,
            productprice: item.productprice,
            producttitle: item.producttitle,
            productsubtitle: item.productsubtitle,
            quantity: item.quantity,
          });
        });
        dispatch({
          type: "INITIALIZE",
          payload: {
            cartItem: itemarray,
            ...sumItem(itemarray),
          },
        });
       })
       .catch((error) => {
         console.log(error);
       });
   }

  const intialize = {
      cartItem: itemarray,
      ...sumItem(itemarray),
    }
    

    const [state, dispatch] = useReducer(cartReducer, intialize);
   
    const addProduct = (product) =>
      dispatch({ type: "ADD_ITEM", payload: product });
    const inCrease = (product) => dispatch({ type: "INCREASE", payload: product });
    const deCrease = (product) => dispatch({ type: "DECREASE", payload: product });
    const removeProduct = (product) => dispatch({ type: "REMOVE_PRODUCT", payload: product });
    const clearCart = () => dispatch({ type:"CLEAR"});

    const contextValue = {
        ...state,
        addProduct,
        inCrease,
        deCrease,
        removeProduct,
        clearCart,
        
    }

    return (
        <CartContext.Provider value={contextValue}>
            {
                children
            }
        </CartContext.Provider>
    )
}

export default CartContextProvide;