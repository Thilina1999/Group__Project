 import React, { createContext, useReducer } from "react";
import cartReducer from "./cart-reducer";

export const CartContext = createContext();


const intialState = { cartItem:[], itemCount:0, total:0 };

const CartContextProvide = ({ children }) =>{
    const [state,dispatch] = useReducer(cartReducer,intialState);
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