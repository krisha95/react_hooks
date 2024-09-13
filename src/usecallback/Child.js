import React, { memo } from "react";

const Child = memo(({ onClick, children }) => {
  console.log(`child render :: ${children}`);

  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
});

export default Child;
