import React from "react";
import NavBar from "../NavBar";
import Loader from "../Loader";
import Error from "../Error";
import JokeBrowser from "../JokeBrowser";
import Favourites from "../Favourites";
import LoginPopup from "../LoginPopup";
import classnames from "classnames";
import "./App.css";

function App({
  quotes = [],
  quotesError,
  favourites = [],
  getRandom = () => {},
  setView = () => {},
  addRandomFavourite = () => {},
  maxFavourites,
  onFav,
  onUnfav,
  view,
  loading = false
}) {
  return (
    <div className="App">
      <header className="App__header">
        <h1>Chuck Norris Joke Application</h1>
        <div className="loader">
          <Loader loading={loading} />
        </div>
      </header>
      {quotesError && <Error>{quotesError}</Error>}
      <div className="App__body">
        <div
          className={classnames({
            App__scrollable: true,
            App__random: true,
            "App__random--visible": view === "home"
          })}
        >
          <JokeBrowser
            {...{
              quotes,
              onFav,
              onUnfav,
              getRandom
            }}
          />
        </div>
        <div
          className={classnames({
            App__scrollable: true,
            App__favourites: true,
            "App__favourites--visible": view === "favourites"
          })}
        >
          <Favourites
            {...{
              favourites,
              onFav,
              onUnfav,
              addRandomFavourite,
              maxFavourites
            }}
          />
        </div>
      </div>

      <NavBar
        items={[
          {
            label: "Home",
            icon: "home",
            onClick: () => setView("home"),
            active: view === "home"
          },
          {
            label: "Favourites",
            icon: "star",
            onClick: () => setView("favourites"),
            active: view === "favourites"
          }
        ]}
      />

      <LoginPopup />
    </div>
  );
}

export default App;
