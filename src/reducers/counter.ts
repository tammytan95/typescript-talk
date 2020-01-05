//DEFINE INITIAL STATE OF STORE AND OUTLINE WHAT HAPPENS TO STATE WHEN A SPECIFIC ACTION HAPPENS

import {
  CounterInterfaces,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from "../actions/counter";

//DEFINE COUNTERSTATE PROPERTY TYPE
export interface CounterState {
  counter: number;
}

//SET INITIAL STATE
const initialState: CounterState = {
  counter: 0
};

//SET UP COUNTER REDUCER - A FUNC THAT ACCEPTS 2 PARAMS, 1) STATE (TYPE IS COUNTERSTATE),  2) ACTION (TYPE IS COUNTERINTERFACES), AND RETURNS COUNTERSTATE (NUMBER)
export const counter: (
  state: CounterState,
  action: CounterInterfaces
) => CounterState = (state = initialState, action) => {
  //WHEN YOU HOVER OVER ACTION.TYPE, YOU CAN SEE THAT ACTION TYPE IS LIMITED, WHICH HELPS WHEN DEFINING CASES (LINE 26, 31)
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        counter: state.counter + 1
      };
    }
    case DECREMENT_COUNTER: {
      return {
        counter: state.counter - 1
      };
    }
    // THIS WONT WORK
    // case "SOME_OTHER_ACTION_TYPE": {

    // }
    default: {
      return initialState;
    }
  }
};
