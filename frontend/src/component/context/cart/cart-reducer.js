const sumItem = cartItem => {
    return {
      itemCount: cartItem.reduce(
        (total, product) => total + product.quantity,
        0
      ),
      total: cartItem.reduce(
        (total, product) => total + product.quantity * product.price
      ),
    };
    
}

const cartReducer = (state,action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            //check item in the cart list
            if(!state.cartItem.find(item => item.id === action.payload.id)) {
                state.cartItem.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return{
                ...state,
                cartItem:[ ...state.cartItem],
                ...sumItem(state.cartItem)

            }
        case 'INCREASE':
            const increaseIndex = state.cartItem.findIndex(item => item.id === action.payload);
            state.cartItem[increaseIndex].quantity++;
            return {
                ...state,
                cartItem: [...state.cartItem],
                ...sumItem(state.cartItem),
            }
        default:
            return state;
    }
}

export default cartReducer;