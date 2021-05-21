import { initialState } from 'redux/store';

const playingSongReducer = (state = initialState.playingSong, action) => {
  switch (action.type) {
    // case value:

    //   break;

    default:
      return state;
  }
};

export default playingSongReducer;
