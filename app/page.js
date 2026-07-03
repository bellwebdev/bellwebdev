import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/Card";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCode,
  faKey,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "@/components/ButtonLink";

export default function Home() {
  return (
    <main>
      <HeroBanner
        bgColor="darkBlueBg"
        btn={true}
        btnText="Get a Free Quote"
        img="/projectImages/macbook-with-code.jpg"
        heading="Websites built by a developer who's shipped real, production software."
        subheading="Bell WebDev builds fast, custom websites and web apps for Lehigh Valley businesses — backed by 5 years of professional web engineering experience."
      />
      <Container className={`${styles.services} my-5 py-5`}>
        <Row className="align-items-center">
          <Col lg={6}>
            <img
              className="img-fluid img-rounded"
              src="/projectImages/laptop-typing-coffee.png"
            />
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <h2>Not a template. Not a page builder. A real developer.</h2>
            <p>
              Most small business websites are built on drag-and-drop
              platforms that get slow, look generic, and cost more every year
              in subscription fees. Bell WebDev is different — I write clean,
              modern code by hand, so your site loads fast, ranks better, and
              actually belongs to you.
            </p>
            <p className="mb-0">
              I bring 5 years of professional Web Engineering experience to
              every project I take on — building fast, reliable, custom-coded
              sites and applications for local businesses alongside my
              full-time engineering work.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="blueOpacityBg py-5">
        <Container className="py-5">
          <Row className="justify-content-center text-center mb-3">
            <Col lg={8}>
              <h2 className="mb-0">Why Work With Me</h2>
              <hr className="mt-3 mb-4"></hr>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="mt-4 mt-lg-0">
              <Card
                fontAwesome={<FontAwesomeIcon icon={faCode} />}
                cardHeader="Real Engineering Background"
                cardText="Not a bootcamp portfolio. 5 years building production software professionally."
              />
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <Card
                fontAwesome={<FontAwesomeIcon icon={faKey} />}
                cardHeader="You Own Everything"
                cardText="No page-builder lock-in. Your site, your code, your domain."
              />
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <Card
                fontAwesome={<FontAwesomeIcon icon={faLocationDot} />}
                cardHeader="Local & Responsive"
                cardText="Based in the Lehigh Valley. Real conversations, real turnaround times."
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5 py-5">
        <Row className="justify-content-center text-center mb-3">
          <Col lg={8}>
            <h2 className="mb-0">Services & Pricing</h2>
            <hr className="mt-3 mb-4"></hr>
            <p>
              From a $300 starter site to a fully custom web application,
              every project starts with a straightforward quote. Visit{" "}
              <a href="/services">the services page</a> for full details.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <ButtonLink href="/services" className="blueBg whiteText">
              Full Service Details{" "}
              <span className="ps-1">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </ButtonLink>
          </Col>
        </Row>
      </Container>
      <Container className="my-5 py-5">
        <Row className="justify-content-center text-center mb-4">
          <Col lg={8}>
            <h2 className="mb-0">
              Let&apos;s build something that actually works for your
              business.
            </h2>
          </Col>
        </Row>
        <ContactForm
          formHeading="Start Your Project"
          formSubhead="Tell me a bit about your project and I'll get back to you within one business day with a straightforward quote — no sales pitch, no pressure."
        />
      </Container>
    </main>
  );
}
