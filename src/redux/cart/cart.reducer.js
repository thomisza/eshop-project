import { CartActionTypes } from './cart.type';
import { addItemToCart, removeItemFromCart, removeSingleItemFromCart } from './cart.util';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeSingleItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;