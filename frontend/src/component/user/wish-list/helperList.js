export const IsInList = (product, listItems) => {
  // console.log("helloqada", listItems);
  // console.log("he", product);
  return listItems.find((item) => item.productid === product.productid);
};

export const GetId = (product,listItems) => {
  const ids=listItems.findIndex((item) => item.productid === product.productid);
  const array = listItems[ids];
  return array;
};