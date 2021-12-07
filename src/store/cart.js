const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';
const INCREMENT_COUNT = 'cart/INCREMENT_COUNT';
const DECREMENT_COUNT = 'cart/DECREMENT_COUNT';
const SET_NEW_COUNT = 'cart/SET_NEW_COUNT';
const PURCHASE = 'cart/PURCHASE';

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

export const incrementCount = (id) => {
  return {
    type: INCREMENT_COUNT,
    id
  }
};

export const decrementCount = (id) => {
  return {
    type: DECREMENT_COUNT,
    id
  };
};

export const setNewCount = (id, count) => {
  return {
    type: SET_NEW_COUNT,
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
      const newState = { ...state };
      if (newState[action.id]) {
        newState[action.id].count += 1;
        return newState;
      }
      newState[action.id] = { id: action.id, count: 1 };
      return newState;
    }
      
    case REMOVE_FROM_CART: {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }
    case INCREMENT_COUNT: {
      const newState = { ...state };
      newState[action.id].count += 1;
      return newState;
    }
    case DECREMENT_COUNT: {
      const newState = { ...state };
      if (newState[action.id].count <= 1) {
        delete newState[action.id];
        return newState;
      }
      newState[action.id].count -= 1;
      return newState;
    }
    case SET_NEW_COUNT: {
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