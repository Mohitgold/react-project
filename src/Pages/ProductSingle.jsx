import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Loader from "../component/Loader";
import ModalPopup from "../component/ModalPopup";
import { ecomContext } from "../App";

const ProductSingle = () => {
  const { handleCartCount, modalShow, closeModal, cartcount } =
    useContext(ecomContext);
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
  const isInCart = cartcount.some((item) => item.id === product.id);
  return (
    <div className="container py-5 page-min-height">
      {modalShow && <ModalPopup show={modalShow} onHide={closeModal} />}
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
              variant={isInCart ? "danger" : "primary"}
              size="lg"
              active
              onClick={() => handleCartCount(product)}
            >
              {isInCart ? "Already in Cart" : "Add To Cart"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSingle;
