import React, { Component } from "react";
import Card from "./components/Card";
import cards from "./cards.json";
import "./App.css";
import _ from "lodash";

class App extends Component {
  state = {
    cards,
    currentScore: 0,
    highScore: 0,
    clicked: []
  };

  handleShuffle = () => {
    this.setState({ cards: _.shuffle(this.state.cards) });
  };

  handleClick = id => {
    if (!this.state.clicked.includes(id)) {
      this.handleIncrement();
      const newArr = this.state.clicked.concat(id);
      this.setState({ clicked: newArr });
      this.handleShuffle();
    } else {
      this.handleReset()
      this.handleShuffle();
      alert("Sorry! Try Again!")
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    } else if (this.state.currentScore === 12) {
      this.handleReset();
      alert("You won! Congratulations!");
    }
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      clicked: []
    });
    this.handleShuffle();
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
          <p>
            Score: {this.state.currentScore} | High Score: {this.state.highScore}
          </p>
        </nav>
        <div className="jumbotron bg-info">
          <h1 className="display-3">
            Welcome to the critically acclaimed <strong>Clicky Game!!</strong>
          </h1>
          <p className="lead">
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
              handleIncrement={this.handleIncrement}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
