import React, { useReducer } from "react";

 const Reducer = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Inrement</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Reducer;
