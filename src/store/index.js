import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

function rootReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
