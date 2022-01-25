import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart, decreaseItemFromCart } from './cart-utilities';

const INITIAL_STATE = {
  display: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        display: !state.display
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(action.payload, state.cartItems)
      }; 
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseItemFromCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
};

export default cartReducer;
