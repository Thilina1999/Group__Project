export const sumItemList = (listItems) => {
  return {
    itemCountList: listItems.reduce(
      (total, product) => total + product.quantity,
      0
    ),
  };
};

const wishListReducer = (state, action) => {
  switch (action.type) {
    case "Add_List":
      if (!state.listItems.find((item) => item.id === action.payload.id)) {
        state.listItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        listItems: [...state.listItems],
        ...sumItemList(state.listItems),
      };
      case "REMOVE_ITEM": 
        const newList = state.listItems.filter(item => item.id !== action.payload.id);
        return {
          ...state,
          listItems: [...newList],
          ...sumItemList(newList),
        }
    default:
      return state;
  }
};
export default wishListReducer;
