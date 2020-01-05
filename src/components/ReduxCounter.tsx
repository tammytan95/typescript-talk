import React, { FunctionComponent, useState } from "react";
import { Counter } from "./Counter";
import { incrementCounter, decrementCounter } from "../actions/counter";
import { connect } from "react-redux";
import { RootState } from "../reducers";

//DEFINE PROP TYPES FOR STATE/ACTION CREATORS
interface Props {
  counter: number;
  incrementCounterActionCreator: typeof incrementCounter;
  decrementCounterActionCreator: typeof decrementCounter;
}

const ReduxCounter: FunctionComponent<Props> = ({
  counter,
  incrementCounterActionCreator,
  decrementCounterActionCreator
}) => {
  return (
    //SEE HOW THE TYPES HERE ARE LIMITED TO WHAT WAS DEFINED IN COUNTER COMPONENT?
    <Counter
      name="Redux Counter"
      currentCounter={counter}
      increment={() => incrementCounterActionCreator()}
    ></Counter>
  );
};

//MAP STATE TO PROPS TAKES IN STATE OF TYPE ROOTSTATE
//SIMILAR CONCEPT FOR MAP DISPATCH TO PROPS
export default connect(
  (state: RootState) => ({
    counter: state.counter.counter
    // random: state.counter.random
  }),
  {
    incrementCounterActionCreator: incrementCounter,
    decrementCounterActionCreator: decrementCounter
  }
)(ReduxCounter);
