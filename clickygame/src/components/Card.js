import React from "react";
import cards from "../cards.json"

function Card(props) {
  return (
    <div class="card border-primary mb-3" style={{maxWidth: "20rem", margin: 10}}>
  <div class="card-body">
    <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)}/>
  </div>
  </div>
  );
}

export default Card;
