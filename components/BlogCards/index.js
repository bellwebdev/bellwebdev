import formatDate from "@/utils/dateConversion";

import GhostButton from "../GhostButton";

import styles from "./blogcard.module.scss";

const BlogCards = ({ img, date, title, subtitle, url }) => {
  return (
    <div className={styles.blogCard}>
      <img className="img-fluid mb-3" src={`/${img}`} />
      <div className={`px-4 ${styles.cardBody}`}>
        <div>
          <p className={styles.date}>{formatDate(date)}</p>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <GhostButton href={`/blog/${url}`} className="mb-3">
          Read More
        </GhostButton>
      </div>
    </div>
  );
};

export default BlogCards;
