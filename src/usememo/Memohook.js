import React, { useState, useMemo } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const computedValue = useMemo(() => {
    console.log("Computing value...");
    return count * 2;
  }, [count]);

  const datashow = () => {
    setShow(!show);
    console.log("toggle button click:::",show);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={datashow}>Toggle Show</button>
    </div>
  );
};

export default Example;
