export const IsInCart = (product, cartItem) =>{
    return cartItem.find(item=> item.id === product.id);

}