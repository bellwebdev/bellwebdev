import Markdown from "react-markdown";
import { Col, Container, Row } from "react-bootstrap";
import formatDate from "@/utils/dateConversion";

import styles from "./blogpage.module.scss";

const BlogPage = ({ blogImage, date, title, subtitle, post }) => {
  const updatePostImgSrc = post.replace("img", "/img");
  return (
    <>
      {" "}
      <div className={styles.blogHero}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <p className={styles.date}>{formatDate(date)}</p>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </Col>
            <Col lg={6}>
              <img className="img-fluid" src={`/${blogImage}`} />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className={styles.blogContent}>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Markdown>{updatePostImgSrc}</Markdown>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogPage;
