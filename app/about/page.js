import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ContactForm from "@/components/ContactForm";

import { Col, Container, Row } from "react-bootstrap";
import styles from "./about.module.scss";

export default function About() {
  return (
    <main>
      <HeroBanner
        bgColor="darkBlueBg"
        btn={true}
        img="/projectImages/vibey-web-dev-image.jpg"
        heading="Who We Are"
        subheading="Let’s Build a Better Website for Your Business. Contact Us Today!"
      />
      <Container className={`${styles.about} my-5 py-5`}>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="mb-0">
              Your Trusted Partner for Web Development and Optimization
            </h2>
            <hr className="mt-3 mb-4"></hr>
            <p className="text-center">
              We believe that every website should be a powerful tool that helps
              you achieve your business goals. That&apos;s why we focus on
              providing high-quality development services, seamless user
              experiences, and measurable results.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="blueBg py-5">
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
                We&apos;re dedicated to ensuring that your website not only
                looks great but also functions flawlessly across all devices and
                platforms, while being ADA compliant and SEO optimized.
              </p>
              <h2 className="mt-5">Where We&apos;re Located</h2>
              <p>
                We are located in the Lehigh Valley in Pennsylvania, but if
                you&apos;re not local, we work with clients from all over!
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
      <Container className="my-5 py-5">
        <ContactForm
          formHeading="Build the Future of Your Business with Custom Web Solutions"
          formSubhead="Partner with Our Expert Team to Create Scalable, High-Performance Websites That Drive Results."
        />
      </Container>
    </main>
  );
}
