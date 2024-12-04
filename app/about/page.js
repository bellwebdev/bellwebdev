import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/Card";
import Tile from "@/components/Tile";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./about.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main>
      <HeroBanner
        bgColor="darkBlueBg"
        btn={true}
        img="/projectImages/macbook-with-code.jpg"
        heading="Who We Are"
        subheading="Let’s Build a Better Website for Your Business. Contact Us Today!"
      />
      <Container className={`${styles.about} my-5`}>
        <Row className="justify-content-center text-center">
          <Col lg={6}>
            <h2 className="mb-0">
              Your Trusted Partner for Web Development and Optimization
            </h2>
            <hr className="mt-3 mb-4"></hr>
            <p className="text-center">
              We believe that every website should be a powerful tool that helps
              you achieve your business goals. That’s why we focus on providing
              high-quality development services, seamless user experiences, and
              measurable results.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="blueBg">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6} className="whiteText">
              <h2>What We Stand For</h2>
              <p>
                We pride ourselves on our attention to detail and our commitment
                to customer satisfaction. We offer tailored solutions that fit
                your needs and budget.
              </p>
              <p>
                We’re dedicated to ensuring that your website not only looks
                great but also functions flawlessly across all devices and
                platforms, while being ADA compliant and SEO optimized.
              </p>
              <h2 className="mt-5">Where We're Located</h2>
              <p>
                We are located in the Lehigh Valley in Pennsylvania, but if
                you're not local, we work with clients from all over!
              </p>
              <p>
                If you are in the area and are interested in our services, feel
                free to fill out the contact form and request an in person
                meeting.
              </p>
            </Col>
            <Col lg={6}>
              <img
                className="img-fluid img-rounded"
                src="./projectImages/women-looking-at-laptop.jpeg"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5">
        <ContactForm />
      </Container>
    </main>
  );
}
