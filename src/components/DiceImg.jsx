import React, { Component } from "react";
import { connect } from "react-redux";
import "./Dices.css";

class DiceImg extends Component {
  render() {
    let { dice1, dice2, dice3 } = this.props;
    return (
      <div>
        <img className="imgSize" src={dice1} alt="" />
        <img className="imgSize" src={dice2} alt="" />
        <img className="imgSize" src={dice3} alt="" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dice1: state.diceReducer.dice1,
    dice2: state.diceReducer.dice2,
    dice3: state.diceReducer.dice3,
  };
};

export default connect(mapStateToProps, null)(DiceImg);
