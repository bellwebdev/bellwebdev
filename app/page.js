import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/Card";
import Tile from "@/components/Tile";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <HeroBanner
        bgColor="darkBlueBg"
        btn={true}
        img="/projectImages/macbook-with-code.jpg"
      />
      <Container className={`${styles.services} my-5`}>
        <Row className="justify-content-center text-center">
          <Col lg={6}>
            <h2 className="mb-0">Our Services</h2>
            <hr className="mt-1 mb-2"></hr>
            <p className={styles.subhead}>
              Services specifically tailored to your needs
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
      <Container className="my-5">
        <Row>
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
                  cardText="Lorem ipsum dolor sit amet."
                  imgSrc="/projectImages/check_circle.svg"
                />
              </Col>
              <Col xs={12} className="mt-4">
                <Tile
                  cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                  imgSrc="/projectImages/check_circle.svg"
                />
              </Col>
              <Col xs={12} className="mt-4">
                <Tile
                  cardText="Lorem ipsum dolor sit amet."
                  imgSrc="/projectImages/check_circle.svg"
                />
              </Col>
              <Col xs={12} className="mt-4">
                <Tile
                  cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                  imgSrc="/projectImages/check_circle.svg"
                />
              </Col>
              <Col xs={12} className="mt-4">
                <Tile
                  cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                  imgSrc="/projectImages/check_circle.svg"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ContactForm />
    </main>
  );
}
