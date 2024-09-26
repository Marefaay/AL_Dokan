import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { shoppingContext } from "../context/ShoppingContext";
const StoreCard = (props) => {
  // console.log(props.card);
  const { addToCart, getProductQuantity } = useContext(shoppingContext);
  const addToCartBtn = document.getElementById("add");
  // console.log(addToCartBtn[0])
  // addToCartBtn[0].addEventListener("click", () => {
  //   console.log("Addded");
  // });

  return (
    <Card>
      <Card.Img
        src={props.card.imgUrl}
        className="img-fluid"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <span> {props.card.name}</span>
          <span className="text-secondary">${props.card.price}</span>
        </Card.Title>
        {/* {quantity == 0 ? (
          <Button className="w-100 mt-2 fs-5" onClick={addToCart}>Add To cart</Button>
        ) : (
          <div
            className="d-flex justify-content-center flex-column align-items-center"
            style={{ gap: "10px" }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ gap: "10px" }}
            >
              <Button>-</Button>
              <span className="fs-5">{quantity} In cart</span>
              <Button>+</Button>
            </div>
            <Button className="btn btn-danger w-50 ">Remove</Button>
          </div>
        )} */}
        {/* <span className="border border-primary w-100 d-block rounded pt-2 pb-2 text-center d-none">
          Added To cart
        </span> */}
        <Button
          className="w-100 mt-2 fs-5 add"
          id="add"
          onClick={(e) => {
            addToCart(props.card);
            // e.currentTarget.style.display = "none";
            // getProductQuantity(props.card.id)
          }}
        >
          Add To cart
        </Button>
      </Card.Body>
    </Card>
  );
};
export default StoreCard;
