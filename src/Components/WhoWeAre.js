import { Link } from "react-router-dom";
import SectionHead from "./SectionHead";

import slider1 from "../images/slider1.jpg";
import slider2 from "../images/online-shopping-4532460_960_720.jpg";
import slider3 from "../images/slider3.jpg";
import "./WhoWeAre.css";
import { Col, Container, Row } from "react-bootstrap";
const WhoWeAre = () => {
  return (
    <Container className="pt-5 p-5-sm p-5-md " id="con">
      <SectionHead head="Who We Are?" />
      <Row xs={1} md={1} lg={2}>
        <Col className="mb-4">
          <div className="who-we-are-fcolumn w-100 W ">
            <p className="p-3 mt-4 ">
              Excepteur sint occaecat cupidatat non proident sunt culpa qui
              officia deserunt mollit anim id est laborum
            </p>
            <ul className="mb-5">
              <Row xs={1} md={1} lg={2}xlg={2}>
                <Col>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="16"
                      height="16"
                      fill="white"
                      class="listsvg"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>{" "}
                    Good Prices
                  </li>
                  <li>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="16"
                      height="16"
                      fill="blue"
                      class="listsvg"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>{" "}
                    fast Deleviry
                  </li>
                  <li>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="16"
                      height="16"
                      fill="blue"
                      class="listsvg"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>{" "}
                    Money Back
                  </li>
                </Col>
                <Col>
                  <li>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="16"
                      height="16"
                      fill="blue"
                      class="listsvg"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>{" "}
                    Updated prices
                  </li>
                  <li>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="16"
                      height="16"
                      fill="blue"
                      class="listsvg"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>{" "}
                    Easy shopping
                  </li>
                  <li>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="16"
                      height="16"
                      fill="blue"
                      class="listsvg"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>{" "}
                    Updated Products
                  </li>
                </Col>
              </Row>
            </ul>
            <Link to="/about" id="about">
              About Us
            </Link>
          </div>
        </Col>
        <Col>
          <div
            id="carouselExampleControls"
            className="carousel slide pt-0 mt-0 "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img
                  src={slider1}
                  className="d-block w-100 img-fluid rounded-4"
                  style={{ height: "400px", objectFit: "cover" }}
                  alt="Slide1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={slider2}
                  className="d-block w-100 img-fluid rounded-4"
                  style={{ height: "400px" }}
                  alt="Slide2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={slider3}
                  className="d-block w-100 img-fluid rounded-4"
                  style={{ height: "400px" }}
                  alt="Slide3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
              id="prev"
            >
              <span className="" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                  id="prevsvg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
              id="next"
            >
              <span className="" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  fill="currentColor"
                  class="bi bi-arrow-right fs-1"
                  viewBox="0 0 16 16"
                  id="nextsvg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default WhoWeAre;
