import { initialState } from 'redux/store';

const likesReducer = (state = initialState.likedSongs, action) => {
  switch (action.type) {
    // case value:

    //   break;

    default:
      return state;
  }
};

export default likesReducer;
