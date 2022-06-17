import React, { createContext, useReducer, useState, useEffect } from "react";
import wishListReducer from "./wishlist-reducer";


export const WishListContext = createContext();




const WishListContextProvider =({ children })=>{
    const intialState = { listItems: [], itemCount: 0 };
    const [state, dispatch] = useReducer(wishListReducer, intialState);

    const addProductList = (product) => dispatch({ type: "Add_List", payload: product})
    const removeProductList = (product) =>
      dispatch({ type: "REMOVE_ITEM", payload: product });
    const listVlues = {
        ...state,
        addProductList,
        removeProductList,
    }
    return(
        <WishListContext.Provider value={listVlues}>
            {children}
        </WishListContext.Provider>
    )

}

export default WishListContextProvider;