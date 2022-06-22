import axios from "axios";

const jwt = localStorage.getItem("auth-token");
const userId = localStorage.getItem("id");
export const sumItemList = (listItems) => {
  return {
    itemCountList: listItems.reduce(
      (total, product) => total + product.quantity,
      0
    ),
  };
};
const createwishlist = (payload) => {
  axios
    .post(
      `http://localhost:8080/createList`,
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
const deleteList = (id) => {
  axios
    .delete(`http://localhost:8080/deleteList/${id}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    .catch((error) => {
      console.log(error);
    });
};
const wishListReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        ...action.payload,
        ...sumItemList(action.payload.listItems),
      };
    case "Add_List":
      if (
        !state.listItems.find(
          (item) => item.productid === action.payload.productid
        )
      ) {
        state.listItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        listItems: [...state.listItems],
        ...sumItemList(state.listItems),
        ...createwishlist(action.payload),
      };
    case "REMOVE_ITEM":
      const newList = state.listItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        listItems: [...newList],
        ...sumItemList(newList),
        ...deleteList(action.payload.id),
      };
    default:
      return state;
  }
};
export default wishListReducer;
