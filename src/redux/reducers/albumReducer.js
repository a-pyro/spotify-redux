import { GET_ALBUM } from '../actions/album.js';
import { initialState } from '../store/index.js';

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
        albumDetail: action.payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
