import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { shoppingContext } from "../context/ShoppingContext";
const Navbar = () => {
  const { products } = useContext(shoppingContext);
  return (
    <NavbarBs className="shadow-sm bg-white " bg="light" sticky="top">
      <Container className=" align-items-center">
        <Link to="/" className="text-decoration-none text-dark fs-4">AL_Dokan</Link>
        <Nav>
          <Nav.Link to="/" as={NavLink} className="fs-5">
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink} className="fs-5">
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} className="fs-5">
            About
          </Nav.Link>
        </Nav>
        <Nav.Link to="/cart" as={NavLink}>
          <Button
            id="cart"
            variant="outline-primary "
            className="rounded-circle"
            style={{ width: "3rem", height: "3rem", position: "relative" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                width: "1.5rem",
                height: "1.5rem",
                transform: "translate(25%,25%)",
              }}
              className="bg-danger rounded-circle text-white"
            >
              {products.itemsCount}
            </div>
          </Button>
        </Nav.Link>
      </Container>
    </NavbarBs>
  );
};
export default Navbar;
