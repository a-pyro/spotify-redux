import { GET_ARTIST } from "../actions/artist.js"
import { initialState } from "../store/index.js"

const artistReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ARTIST:
      return {
        ...state,
        artistDetail: action.payload
      }
    default:
      return state
  }
}

export default artistReducer