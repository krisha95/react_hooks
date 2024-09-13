import React, { createContext } from "react";
import Context from "./Context";

export const dataname = createContext("krisha");
export const datagender = createContext("female");

const Usecontexthook = () => {
  const name = "krisha";
  const gender = "female";
  return (
    <div>
      <dataname.Provider value={name}>
        <datagender.Provider value={gender}>
          <Context />
        </datagender.Provider>
      </dataname.Provider>
    </div>
  );
};

export default Usecontexthook;
