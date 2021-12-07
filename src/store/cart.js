const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';

export const addToCart = (produceId) => {
  return {
    type: ADD_TO_CART,
    id: produceId
  }
};

export const removeFromCart = (produceId) => {
  return {
    type: REMOVE_FROM_CART,
    id: produceId
  }
}

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [action.id]: { id: action.id, count: 1 } };
    case REMOVE_FROM_CART:
      return Object.fromEntries(
        Object.entries(state).filter(([key, value]) => value.id !== action.id)
      )
    default:
      return state;
  }
};