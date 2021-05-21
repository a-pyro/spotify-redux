import { initialState } from '../store';
// import undoable from 'redux-undo';
import { QUEUE_SONG, UNQUEUE_SONG } from '../actions/actionTypes';

const queueReducer = (state = initialState.songQueue, action) => {
  switch (action.type) {
    case QUEUE_SONG:
      return {
        ...state,
        songsToPlay: [...state.songsToPlay, action.payload],
      };
    case UNQUEUE_SONG:
      return {
        ...state,
        songsToPlay: state.songsToPlay.filter(
          (s) => s.id !== action.payload.id
        ),
      };

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
