import { initialState } from '../store';
import {
  ADD_CURRENT_PLAYING,
  PLAY_NEXT_SONG,
  PLAY_PREVIOUS_SONG,
} from '../actions/actionTypes';

const playingSongReducer = (state = initialState.playingSong, action) => {
  switch (action.type) {
    case ADD_CURRENT_PLAYING:
      return {
        song: action.payload,
      };
    case PLAY_NEXT_SONG:
      return {};
    case PLAY_PREVIOUS_SONG:
      return;

    default:
      return state;
  }
};

export default playingSongReducer;
