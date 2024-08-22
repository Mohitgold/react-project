import React, { useContext } from "react";
import ProductCart from "../component/ProductCart";
import { ecomContext } from "../App";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartcount, setCartCount } = useContext(ecomContext);
  const cartRemove = (id) => {
    // Filter out the item with the specified id
    const updatedCart = cartcount.filter((item) => item.id !== id);

    // Update the cart state
    setCartCount(updatedCart);
  };
  return (
    <div className="container page-min-height">
      {cartcount.length > 0 ? (
        <div className="row">
          <h2 className="py-4">Cart Page</h2>
          {cartcount.map((cardItems) => {
            return (
              <ProductCart
                key={cardItems.id}
                id={cardItems.id}
                cardItems={cardItems}
                cartRemove={cartRemove}
              />
            );
          })}
        </div>
      ) : (
        <div className="row pt-5">
          <div className="col">
            <Card className="text-center">
              <Card.Header>Cart Empty</Card.Header>
              <Card.Body>
                <Card.Title>
                  Your cart is empty, Please select Product.
                </Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Link to="/">
                  <Button variant="primary">Shop Now</Button>
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted">
                Click on Shop button
              </Card.Footer>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
