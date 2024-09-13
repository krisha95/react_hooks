import React, { useEffect, useState } from "react";

const Useeffecthook = () => {
  const [apidata, setApidata] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products?limit=5&skip=${skip}`);
        const data = await response.json();
        setApidata(data.products);
      } catch (error) {
        console.log("Data fetch error:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      console.log("Logging every 5 seconds");
    }, 5000);

    return () => clearInterval(intervalId);
  }, [skip]);

  const handleskipdata = () => {
    setSkip((prevSkip) => prevSkip + 5);
    console.log("dataskp", skip + 5);
  };

  return (
    <div>
      {apidata.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>₹{product.price}</p>
        </div>
      ))}
      <button onClick={handleskipdata}>skipdata</button>
    </div>
  );
};

export default Useeffecthook;
