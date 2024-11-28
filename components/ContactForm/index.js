"use client";
import { Col, Container, Form, Row } from "react-bootstrap";

import Button from "../Button";
import styles from "./contact.module.scss";

const ContactForm = (props) => {
  return (
    <div className="turqoiseBg">
      <Container>
        <Form className={styles.form}>
          <Row className="justify-content-between align-items-center">
            <Col lg={5} className="text-center">
              <img
                className="img-fluid mb-3"
                src="/projectImages/bitmoji.png"
              />
              <h2>Contact Us Today for a Free Consultation!</h2>
              <p>
                We typically respond in 24-48 hours. We hope to hear from you
                soon!
              </p>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-4" controlId="fName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-4" controlId="lName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-4" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Label>Potential </Form.Label>
                  <Form.Select
                    className="mb-4"
                    aria-label="Default select example"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>
              <Form.Group className="mb-4" controlId="message">
                <Form.Label>How can we help you?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="How can we help you?"
                />
              </Form.Group>
              <Button className="blueBg whiteText" type="submit">
                Send Us a Message
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default ContactForm;
