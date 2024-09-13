import React from "react";
import useCounter from "./useCounter";

const Counter2 = () => {
  const [count, Increment, Decremet] = useCounter(5);

  return (
    <div>
      <button onClick={Increment}>increment</button>
      <span>{count}</span>
      <button onClick={Decremet}>decrement</button>
    </div>
  );
};

export default Counter2;
