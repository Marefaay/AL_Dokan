import { Col, Container, Row } from "react-bootstrap";
import SectionHeadTwo from "./SectionHeadingTwo";
import "./WhoWeAreAbout.css";
import SectionHead from "./SectionHead";
import { Link } from "react-router-dom";
const WhoWeAreAbout = () => {
  return (
    <div className="who-we-are-about p-5">
      <Container>
        <div className=" inner-who-we-are-about p-3 ps-4">
          {/* <SectionHeadTwo head="Who We Are?" /> */}
          <SectionHead head="Who We Are?" />
          <p className="pt-3 ">
            Excepteur sint occaecat cupidatat non proident sunt culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <ul className="mb-5">
            <Row xs={1} md={1} lg={2} xlg={2}>
              <Col>
                <li>
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
          <Link to="/store" id="store">
              Store
            </Link>
          {/* <div className="inner-who-we-are-about"></div> */}
        </div>
      </Container>
    </div>
  );
};
export default WhoWeAreAbout;
