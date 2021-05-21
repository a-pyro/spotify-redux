import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import likesReducer from 'redux/reducers/likesReducer';
import queueReducer from 'redux/reducers/queueReducer';
import playingSongReducer from 'redux/reducers/playingSongReducer';

export const initialState = {
  likedSongs: {
    favourites: [],
  },
  songQueue: {
    queue: [],
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
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composedEnhancers);
export const persistor = persistStore(store);
