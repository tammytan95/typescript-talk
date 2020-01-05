//DEFINE ACTION TYPES AND ACTION OBJECT

import { Action } from "redux";

//EXPORT ACTIONS TO MAKE SHAPE AVAILABLE IN THE REDUCER FILE
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

//CREATE INTERFACE TO REPRESENT INCREMENT_COUNTER ACTION TYPE
export interface IncrementCounterInterface extends Action {
  type: typeof INCREMENT_COUNTER;
}

//CREATE ACTION CREATOR FOR INCREMENT FUNCTION
//WE DEFINE THIS ACTION CREATOR TO BE A FUNCTION THAT RETURNS TYPE OF IncrementCounterInterface
export const incrementCounter: () => IncrementCounterInterface = () => ({
  type: INCREMENT_COUNTER
});

export interface DecrementCounterInterface extends Action {
  type: typeof DECREMENT_COUNTER;
}
export const decrementCounter: () => DecrementCounterInterface = () => ({
  type: DECREMENT_COUNTER
});

//CONSOLIDATE AND EXPORT BOTH INTERFACES AS CounterInterfaces
export type CounterInterfaces =
  | DecrementCounterInterface
  | IncrementCounterInterface;
