import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import likesReducer from '../reducers/likesReducer';
import queueReducer from '../reducers/queueReducer';
import playingSongReducer from '../reducers/playingSongReducer';
// import playingSongReducer from 'redux/reducers/playingSongReducer';

export const initialState = {
  likedSongs: {
    favourites: [],
  },
  songQueue: {
    songsToPlay: [],
    alreadyPlayed: [],
  },
  playingSong: {
    song: {},
  },
};

const rootReducer = combineReducers({
  likedSongs: likesReducer,
  songQueue: queueReducer,
  playingSong: playingSongReducer,
});

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, composedEnhancers);
