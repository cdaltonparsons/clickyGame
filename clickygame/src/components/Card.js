import React from "react";

function Card(props) {
  return (
    <div className="card border-primary mb-3" style={{maxWidth: "20rem", margin: 10}}>
  <div className="card-body">
    <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)}/>
  </div>
  </div>
  );
}

export default Card;
