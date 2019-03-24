import { fork, put, takeEvery, select } from "redux-saga/effects";
import {
  setFavourites,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  ADD_RANDOM_FAVOURITE
} from "../actions/quotes";
import { loadLocalStorage, saveLocalStorage } from "../../utils/localStorage";

const LOCALSTORAGE_KEY = "FAVOURITES";

function* saveState(action) {
  const quotes = yield select(state => state.quotes.favourites);
  yield saveLocalStorage(LOCALSTORAGE_KEY, quotes);
}

function* loadState() {
  const favourites = yield loadLocalStorage(LOCALSTORAGE_KEY, []);
  yield put(setFavourites(favourites));
}

function* rootSaga() {
  yield fork(loadState);
  yield takeEvery(ADD_FAVOURITE, saveState);
  yield takeEvery(REMOVE_FAVOURITE, saveState);
  yield takeEvery(ADD_RANDOM_FAVOURITE, saveState);
}

export default rootSaga;
