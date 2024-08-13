import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { IoMdCart } from "react-icons/io";

const Header = ({ cartcount }) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Logo
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/service">
              Srvice
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Blog
            </Nav.Link>
            <Button
              as={NavLink}
              to="/cart"
              variant="success"
              className="navbar-nav__cart"
            >
              <IoMdCart className="me-2" />
              <Badge bg="info">{cartcount.length}</Badge>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
