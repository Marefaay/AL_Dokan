import { Link } from "react-router-dom";
import "./StoreMainSection.css";
const StoreMainSection = () => {
  return (
    <div className="store-main-section">
      <h1>Store</h1>
      <span>
        <Link to="/">Home</Link>/store
      </span>
      <svg id="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0d6efd"
          fill-opacity="1"
          d="M0,64L40,96C80,128,160,192,240,218.7C320,245,400,235,480,208C560,181,640,139,720,144C800,149,880,203,960,202.7C1040,203,1120,149,1200,144C1280,139,1360,181,1400,202.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};
export default StoreMainSection;
