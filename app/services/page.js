import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ContactForm from "@/components/ContactForm";
import CardFlip from "@/components/CardFlip";
import {
  faFolder,
  faHammer,
  faPaintRoller,
  faUniversalAccess,
  faMagnifyingGlass,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Col, Container, Row } from "react-bootstrap";
import styles from "./services.module.scss";

export default function Services() {
  const tierData = [
    {
      tierLabel: "Tier 1 — Starter Site",
      price: "Starting at $300",
      description:
        "A clean, fast, fully custom static website. Ideal for businesses that need a professional online presence — hours, services, contact info, photos — without ongoing complexity.",
      features: [
        "Up to 5 pages",
        "Mobile-responsive design",
        "Contact form",
        "Basic SEO setup (proper titles, descriptions, local keywords)",
        "Delivered in 1–2 weeks",
      ],
    },
    {
      tierLabel: "Tier 2 — Business Site",
      price: "Starting at $800",
      description:
        "For businesses that need to manage their own content, sell online, or need more custom functionality.",
      features: [
        "CMS integration (edit your own content — no coding needed)",
        "Booking/scheduling integration or basic e-commerce",
        "Advanced SEO & Google Business Profile setup",
        "Monthly Google Analytics reports",
        "Delivered in 2–4 weeks",
      ],
    },
    {
      tierLabel: "Tier 3 — Custom Web Application",
      price: "Starting at $2,500",
      description:
        "For businesses that need something built from scratch — a customer portal, internal tool, booking system, or full web app.",
      features: [
        "Custom-built to your exact workflow",
        "Database & user account functionality",
        "Ongoing support/maintenance available",
        "Timeline scoped after initial consultation",
      ],
    },
  ];

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
        "Managing content efficiently is essential for staying competitive. I integrate a CMS to give you the power to update your content. Whether you're writing blog posts or just need to update a headline, my CMS solutions are built to help you manage and organize your content effortlessly.",
      faIcon: faFolder,
    },
    {
      cardHeading: "ADA Compliance",
      cardSubHead:
        "Building inclusive websites that are accessible for all users.",
      cardBack:
        "Ensure your website is accessible to everyone, including users with disabilities. I implement WCAG (Web Content Accessibility Guidelines) best practices to make your site compliant with ADA (Americans with Disabilities Act) standards, creating a more inclusive experience for all visitors.",
      faIcon: faUniversalAccess,
    },
    {
      cardHeading: "Search Engine Optimization (SEO)",
      cardSubHead:
        "improve your search rankings and boost your online visibility.",
      cardBack:
        "I work with you to create a comprehensive strategy that aligns with your business goals, and stay up to date with the latest search engine algorithms to ensure your website stays competitive.",
      faIcon: faMagnifyingGlass,
    },
    {
      cardHeading: "Consultation & Maintenance",
      cardSubHead: "Gain insight to keep your website running smoothly.",
      cardBack:
        "Websites need ongoing care to remain functional, secure, and up-to-date. I can provide insight on how to improve or fix issues with your current site. (Maintenance is included when I develop your site)",
      faIcon: faPaintRoller,
    },
  ];
  return (
    <main className={styles.services}>
      <HeroBanner
        bgColor="darkBlueBg"
        btn={true}
        img="/projectImages/dual-monitor-mac.jpeg"
        heading="Services & Pricing"
        subheading="Custom-coded sites and web apps, scoped and quoted for your business."
      />
      <Container className={`my-5 py-5`}>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <p className="mb-0">
              Every project is different, so these are starting points, not
              fixed prices. After a quick conversation about what you need,
              I&apos;ll give you a straightforward quote — no surprise fees.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="mb-5 pb-5">
        <Row>
          {tierData.map((tier, index) => (
            <Col lg={4} className="mt-4 mt-lg-0 d-flex" key={index}>
              <div className={styles.tierCard}>
                <h3>{tier.tierLabel}</h3>
                <p className={styles.tierPrice}>{tier.price}</p>
                <p>{tier.description}</p>
                <ul className={styles.tierFeatures}>
                  {tier.features.map((feature, i) => (
                    <li key={i}>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={styles.tierCheck}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="blueOpacityBg py-4">
        <Container className="py-5">
          <Row className="justify-content-center text-center mb-4">
            <Col md={8}>
              <h2 className="text-center">What I Offer</h2>
              <hr className="mt-3 mb-4"></hr>
              <p>
                Here&apos;s a closer look at what&apos;s included across
                projects. Don&apos;t see what you&apos;re looking for? Reach
                out — I may still be able to help.
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
      <Container className="my-5 py-5">
        <ContactForm
          formHeading="Ready to build something exceptional?"
          formSubhead="Get in touch to start your project today!"
        />
      </Container>
    </main>
  );
}
