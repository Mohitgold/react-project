import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setData(result);
      console.log(result);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row ">
        {data.map((info, index) => (
          <div key={index} className="col-md-4">
            <ProductCard
              title={info.title}
              image={info.image}
              price={info.price}
              description={info.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
