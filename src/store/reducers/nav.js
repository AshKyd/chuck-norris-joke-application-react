import { SET_VIEW } from "../actions/nav";

export default function(state = { view: "home" }, action) {
  switch (action.type) {
    case SET_VIEW:
      return { ...state, view: action.id };
    default:
      return state;
  }
}
