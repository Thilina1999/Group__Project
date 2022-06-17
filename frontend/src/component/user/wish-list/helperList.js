export const IsInList = (product, listItems) => {
  return listItems.find((item) => item.id === product.id);
};
