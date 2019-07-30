import React, { Component } from "react";
import Card from "./components/Card";
import cards from "./cards.json";
import "./App.css";
const _ = require("lodash");

class App extends Component {
  state = {
    cards,
    currentScore: 0,
    topScore: 0,
    clicked: []
  };

  shuffle = (arr) => {
      _.shuffle(arr)
  }

  handleClick = (id) => {
    if(this.state.clicked.indexOf[id] === -1) {
        this.handleIncrement();
        this.setState(this.state.clicked.concat(id))
    } else {
        this.handleReset();
    };
  };


  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
         <p>Score: {this.state.currentScore} | Top Score: {this.state.topScore}</p>
        </nav>
        <div class="jumbotron bg-info">
          <h1 class="display-3">
            Welcome to the critically acclaimed Clicky Game!!
          </h1>
          <p class="lead">
            The rules are simple. Click an image to score a point. Your score
            will increment each time you click a unique image. Clicking an image
            you've already clicked on will reset your score. Good Luck!
          </p>
        </div>
        <div className="row">
          {this.state.cards.map(card => (
            <Card
              className="cardImg col-md-3"
              key={card.id}
              name={card.name}
              image={card.image}
              id={card.id}
              handleClick={this.handleClick}
              handleReset={this.handleReset}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
