import { useContext } from "react";
import { shoppingContext } from "../context/ShoppingContext";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cart.css";
const Cart = () => {
  const { products, removeFromCart } = useContext(shoppingContext);
  console.log(products.items);
  if (products.items.length == 0) {
    return <h1 className="text-center mt-5 pt-5">No Items Added To Card</h1>;
  }
  const tableCart = products.items.map((product) => {
    return (
      <tr className="fs-4 ">
        <td>
          <img
            src={product.imgUrl}
            style={{ width: "100px", height: "80px", objectFit: "cover" }}
          />
        </td>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td>{product.quatnity}</td>
        <td>
          <Button onClick={(product) => removeFromCart(product)}>Delete</Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="main-section-cart">
        <h1>Cart</h1>
        <span>
          <Link to="/">Home</Link>/cart
        </span>
      </div>
      <Container>
        <div className="tb">
          <table className="border   w-100 table table-hover text-center mt-5 ">
            <thead>
              <tr className="border table-light fs-5">
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delete</th>
              </tr>
              {tableCart}

              <tr className="border table-light">
                <td colSpan="5" className="fs-4">
                  <b>Total Price: </b> ${products.totalPrice}
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </Container>
    </>
  );
};
export default Cart;
