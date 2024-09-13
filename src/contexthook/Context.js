import React, { useContext } from "react";
import { datagender, dataname } from "./Usecontexthook";

const Context = () => {
  const name = useContext(dataname);
  const gender = useContext(datagender);
  return (
    <div>
      <p>
        my name is krisha {name} my gender is {gender}
      </p>
    </div>
  );
};

export default Context;
