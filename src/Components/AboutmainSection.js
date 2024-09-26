import { Link } from "react-router-dom";
import "./AboutMainSection.css";
const AboutMainSection = () => {
  return (
    <div className="about-main-section">
      <h1>About</h1>
      <span>
        <Link to="/">Home</Link>/about
      </span>
      <svg
        className="mb-5 d-sm-none d-md-none d-lg-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        id="curve"
      >
        <path
          fill="#0d6efd"
          fill-opacity="1"
          d="M0,96L120,112C240,128,480,160,720,154.7C960,149,1200,107,1320,85.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default AboutMainSection;
