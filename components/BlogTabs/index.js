"use client";

import BlogCards from "@/components/BlogCards";
import { Col, Row, Tab, Tabs } from "react-bootstrap";

import styles from "./blogtabs.module.scss";

function BlogTabs() {
  const testClick = () => {
    console.log("clicked");
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
            <Row>
              <Col lg={4}>
                <BlogCards />
              </Col>
              <Col lg={4}>
                <BlogCards />
              </Col>
              <Col lg={4}>
                <BlogCards />
              </Col>
            </Row>
          </div>
        </Tab>
        <Tab eventKey="how-to" title="How-To & Tutorials">
          How-To & Tutorials
        </Tab>
        <Tab eventKey="agency-life" title="Agency Life">
          Agency Life
        </Tab>
      </Tabs>
    </div>
  );
}

export default BlogTabs;
