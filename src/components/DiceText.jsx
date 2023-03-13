import React, { Component } from "react";
import { connect } from "react-redux";
import "./Dices.css";

class DiceText extends Component {
  render() {
    let { select, winTimes, totalTimes } = this.props;
    return (
      <div>
        <p className="fontText">BẠN CHỌN:{select}</p>
        <p className="fontText">Số bàn thắng:{winTimes}</p>
        <p className="fontText">Tổng số bàn chơi:{totalTimes}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    select: state.diceReducer.select,
    winTimes: state.diceReducer.winTimes,
    totalTimes: state.diceReducer.totalTimes,
  };
};

export default connect(mapStateToProps, null)(DiceText);
