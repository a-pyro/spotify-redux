import { LIKE_SONG, UNLIKE_SONG } from '../actions/actionTypes';
import { initialState } from '../store';

const likesReducer = (state = initialState.likedSongs, action) => {
  switch (action.type) {
    case LIKE_SONG:
      return {
        favourites: [...state.favourites, action.payload],
      };
    case UNLIKE_SONG:
      return {
        favourites: state.favourite.filter(
          (song) => song.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default likesReducer;
