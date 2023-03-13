import React, { Component } from "react";
import { connect } from "react-redux";
import DiceImg from "./DiceImg";
import DiceText from "./DiceText";

import "./Dices.css";

class Dices extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="d-flex  justify-content-between">
          <button
            className="btn btn-primary btnSize"
            onClick={() => {
              this.props.onSelect("TÀI");
            }}
          >
            TÀI
          </button>
          <DiceImg />
          <button
            className="btn btn-primary btnSize"
            onClick={() => {
              this.props.onSelect("XỈU");
            }}
          >
            XỈU
          </button>
        </div>
        <DiceText />
        <button className="btn btn-success" onClick={this.props.onPlayGame}>
          Play game
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (text) => {
      const action = {
        type: "SELECT",
        payload: text,
      };
      dispatch(action);
    },
    onPlayGame: () => {
      const action = {
        type: "PLAY",
        payload: "",
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Dices);
