import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decremet = () => {
    setCount(count - 1);
  };
  return [count, Increment, Decremet];
};

export default useCounter;
