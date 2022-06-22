export const IsInCart = (product, listItems) => {
  return listItems.find((item) => item.productid === product.productid);
};