import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ title, image, price, description }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>Price: ${price}</p>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
