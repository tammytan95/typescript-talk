import React, { FunctionComponent } from "react";
import { ReactCounter } from "./ReactCounter";
import ReduxCounter from "./ReduxCounter";

export const App: FunctionComponent = () => {
  return (
    <>
      <h1> Tammy & Kenny want to count those 💸💰 STACKS 💰💸</h1>
      <ReactCounter></ReactCounter>
      <ReduxCounter></ReduxCounter>
    </>
  );
};
