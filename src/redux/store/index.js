import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import likesReducer from '../reducers/likesReducer';
import undoableQueue from '../reducers/queueReducer';
// import playingSongReducer from 'redux/reducers/playingSongReducer';

export const initialState = {
  likedSongs: {
    favourites: [],
  },
  songQueue: {
    song: null,
  },
  playingSong: {
    song: {},
  },
};

const rootReducer = combineReducers({
  likedSongs: likesReducer,
  songQueue: undoableQueue,
  // playingSong: playingSongReducer,
});

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, composedEnhancers);
