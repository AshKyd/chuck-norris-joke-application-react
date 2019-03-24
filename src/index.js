import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider, connect } from "react-redux";
import configureStore from "./store";
import { MAX_FAVOURITES } from "./store/reducers/quotes";
import "./index.css";

import {
  getRandom,
  addFavourite as onFav,
  removeFavourite as onUnfav,
  addRandomFavourite
} from "./store/actions/quotes";

import { setView } from "./store/actions/nav";

const store = configureStore();

const ConnectedApp = connect(
  props => ({
    quotes: props.quotes.list,
    favourites: props.quotes.favourites,
    quotesError: props.quotes.error,
    view: props.nav.view,
    loading: props.quotes.loading
  }),
  { getRandom, addRandomFavourite, onFav, onUnfav, setView }
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp maxFavourites={MAX_FAVOURITES} />
  </Provider>,
  document.getElementById("root")
);
