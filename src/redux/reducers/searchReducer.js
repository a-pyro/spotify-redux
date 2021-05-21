import { GET_RESULTS } from '../actions/search';
import { initialState } from '../store/index.js';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
