import GhostButton from "../GhostButton";

import styles from "./blogcard.module.scss";

const BlogCards = ({ children, ...props }) => {
  return (
    <div className={styles.blogCard}>
      <img
        className="img-fluid mb-3"
        src="/projectImages/macbook-with-code.jpg"
      />
      <div className="px-4">
        <p className={styles.date}>February 24, 2025</p>
        <h3>Blog Title</h3>
        <p>Blog Subtitle</p>
        <GhostButton className="mb-3">Read More</GhostButton>
      </div>
    </div>
  );
};

export default BlogCards;
