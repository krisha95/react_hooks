import React, { useCallback, useState } from "react";
import Child from "./Child";

const ProductPage = () => {
  const [counter, setCounter] = useState(0);

  // const increment = useCallback(() => {
  //   setCounter((prevCounter) => prevCounter + 1);
  //   console.log("increment");
  // }, []);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
    console.log("increment");
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
    console.log("decrement");
  };

  // const decrement = useCallback(() => {
  //   setCounter((prevCounter) => prevCounter - 1);
  //   console.log("decrement");
  // }, []);

  return (
    <div>
      <span>count : {counter}</span>
      <Child onClick={increment}>Increment</Child>
      <Child onClick={decrement}>Decrement</Child>
    </div>
  );
};

export default ProductPage;
