const initialState = {
  dice1: "./image/1.png",
  dice2: "./image/2.png",
  dice3: "./image/3.png",
  select: "",
  winTimes: 0,
  totalTimes: 0,
};

const diceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT": {
      state.select = action.payload;
      return { ...state };
    }
    case "PLAY": {
      let num1 = Math.floor(Math.random() * 6) + 1;
      let num2 = Math.floor(Math.random() * 6) + 1;
      let num3 = Math.floor(Math.random() * 6) + 1;
      let total = num1 + num2 + num3;
      let stateDiceClone = { ...state };
      if (stateDiceClone.select.length > 0) {
        stateDiceClone.dice1 = `./image/${num1}.png`;
        stateDiceClone.dice2 = `./image/${num2}.png`;
        stateDiceClone.dice3 = `./image/${num3}.png`;
        if (total <= 10 && stateDiceClone.select === "XỈU") {
          stateDiceClone.winTimes += 1;
        }
        if (total > 10 && stateDiceClone.select === "TÀI") {
          stateDiceClone.winTimes += 1;
        }
        stateDiceClone.totalTimes += 1;
      }
      state = { ...stateDiceClone };
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default diceReducer;
