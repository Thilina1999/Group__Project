import React, { createContext, useReducer, useEffect } from "react";
import wishListReducer, { sumItemList } from "./wishlist-reducer";
import axios from "axios";


export const WishListContext = createContext();




const WishListContextProvider =({ children })=>{
    const itemListarray = [];
  useEffect(() => {
    getDataList();
  }, []);
       const getDataList = () => {
         axios
           .get("http://localhost:8080/getList")
           .then((response) => {
             response.data.map((item) => {
               itemListarray.push({
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
                 listItems: itemListarray,
                 ...sumItemList(itemListarray),
               },
             });
           })
           .catch((error) => {
             console.log(error);
           });
       };
    const intialState = {
      listItems: itemListarray,
      ...sumItemList(itemListarray),
    };
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