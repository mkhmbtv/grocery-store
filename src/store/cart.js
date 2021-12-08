const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';
const UPDATE_COUNT = 'cart/UPDATE_COUNT';
const PURCHASE = 'cart/PURCHASE';

export const getCartItems = (state) => {
  return Object.values(state.cart)
    .map(item => {
      return {
        ...item,
        ...state.produce[item.id]
      };
    });
};

export const getCartItemById = (id) => (state) => state.cart[id];

export const addToCart = (produceId) => {
  return {
    type: ADD_TO_CART,
    id: produceId
  }
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
};

export const updateCount = (id, count) => {
  if (count < 1) return removeFromCart(id);
  return {
    type: UPDATE_COUNT,
    data: {
      id,
      count
    }
  };
};

export const purchase = () => {
  return {
    type: PURCHASE
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        [action.id]: { id: action.id, count: 1 }
      };
    }   
    case REMOVE_FROM_CART: {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }
    case UPDATE_COUNT: {
      const newState = { ...state };
      newState[action.data.id].count = action.data.count;
      return newState;
    }
    case PURCHASE:
      return {};
    default:
      return state;
  }
};