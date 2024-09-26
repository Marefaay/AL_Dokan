import SectionHeadTwo from "./SectionHeadingTwo";
import Client from "../images/client.png";
import { Col, Container, Row } from "react-bootstrap";
import "./WhatClientSay.css";
const WhatClientSay = () => {
  return (
    <div className="what-client-say  p-5">
      <Container className="">
        <SectionHeadTwo head="What client Say" className="mt-5 " />
        <Row xs={1} md={1} lg={2}>
          <Col>
            <img src={Client} className="img-fluid mt-5" />
          </Col>
          <Col>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                <div className="carousel-item p-5 active">
                  <p className="txt ">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <h5>Mahmoud</h5>
                  {/* <img src="..." class="d-block w-100" alt="testimonal1" /> */}
                </div>
                <div className="carousel-item p-5">
                  <p className="txt ">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <h5>Mahmoud</h5>
                </div>
                <div className="carousel-item p-5">
                  <p className="txt ">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <h5>Mahmoud</h5>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
                id="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span classname="visually-hidden"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
                id="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default WhatClientSay;
