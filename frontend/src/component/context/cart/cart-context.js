import React, { createContext, useReducer, useEffect, useContext } from "react";
import cartReducer, { sumItem } from "./cart-reducer";
import axios from "axios";
import { AutheContext } from "../auth-context/authContext";
export const CartContext = createContext();




const CartContextProvide = ({ children }) =>{
  const { jwt, userId } = useContext(AutheContext);
  //  const jwt = localStorage.getItem("auth-token");
  const itemarray = [];
   
   useEffect(() =>{
    getData();
   },[])
   const getData=() => {
     axios
       .get(`http://localhost:8080/getCartByUserId/${userId}`, {
         headers: { Authorization: `Bearer ${jwt}` },
       })
       .then((response) => {
         response.data.map((item) => {
           itemarray.push({
             id: item.id,
             productid:item.productid,
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