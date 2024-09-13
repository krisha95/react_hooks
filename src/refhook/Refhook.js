import React, { useRef } from "react";

const Refhook = () => {
  const inputvalue = useRef(null);
  const buttons = useRef(null);

  const handelclick = () => {
    inputvalue.current.focus();

    if (buttons.current) {
      buttons.current.style.color = "blue";
    }
  };

  return (
    <div>
      <input type="text" ref={inputvalue} />
      <button ref={buttons} onClick={handelclick}>
        submit
      </button>
    </div>
  );
};

export default Refhook;
