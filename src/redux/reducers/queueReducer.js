import { initialState } from '../store';
import undoable from 'redux-undo';
import { PLAY_NEXT_SONG, ADD_SONG } from '../actions/actionTypes';

const queueReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        song: action.payload,
      };

    default:
      return state;
  }
};

const queueReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_SONG:
      return [...state, queueReducer(undefined, action)];
    default:
      return state;
  }
};

const undoableQueue = undoable(queueReducers);

export default undoableQueue;
