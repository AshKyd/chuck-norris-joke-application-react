import React from "react";
import Rows from "../Rows";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import Checkbox from "../Checkbox";

class Favourites extends React.Component {
  state = { autoUpdating: false };
  getRandomQuote() {
    const intervalMs = 5000;
    const { favourites, maxFavourites, addRandomFavourite } = this.props;
    if (favourites.length >= maxFavourites - 1) {
      return this.stopTimer();
    }

    // make the request
    this.timer = setTimeout(() => {
      if (!this.state.autoUpdating) return;
      addRandomFavourite();
      this.getRandomQuote();
    }, intervalMs);
  }
  startTimer() {
    this.getRandomQuote();
    this.setState({ autoUpdating: true });
  }
  stopTimer() {
    clearInterval(this.timer);
    setTimeout(() => this.setState({ autoUpdating: false }));
  }
  render() {
    const {
      favourites,
      onFav,
      onUnfav,
      addRandomFavourite,
      maxFavourites
    } = this.props;
    const { autoUpdating } = this.state;
    return (
      <div>
        <h2>Favourite jokes</h2>
        {!favourites.length && (
          <p>
            You don't have any favourites yet. Click the Home icon to add some
            favourites, or add a random one below.
          </p>
        )}

        <ButtonGroup>
          <Button
            onClick={addRandomFavourite}
            disabled={favourites.length >= maxFavourites}
          >
            Add a random favourite
          </Button>

          <Checkbox
            label="Auto-add"
            showLabel={true}
            checked={autoUpdating}
            onCheck={this.startTimer.bind(this)}
            onUncheck={this.stopTimer.bind(this)}
          />
        </ButtonGroup>

        <Rows {...{ quotes: favourites, onFav, onUnfav }} />
      </div>
    );
  }
}

export default Favourites;
