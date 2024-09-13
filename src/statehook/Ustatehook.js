import React, { useState } from "react";

const Ustatehook = () => {
  const [count, setCount] = useState(0);

  const handelInc = () => {
    setCount(count + 1);
  };

  const handelDec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={handelInc}>Icrement</button>
      <span>{count}</span>
      <button onClick={handelDec}>Decrement</button>
    </div>
  );
};

export default Ustatehook;
