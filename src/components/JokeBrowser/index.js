import React from "react";
import Rows from "../Rows";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

function JokeBrowser({ quotes, onFav, onUnfav, getRandom }) {
  return (
    <div>
      <h2>Joke browser</h2>
      <Rows {...{ quotes, onFav, onUnfav }} />
      <ButtonGroup>
        <Button onClick={getRandom}>Load some jokes</Button>
      </ButtonGroup>
    </div>
  );
}

export default JokeBrowser;
