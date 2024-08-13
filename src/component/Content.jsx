import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Content = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const result = await response.json();
    //   setData(result);
    //   console.log(result);
    // };
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);
  // console.log(data);

  return (
    <div className="container">
      <div className="row py-5 gy-3">
        <h1>{error}</h1>
        {data.map((info, index) => (
          <div key={index} className="col-md-4">
            <ProductCard
              title={info.title}
              image={info.image}
              price={info.price}
              description={info.description}
              id={info.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
