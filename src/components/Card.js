import React from "react";

export default function (props) {
  return (
    <input
      type="image"
      className="card--img"
      src={require(`../images/${props.src}`)}
      onClick={props.handleClick}
    />
  );
}
