import { Col, Container, Row } from "react-bootstrap";
import "./WhyChooseUs.css";
import SectionHead from "./SectionHead";
const WhyChooseUs = () => {
  return (
    <Container className="mt-5 pt-5 p-5" id="why-choose-us">
      <SectionHead head="Why Choose US?" />

      <Row className="mt-5 mb-5" xs={1} md={1} lg={2}>
        <Col>
          {/* <div className="f-colunm text-center">
            <svg
              style={{ width: "50px", textAlign: "center" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              fill="white"
            >
              <path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64l241.9 0c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5 608 384c0 35.3-28.7 64-64 64l-241.9 0c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5 32 128c0-35.3 28.7-64 64-64zm64 64l-64 0 0 64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64l64 0 0-64zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
            </svg>
            <h5 className="pt-3 pb-3">Money Back</h5>
          </div> */}
          <div className="f-colunm w-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              eiusmod tempor incididunt laboris nisi ut aliquip ex ea commodo
              consequat.
              <br></br>
              <br></br>
              Duis aute irure dolor in reprehenderit voluptate velit esse cillum
              dolore fugiat nulla pariatur.Excepteur sint ocaecat cupidatat non
              proident sunt culpa qui officia deserunt mollit anim id est
              laborum. sed perspiciatis unde omnisiste natus error sit
              voluptatem accusantium.doloremque ladantium totam rem aperieaque
              ipsa quae ab illo inventore.veritatis. et quasi architecto beatae
              vitae dicta sunt explicabo.
            </p>
          </div>
        </Col>
        <Col>
          {/* <div className="s-colunm text-center">
            <svg
              style={{ width: "50px", textAlign: "center" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="white"
            >
              <path d="M312 24l0 10.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3s0 0 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8l0 10.6c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-11.4c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2L264 24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z" />
            </svg>
            <h5 className="pt-3 pb-3">Cheap Prices</h5>
          </div> */}
          <div className="s-colunm ps-lg-5 ps-md-0 " >
            <h3>Branding</h3>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                80%
              </div>
            </div>

            <br></br>
            <h3>Sales</h3>
            <div class="progress">
              <div
                id="sales"
                class="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <br></br>
            <h3>Customers</h3>
            <div class="progress">
              <div
                id="customers"
                class="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
            <br></br>
            <h3>Security</h3>
            <div class="progress">
              <div
                id="security"
                class="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                95%
              </div>
            </div>
          </div>
        </Col>
        {/* <Col> */}
        {/* <div className="t-colunm text-center">
            <svg
              style={{ width: "50px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              fill="white"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3l-91.4 0zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7l0-187.8L591.4 312z" />
            </svg>
            <h5 className="pt-3 pb-3">User Data Security</h5>
          </div> */}
        {/* </Col> */}
      </Row>
    </Container>
  );
};
export default WhyChooseUs;
