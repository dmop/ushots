import { combineReducers } from "redux";
import ShotsReducer from "./reducer_shots";

const rootReducer = combineReducers({
  shots: ShotsReducer
});

export default rootReducer;
