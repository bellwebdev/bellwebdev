import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ContactForm from "@/components/ContactForm";
import BlogTabs from "@/components/BlogTabs";

import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import styles from "./blog.module.scss";

export default function Blog() {
  return (
    <main>
      <HeroBanner
        bgColor="darkBlueBg"
        btn={true}
        img="/projectImages/blog-home.jpg"
        heading="Insights & Inspiration from the Frontlines of Web Development"
        subheading="Explore expert tips, project highlights, and agency updates designed to help you build smarter, faster, and better digital experiences."
      />
      <Container className={`${styles.blogHome} my-5 py-5`}>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="text-center">
              Behind-the-scenes looks at how our team solves real-world web
              challenges.
            </h2>
            <hr className="mb-5"></hr>
          </Col>
          <BlogTabs />
        </Row>
      </Container>
      <Container className="my-5 py-5">
        <ContactForm
          formHeading="Build the Future of Your Business with Custom Web Solutions"
          formSubhead="Partner with Our Expert Team to Create Scalable, High-Performance Websites That Drive Results."
        />
      </Container>
    </main>
  );
}
