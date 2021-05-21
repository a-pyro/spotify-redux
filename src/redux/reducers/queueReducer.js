import { initialState } from '../store';
// import undoable from 'redux-undo';
import { ADD_SONG, QUEUE_SONG } from '../actions/actionTypes';

const queueReducer = (state = initialState.songQueue, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        song: action.payload,
      };
    case QUEUE_SONG:
      return { ...state, future: [...state.future, action.payload] };

    default:
      return state;
  }
};

// const queueReducers = (state = [], action) => {
//   switch (action.type) {
//     case ADD_SONG:
//       return queueReducer(undefined, action);
//     case QUEUE_SONG:
//       return queueReducer(undefined, action);
//     default:
//       return state;
//   }
// };

// const undoableQueue = undoable(queueReducers);

export default queueReducer;
