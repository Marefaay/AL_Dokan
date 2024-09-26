import { Col, Container, Row } from "react-bootstrap";
import Goalimg from "../images/OIP (9).jpeg";
import "./OurGoalAbout.css";
import SectionHead from "./SectionHead";
import { Link } from "react-router-dom";
import SectionHeadTwo from "./SectionHeadingTwo";
const OurGoalAbout = () => {
  return (
    <div className="our-goal-about mt-5 text-center ">
      <Container>
      <SectionHeadTwo head="Our Goal" className="mt-5 pt-5" />
              <p className="pt-4 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                eiusmod tempor didunt laboris nisi ut aliquip ex commodo
                consequat. duis aute irure dolor in reprehenderivoluptate velit
                esse cillum dolore fugiat nulla pariatur.Excepteur sint ocaecat
                cupidatat noproident sunt culpa qui officia deserunt mollit anim
                id est laborum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                eiusmod tempor didunt laboris nisi ut aliquip ex commodo
                consequat. duis aute irure dolor in reprehenderivoluptate velit
                esse cillum dolore fugiat nulla pariatur.Excepteur sint ocaecat
                cupidatat noproident sunt culpa qui officia deserunt mollit anim
                id est laborum.
              </p>
              {/* <Link to="/store" id="store">
                Store
              </Link> */}
        {/* <Row xs={1} md={1} lg={2}>
          <Col className="pb-0 mb-0">
            <img src={Goalimg} className="img-fluid rounded-3 mt-5 goal-img mb-0 p-0" />
          </Col>
          <Col>
            <div className="col2 ">
              <SectionHead head="Our Goal" />
              <p className="pt-4 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                eiusmod tempor didunt laboris nisi ut aliquip ex commodo
                consequat. duis aute irure dolor in reprehenderivoluptate velit
                esse cillum dolore fugiat nulla pariatur.Excepteur sint ocaecat
                cupidatat noproident sunt culpa qui officia deserunt mollit anim
                id est laborum.
              </p>
              <Link to="/store" id="store">
                Store
              </Link>
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};
export default OurGoalAbout;
