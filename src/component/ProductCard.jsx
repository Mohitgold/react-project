import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ecomContext } from "../App";

const ProductCard = ({ image, id, title, price, info }) => {
  const { handleCartCount, cartcount } = useContext(ecomContext);
  const isInCart = cartcount.some((item) => item.id === id);
  return (
    <Card className="product-card p-2">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {/* <Link to={`/blog/${items.id}`}>{items.title}</Link> */}
          <Link to={`/single-product/${id}`}>{title}</Link>
        </Card.Title>
        {/* <Card.Text>{description}</Card.Text> */}
        <p>Price: ${price}</p>
        <Button
          variant={isInCart ? "danger" : "primary"}
          onClick={() => handleCartCount(info)}
        >
          {isInCart ? "Already in Cart" : "Add To Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
