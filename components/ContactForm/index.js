"use client";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

import Button from "../Button";
import Loader from "../Loader";
import styles from "./contact.module.scss";

import { sendContactForm, sendData } from "@/lib/api";

const initValues = {
  fname: "",
  lname: "",
  email: "",
  company: "",
  message: "",
};

const initState = { values: initValues };

const ContactForm = (props) => {
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [state, setState] = useState(initState);
  const { values } = state;
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const onSubmit = async (event) => {
    const form = event.currentTarget;

    // event.preventDefault();

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity()) {
      event.preventDefault();
      setLoading(true);

      setState((prev) => ({
        ...prev,
      }));
      try {
        await sendData(values);
      } catch (error) {
        console.log(error);
      }
      try {
        await sendContactForm(values);
        setSuccess(true);
      } catch (error) {
        setErrorMsg(true);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={`turqoiseBg ${styles.bRadius}`} id="contactForm">
      <Container>
        {!success && !errorMsg && (
          <Form
            className={styles.form}
            noValidate
            validated={validated}
            onSubmit={onSubmit}
          >
            <Row className="justify-content-between align-items-center px-4">
              <Col lg={5} className="text-center">
                <img
                  className="img-fluid mb-3"
                  src="/projectImages/bitmoji.png"
                />
                <h2>{props.formHeading}</h2>
                <p>{props.formSubhead}</p>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={6}>
                    <Form.Group className="mb-4" controlId="fname">
                      <Form.Label>First Name *</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        name="fname"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-4" controlId="lname">
                      <Form.Label>Last Name *</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        name="lname"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-4" controlId="email">
                      <Form.Label>Email address *</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-4" controlId="company">
                      <Form.Label>Company or Business</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter company name"
                        name="company"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>How can we help you? *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="How can we help you?"
                    name="message"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button
                  className="blueBg whiteText"
                  type="submit"
                  disabled={loading}
                >
                  Send Us a Message{" "}
                  <span className={`ps-2 ${!loading && "visually-hidden"}`}>
                    <Loader />
                  </span>
                </Button>
              </Col>
            </Row>
          </Form>
        )}
        {success && (
          <Row className="justify-content-center align-items-center py-5 text-center whiteText">
            <Col className="py-5 my-5">
              <h2>Thank You for You Submission!</h2>
              <p>We will reach out to you within the next 24-48 hours.</p>
            </Col>
          </Row>
        )}
        {errorMsg && (
          <Row className="justify-content-center align-items-center py-5 text-center whiteText">
            <Col className="py-5 my-5">
              <h2>
                Sorry about that. Your message cannot be sent at this time.
              </h2>
              <p>Please try again later or send us a DM on social media.</p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ContactForm;
