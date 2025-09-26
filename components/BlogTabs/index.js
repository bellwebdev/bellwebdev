"use client";
import { attributes } from "../../content/blog.md";
import BlogCards from "@/components/BlogCards";
import { Col, Row, Tab, Tabs } from "react-bootstrap";

import styles from "./blogtabs.module.scss";

function BlogTabs() {
  const testClick = () => {
    console.log("clicked");
  };

  const posts = attributes.blogPosts;
  const featured = posts.filter((post) => post.featured);
  const howTo = posts.filter((post) => post.category === "how-to");
  const agencyLife = posts.filter((post) => post.category === "agency-life");

  const returnCards = (category) => {
    return category.map((post, index) => {
      return (
        <Col lg={4} key={index + 1}>
          <BlogCards
            key={index + 2}
            title={post.title}
            img={post.blogImage}
            subtitle={post.subtitle}
            date={post.date}
            url={post.url}
          />
        </Col>
      );
    });
  };

  return (
    <div className="custom-tabs">
      <Tabs
        onClick={testClick}
        defaultActiveKey="featured"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="featured" title="Featured">
          <div className={styles.tabContainer}>
            <Row key={Math.random(10)}>{returnCards(featured)}</Row>
          </div>
        </Tab>
        <Tab eventKey="how-to" title="How-To & Tutorials">
          <div className={styles.tabContainer}>
            <Row key={Math.random(10)}>{returnCards(howTo)}</Row>
          </div>
        </Tab>
        <Tab eventKey="agency-life" title="Agency Life">
          <div className={styles.tabContainer}>
            <Row key={Math.random(10)}>{returnCards(agencyLife)}</Row>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default BlogTabs;
