import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ContactForm from "@/components/ContactForm";

import { Col, Container, Row } from "react-bootstrap";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  return (
    <main>
      <HeroBanner
        bgColor="darkBlueBg"
        btn={true}
        img="/projectImages/Laptop-CSS-Code.jpg"
        heading="Currently Building"
        subheading="Real projects in active development — not a static portfolio."
      />
      <Container className={`${styles.portfolio} my-5 py-5`}>
        <Row className="justify-content-center text-center mb-4">
          <Col lg={8}>
            <p className="mb-0">
              Here&apos;s what I&apos;m actively working on right now,
              alongside my full-time engineering work.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="mt-4 mt-lg-0 d-flex">
            <div className={styles.projectCard}>
              <span className={styles.tag}>In Development</span>
              <h3>Community Networking App</h3>
              <p>
                A platform for connecting people with shared interests in
                their local area — built to help communities organize and
                stay in touch.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mt-4 mt-lg-0 d-flex">
            <div className={styles.projectCard}>
              <span className={styles.tag}>
                Early Development — Pending Partnership
              </span>
              <h3>Solar Sales Field App</h3>
              <p>
                Working with a partner to build a tool for solar sales reps
                to manage door-to-door lead tracking and scheduling in the
                field.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mt-4 mt-lg-0 d-flex">
            <div className={styles.projectCard}>
              <span className={styles.tag}>Background</span>
              <h3>5 Years of Professional Engineering</h3>
              <p>
                Before freelancing, I built and maintained production web
                software for a mid-size company for 5 years.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="my-5 py-5">
        <ContactForm
          formHeading="Have a project in mind?"
          formSubhead="Tell me a bit about your project and I'll get back to you within one business day."
        />
      </Container>
    </main>
  );
}
