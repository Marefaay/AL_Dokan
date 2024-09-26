import { Col, Container, Row } from "react-bootstrap";
import SectionHead from "./SectionHead";
import contact from "../images/contavt us.png";
import "./ContactUs.css";
import { useState } from "react";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [nameErrors, setNameErrors] = useState(null);
  const [emailErrors, setEmailErrors] = useState(null);
  const [notesErrors, setNotesErrors] = useState(null);
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  ///handle username
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);

    //less chararters
    if (value.length < 5) {
      setNameErrors("Name must Be more than 5 Characters");
    } else {
      setNameErrors(null);
    }
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (gmailRegex.test(value) == false) {
      setEmailErrors('Email Must Be As "name@gmail.com"');
    } else {
      setEmailErrors(null);
    }
  };
  const handleNotesChange = (event) => {
    const value = event.target.value;
    setNotes(value);
    if (value.length < 20) {
      setNotesErrors("Notes Must Be Gretaer Than 20 Character");
    } else {
      setNotesErrors(null);
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name.length == 0) {
      setNameErrors("Name Should't Be Empty");
    }
    if (email.length == 0) {
      setEmailErrors("Email Should't Be Empty");
    }
    if (notes.length == 0) {
      setNotesErrors("Notes Should't Be Empty");
    }
    if (
      gmailRegex.test(email) == true &&
      name.length > 5 &&
      notes.length > 20
    ) {
      event.currentTarget.submit();
    }
  };
  console.log(nameErrors);
  return (
    <div className="contact-us">
      <Container>
        <SectionHead head="Contact Us" />
        <Row xs={1} md={1} lg={2}>
          <Col>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label for="name">UserName</label>
                <br />
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  // required
                  onChange={handleNameChange}
                />

                {nameErrors != null ? (
                  <div className="d-flex justify-content-between w-75">
                    <span style={{ color: "red" }}>{nameErrors} </span>
                    <span style={{ fontSize: "18px" }}>{name.length}</span>
                  </div>
                ) : null}
              </div>

              <div>
                <label for="mail">Email</label>
                <br />
                <input
                  id="mail"
                  type="e-mail"
                  placeholder="Enter Your Email"
                  // required
                  onChange={handleEmailChange}
                />

                <br />
                {emailErrors != null ? (
                  <span style={{ color: "red" }}>{emailErrors}</span>
                ) : null}
              </div>

              <div>
                <label for="notes">Notes</label>
                <br />
                <textarea
                  rows="3"
                  id="notes"
                  placeholder="Enter Your Notes"
                  // required
                  onChange={handleNotesChange}
                ></textarea>

                {notesErrors != null ? (
                  <div className="d-flex justify-content-between w-75">
                    <span style={{ color: "red" }}>{notesErrors} </span>
                    <span style={{ fontSize: "18px" }}>{notes.length}</span>
                  </div>
                ) : null}
              </div>

              <div>
                <button id="submit">Send </button>
              </div>
            </form>
          </Col>
          <Col>
            <div className="contact-fcolunm">
              <img src={contact} className="img-fluid"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ContactUs;
