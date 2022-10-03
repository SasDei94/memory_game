import React from "react";

export default function NewGame(props) {
  return (
    <div className="newGameBox">
      <h1 className="roundLost">
        You clicked a card twice and lost this round. Try again!
      </h1>
      <button onClick={props.handleClickNew} className="new--game">
        New Game
      </button>
    </div>
  );
}
