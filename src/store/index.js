import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/";
import rootSaga from "./sagas";

export default function() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk, sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
