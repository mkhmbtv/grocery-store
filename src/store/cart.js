const ADD_PRODUCE = 'cart/ADD_PRODUCE';

export const addProduce = (produceId) => {
  return {
    type: ADD_PRODUCE,
    id: produceId
  }
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_PRODUCE:
      return { ...state, [action.id]: { id: action.id, count: 1 } }
    default:
      return state;
  }
};