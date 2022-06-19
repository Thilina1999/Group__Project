import React, { createContext, useReducer, useEffect,useContext } from "react";
import wishListReducer, { sumItemList } from "./wishlist-reducer";
import axios from "axios";
import { AutheContext } from "../auth-context/authContext";

export const WishListContext = createContext();




const WishListContextProvider =({ children })=>{
  const { jwt, userId } = useContext(AutheContext);
    const itemListarray = [];
  useEffect(() => {
    getDataList();
  }, []);
       const getDataList = () => {
         axios
           .get(`http://localhost:8080/getListbyUserId/${userId}`, {
             headers: { Authorization: `Bearer ${jwt}` },
           })
           .then((response) => {
             response.data.map((item) => {
               itemListarray.push({
                 id: item.id,
                 productid: item.productid,
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