import { initialState } from 'redux/store';

const queueReducer = (state = initialState.songQueue, action) => {
  switch (action.type) {
    // case value:

    //   break;

    default:
      return state;
  }
};

export default queueReducer;
