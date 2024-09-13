import React from "react";
import useCounter from "./useCounter";

const Customhook = () => {
  const [count, Increment, Decremet] = useCounter(10);

  return (
    <div>
      <button onClick={Increment}>increment</button>
      <span>{count}</span>
      <button onClick={Decremet}>decrement</button>
    </div>
  );
};

export default Customhook;
