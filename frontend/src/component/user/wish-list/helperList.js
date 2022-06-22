export const IsInList = (product, listItems) => {
  return listItems.find((item) => item.productid === product.productid);
};
