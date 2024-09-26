import { Col, Row } from "react-bootstrap";
import SectionHeadingTwo from "./SectionHeadingTwo";
import BestSellerCard from "./BestSellerCard";
import storeItems from "../data/items.json";

const BestSeller = () => {
  const prds = storeItems.map((item) => {
    if (item.best === "yes") {
      return (
        <Col key={item.id}> {/* Key should be on the Col element */}
          <BestSellerCard prd={item} />
        </Col>
      );
    }
    return null; // Return null for items that do not meet the condition
  });

  return (
    <div className="best-seller p-5">
      <SectionHeadingTwo head="Best Seller" />
      <Row xs={1} md={2} lg={3}>
        {prds}
      </Row>
    </div>
  );
};

export default BestSeller;