import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import likesReducer from '../reducers/likesReducer';
import queueReducer from '../reducers/queueReducer';
import playingSongReducer from '../reducers/playingSongReducer';
import searchReducer from '../reducers/searchReducer';
import albumReducer from '../reducers/albumReducer';
import artistReducer from '../reducers/artistsReducers';

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
  search: {
    results: [],
  },
  album: {
    albumDetail: {},
  },
  artist: {
    artistDetail: {},
  },
};

const rootReducer = combineReducers({
  likedSongs: likesReducer,
  songQueue: queueReducer,
  playingSong: playingSongReducer,
  search: searchReducer,
  album: albumReducer,
  artist: artistReducer,
});

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composedEnhancers);
export const persistor = persistStore(store);
