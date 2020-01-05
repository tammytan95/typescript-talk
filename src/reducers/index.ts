import { combineReducers } from "redux";
import { CounterState, counter } from "./counter";

//WILL BE USED IN REDUX COUNTER COMPONENT - SPECIFICALLY, IN CONNECT (MAPSTATETOPROPS)
export interface RootState {
  counter: CounterState;
}

// Turns an object whose values are different reducing functions into a single reducing function you can pass to createStore
const rootReducer = combineReducers({
  counter
});

export default rootReducer;
