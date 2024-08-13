import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import ModalPopup from "../component/ModalPopup";
import Button from "react-bootstrap/Button";

const Content = ({ handleCartCount, cartcount, modalShow, closeModal }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

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
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchData();
  }, []);
  // console.log(data);

  return (
    <div className="container page-min-height">
      <ModalPopup show={modalShow} onHide={closeModal} />
      <div className="row py-5 gy-3">
        {loading && <Loader />}
        {error && <h1>{error}</h1>}
        {data.map((info, index) => (
          <div key={index} className="col-md-4">
            <ProductCard
              title={info.title}
              image={info.image}
              price={info.price}
              description={info.description}
              id={info.id}
              handleCartCount={handleCartCount}
              info={info}
              cartcount={cartcount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
