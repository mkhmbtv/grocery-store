import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';
const TOGGLE_LIKE ='produce/TOGGLE_LIKE';

export const getAllProduce = (state) => Object.values(state.produce);

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData
  };
};

export const toggleLike = (id) => {
  return {
    type: TOGGLE_LIKE,
    id
  };
};

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE: {
      const newState = {};
      action.produce.forEach(produce => {
        newState[produce.id] = produce;
      });
      return newState;
    }
    case TOGGLE_LIKE: {
      const newState = { ...state };
      if (newState[action.id].liked) {
        newState[action.id].liked = false;
      } else {
        newState[action.id].liked = true;
      }
      return newState;
    }

    default: 
      return state;
  }
};

