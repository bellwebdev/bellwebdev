import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ContactForm from "@/components/ContactForm";
import CardFlip from "@/components/CardFlip";
import {
  faFolder,
  faHammer,
  faPaintRoller,
  faUniversalAccess,
  faMagnifyingGlass,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

import { Col, Container, Row } from "react-bootstrap";
import styles from "./services.module.scss";

export default function Services() {
  const cardFlipData = [
    {
      cardHeading: "Custom Built Websites",
      cardSubHead:
        "Offering more flexibility than your average drag and drop editors.",
      cardBack:
        "A custom-built website offers greater flexibility and scalability, allowing for tailored design, functionality, and performance that align with specific business goals. Unlike drag-and-drop sites, which often limit customization, a custom site ensures better control over user experience, security, and long-term growth.",
      faIcon: faHammer,
    },
    {
      cardHeading: "Content Management System",
      cardSubHead: "Giving you control over your content.",
      cardBack:
        "Managing content efficiently is essential for staying competitive. We integrate a CMS to give you the power to update your content. Whether you're writing blog posts or just need to update a headline, our CMS solutions are built to help you manage and organize your content effortlessly.",
      faIcon: faFolder,
    },
    {
      cardHeading: "ADA Compliance",
      cardSubHead:
        "Building inclusive websites that are accessible for all users.",
      cardBack:
        "Ensure your website is accessible to everyone, including users with disabilities. We implement WCAG (Web Content Accessibility Guidelines) best practices to make your site compliant with ADA (Americans with Disabilities Act) standards, creating a more inclusive experience for all visitors.",
      faIcon: faUniversalAccess,
    },
    {
      cardHeading: "Search Engine Optimization (SEO)",
      cardSubHead:
        "improve your search rankings and boost your online visibility.",
      cardBack:
        "We work with you to create a comprehensive strategy that aligns with your business goals. We stay up to date with the latest search engine algorithms to ensure your website stays competitive.",
      faIcon: faMagnifyingGlass,
    },
    {
      cardHeading: "Pricing",
      cardSubHead: "Flexible pricing suited to your business needs.",
      cardBack:
        "We tailor our affordable pricing packages based on what you want. We offer lump sum pricing or monthly subscription pricing to essentially have a web developer in your pocket. Send a message to get a quote!",
      faIcon: faDollarSign,
    },
    {
      cardHeading: "Consultation & Maintenance",
      cardSubHead: "Gain insight to keep your website running smoothly.",
      cardBack:
        "Websites need ongoing care to remain functional, secure, and up-to-date. We can provide insight on how to improve or fix issues with your current site. (Maintenance is included when we develop your site)",
      faIcon: faPaintRoller,
    },
  ];
  return (
    <main className={styles.services}>
      <HeroBanner
        bgColor="darkBlueBg"
        btn={true}
        img="/projectImages/macbook-with-code.jpg"
        heading="Our Web Development Services"
        subheading="Precision, Performance, and Accessibility"
      />
      <Container className={`my-5`}>
        <Row className="justify-content-center text-center">
          <Col lg={6}>
            <h2 className="mb-0">Crafted for Your Business.</h2>
            <hr className="mt-3 mb-4"></hr>
            <p>
              We build custom websites, integrated with a content management
              system, and provide end-to-end digital services—designed to grow
              your business and enhance user experience.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="blueOpacityBg">
        <Container className="py-5">
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h2 className="text-center">What We Offer</h2>
              <hr className="mt-3 mb-4"></hr>
              <p>
                Here are a variety of services we offer. We are dedicated to
                improving our service, so please reach out to us if you
                don&apos;t see what you&apos;re looking for. We may still be
                able to do it for you!
              </p>
            </Col>
          </Row>

          <Row className="align-items-center">
            {cardFlipData.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <CardFlip
                  faIcon={item.faIcon}
                  cardHeading={item.cardHeading}
                  cardSubHead={item.cardSubHead}
                  cardBack={item.cardBack}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Container className="my-5">
        <ContactForm />
      </Container>
    </main>
  );
}
