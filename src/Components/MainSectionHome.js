import {  Col, Container, Row } from "react-bootstrap";
import mainSectionHome from "../images/Online wishes list-rafiki.png";
import "./MainSectionHome.css";
import { Link } from "react-router-dom";
const MainSectionHome = () => {
  return (
    <Container className="position-relative mb-5">
      <Row
        xs={1}
        md={1}
        lg={2}
        className="justify-content-centeralign-items-center text-sm-center "
      >
        <Col>
          <div className="fCol mt-5">
            <h1 style={{ fontSize: "5rem", textTransform: "upperCase" }}>
              <span
                style={{
                  color: "var(--main-color)",
                  display: "block",
                  fontSize: "6.5rem",
                }}
                id="span-1"
              >
                Shopping
              </span>
              <span id="span-2"> Become Easy</span>
            </h1>
            <p id="txt" className="text-secondary mt-3 mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="btns">
              <Link to="/store">Store</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
        </Col>
        <Col>
          <img
            src={mainSectionHome}
            className="
          img-fluid "
          />
        </Col>
      </Row>
      <a id="down-arrow" href="#why-choose-us">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </a>
    </Container>
  );
};
export default MainSectionHome;
