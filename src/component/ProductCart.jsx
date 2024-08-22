import React from "react";
import Image from "react-bootstrap/Image";
import { MdDelete } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ProductCart = ({ id, cardItems, cartRemove }) => {
  return (
    <div className="cart-product card mb-3" id={`cart-${id}`}>
      <div className="row g-0">
        <div className="col-auto">
          <Link to={`/single-product/${id}`}>
            <Image
              src={cardItems.image}
              thumbnail
              className="img-fluid rounded-start cart-product__img"
            />
          </Link>
        </div>
        <div className="col">
          <div className="card-body">
            <div className="row">
              <div className="col-auto cart-product__info">
                <h5 className="card-title">
                  <Link to={`/single-product/${id}`}>{cardItems.title}</Link>
                </h5>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Cagegory: {cardItems.category}
                  </small>
                </p>
              </div>
              <div className="col-auto ms-auto cart-product__price d-flex align-items-center">
                <h5 className="my-3">Price: ${cardItems.price}</h5>
                <Button
                  variant="danger"
                  className="cart-product__remove"
                  onClick={() => cartRemove(id)}
                >
                  <MdDelete />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
