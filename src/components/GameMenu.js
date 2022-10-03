import React from "react";

export default function GameMenu(props) {
  return (
    <div className="game--menu">
      <button onClick={props.handleClickHard} className="game--mode">
        {props.gameMode ? "Manu" : "Normal"} Mode
      </button>
    </div>
  );
}
