import React, { FunctionComponent } from "react";

interface CounterProps {
  name: string;
  currentCounter: number;
  increment: () => void;
}

export const Counter: FunctionComponent<CounterProps> = ({
  currentCounter,
  increment,
  name
}) => {
  return (
    <>
      <h2>{name}</h2>
      <div>{currentCounter}</div>
      <button onClick={() => increment()}>Increment</button>
    </>
  );
};
