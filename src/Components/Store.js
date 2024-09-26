import { Row, Col, Container } from "react-bootstrap";
// import Col from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreCard from "./StoreCard";
import React, { useContext, useEffect, useState } from "react";
import { shoppingContext } from "../context/ShoppingContext.js";
import StoreMainSection from "./StoreMainSection.js";
// import DotLoader from "react-spinners/DotLoader";
import Overlay from "./Overlay.js"
const Store = () => {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);
  // console.log(storeItems);
  // const { addToCart } = useContext(shoppingContext);
  // console.log(value)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if(loading){
    return <Overlay/>
  }
  return (
    <>
    {/* <Overlay/> */}
      <StoreMainSection />
      {/* <h1>Store</h1> */}
      <Container className="mt-5 pt-5">
        <Row xs={1} md={2} lg={3} className="g-5 mt-1">
          {storeItems.map((item) => {
            // console.log(item)
            return (
              <Col key={item.id}>
                <StoreCard card={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default Store;
