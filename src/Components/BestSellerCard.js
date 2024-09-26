import { Link } from "react-router-dom";
// import banana from "../images/banana.jpg";
import "./BestSellerCard.css";
const BestSellerCard = (props) => {
  return (
    <div className="best-seller-card mt-5 mb-5 ">
      <h2 className="text-center p-2">{props.prd.name}</h2>
      <div className="img-card">
        <img src={props.prd.imgUrl} />
      </div>
      <div className="best-seller-card-body">
        <p className="text-center p-4">
          Lorem ipsum dolor amet consecte tur adipisicing elit sed done eius mod
          tempor enim ad minim veniam quis nostrud.
        </p>
      </div>

      <Link to="/store" id="buy-now-btn">Buy Now</Link>
    </div>
  );
};
export default BestSellerCard;
