import React, { useState } from "react";

const Ustatehook = () => {
  const [count, setCount] = useState(0);

  let c = 0;

  const handelInco = () => {
    c = c + 1;
    console.log("log of c:::", c);
  };

  const handelInc = () => {
    setCount(count + 1);
  };

  const handelDec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <span>{c}</span>
      <button onClick={handelInco}>Icrement</button>
      <br />
      <button onClick={handelInc}>Icrement</button>
      <span>{count}</span>
      <button onClick={handelDec}>Decrement</button>
    </div>
  );
};

export default Ustatehook;
