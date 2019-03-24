import { combineReducers } from "redux";
import quotes from "./quotes";
import nav from "./nav";

const rootReducer = combineReducers({
  quotes,
  nav
});

export default rootReducer;
