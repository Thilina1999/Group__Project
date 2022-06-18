export const IsInCart = (product, listItems) => {
  return listItems.find((item) => item.id === product.id);
};