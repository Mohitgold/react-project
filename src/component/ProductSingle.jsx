import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ProductSingle = () => {
  const { id } = useParams();
  //   console.log(id);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await res.json();
      setProduct(result);
      //   console.log(result);
    };
    fetchData();
  }, []);
  console.log(product);
  return (
    <div className="container py-5">
      <div className="row single-product">
        <div className="col-md-4 single-product__img">
          <img src={product.image} />
        </div>
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>Price: ${product.price}</h3>
          <h5 className="mb-4">Product Cagegory: ${product.category}</h5>
          <Button variant="primary" size="lg" active>
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
