import { combineReducers } from "redux";
import diceReducer from "../stateDice/reducer";

const rootReducer = combineReducers({
  //key and value of child reducer
  diceReducer: diceReducer,
});

export { rootReducer };
