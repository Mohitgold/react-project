import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Loader from "../component/Loader";

const ProductSingle = ({ handleCartCount }) => {
  const { id } = useParams();
  //   console.log(id);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await res.json();
      setProduct(result);
      setLoading(false);
      //   console.log(result);
    };
    fetchData();
  }, []);
  // console.log(product);
  return (
    <div className="container py-5 page-min-height">
      {/* // show loader // */}
      {loading ? (
        <Loader />
      ) : (
        <div className="row single-product">
          <div className="col-md-4 single-product__img">
            <img className="shadow" src={product.image} />
          </div>
          <div className="col-md-7">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>
              <b>Price:</b> ${product.price}
            </h3>
            <h5 className="mb-4">
              <b>Product Cagegory:</b> ${product.category}
            </h5>
            <Button
              variant="primary"
              size="lg"
              active
              onClick={() => handleCartCount(product)}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSingle;
