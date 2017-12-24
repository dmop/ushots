import { GET_SHOTS, GET_SHOT, GET_COMMENTS } from "../actions/types";

export default function(state = { all: [], shot: null, comments: [] }, action) {
  switch (action.type) {
    case GET_SHOTS:
      return { ...state, all: [...action.payload.data] };
    case GET_SHOT:
      return { ...state, shot: action.payload.data };
    case GET_COMMENTS:
      return { ...state, comments: [...action.payload.data] };
    default:
      return state;
  }
}
