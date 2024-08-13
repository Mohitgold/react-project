import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductCard = ({
  title,
  image,
  price,
  id,
  handleCartCount,
  info,
  cartcount,
}) => {
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
