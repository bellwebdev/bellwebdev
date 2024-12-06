"use client";
import { useState } from "react";
import styles from "./flip.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFlip = (props) => {
  const [classlist, setClasslist] = useState(styles.card);

  const flip = () => {
    if (classlist == styles.flipThatCard) {
      setClasslist("");
    } else {
      setClasslist(styles.flipThatCard);
    }
  };

  return (
    <div className={styles.flipCard} onClick={flip}>
      <div className={styles.flipCardInner + " " + classlist}>
        <div className={styles.flipCardFront}>
          <div>
            <div className={styles.cardTopIcon}>
              <FontAwesomeIcon icon={props.faIcon} />
            </div>
            <h3>{props.cardHeading}</h3>
            <p>{props.cardSubHead}</p>
          </div>
          <div>
            <a role="button">Flip to Learn More</a>
          </div>
        </div>
        <div className={styles.flipCardBack}>
          <p className="mb-0">{props.cardBack}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
