import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Tile from "@/components/Tile";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main>
      <HeroBanner
        bgColor="darkBlueBg"
        btn={true}
        img="/projectImages/macbook-with-code.jpg"
        heading="Elevate Your Online Presence"
        subheading="Contact Us Today to Get Started"
      />
      <Container className={`${styles.services} my-5`}>
        <Row className="justify-content-center text-center mb-3">
          <Col lg={8}>
            <h2 className="mb-0">Our Services</h2>
            <hr className="mt-3 mb-4"></hr>
            <p>
              Specifically tailored to your needs. Visit{" "}
              <a href="/services">our services</a> page for more details!
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="mt-4 mt-lg-0">
            <Card
              imgSrc="/projectImages/gg_website.svg"
              cardHeader="Custom Coded Websites"
              cardText="Quality sites built just for you"
            />
          </Col>
          <Col lg={4} className="mt-4 mt-lg-0">
            <Card
              imgSrc="/projectImages/ri_seo-fill.svg "
              cardHeader="Integrated CMS"
              cardText="Content management system gives you the power to update your content"
            />
          </Col>
          <Col lg={4} className="mt-4 mt-lg-0">
            <Card
              imgSrc="/projectImages/mdi_bug-outline.svg"
              cardHeader="Bug Fixes & Consultation"
              cardText="Start small by having us help clean up your current site!"
            />
          </Col>
        </Row>
      </Container>
      <div className="blueOpacityBg">
        <Container className="py-5">
          <Row className="align-items-center justify-content-between">
            <Col md={4}>
              <img
                className="img-fluid img-rounded"
                src="./projectImages/apple-products.jpeg"
              />
            </Col>
            <Col md={7}>
              <h2 className="mb-4">Why Choose Us?</h2>
              <p>
                When you choose BellWebDev, you’re partnering with a team of
                passionate developers dedicated to your success. Our hands-on
                approach, attention to detail, and focus on delivering value
                ensures that your website isn’t just functional—it’s
                exceptional.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5">
        <Row className="align-items-center">
          <Col lg={6} className={styles.stepImg}>
            <div className="blueBg py-5 ps-4 mx-auto mx-lg-0 d-flex h-100">
              <img
                className="img-fluid"
                src="/projectImages/laptop-typing-coffee.png"
              />
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <h2>What we offer: </h2>
            <Row>
              <Col xs={12} className="mt-4">
                <Tile
                  cardText="Tailored Solutions for Every Client"
                  imgSrc="/projectImages/check_circle.svg"
                />
              </Col>
              <Col xs={12} className="mt-4">
                <Tile
                  cardText="Transparent Communication & Project Management"
                  imgSrc="/projectImages/check_circle.svg"
                />
              </Col>
              <Col xs={12} className="mt-4">
                <Tile
                  cardText="Timely Deliveries with High-Quality Standards"
                  imgSrc="/projectImages/check_circle.svg"
                />
              </Col>
              <Col xs={12} className="mt-4">
                <Tile
                  cardText="A Full Range of Web Services Under One Roof"
                  imgSrc="/projectImages/check_circle.svg"
                />
              </Col>
              <Col xs={12} className="mt-4">
                <Button className={`w-100 p-3 blueBg whiteText`}>
                  Full Service Details{" "}
                  <span className="ps-1">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <ContactForm />
      </Container>
    </main>
  );
}
