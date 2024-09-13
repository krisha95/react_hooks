import React, { useEffect, useState } from "react";

const Useeffecthook = () => {
  const [apidata, setApidata] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())  
      .then((data) => setApidata(data.products))  
      .catch((error) => console.log("Data fetch error:", error));

    console.log("useEffect hook");
  }, []);

  return (
    <div>
      {apidata.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Useeffecthook;
