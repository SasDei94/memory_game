import React from "react";

export default function Header(props) {
  return (
    <div className="header--container">
      <div className="header">
        <div className="title">Memory Game</div>
        <div className="description">
          Choose the cards you haven't clicked so far
        </div>
      </div>
      <div className="score">
        <div className="best--score">Best Score: {props.bestScore}</div>
        <div className="current--score">Current Score: {props.currScore}</div>
      </div>
    </div>
  );
}
