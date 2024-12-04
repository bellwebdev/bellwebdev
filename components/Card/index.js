import styles from "./card.module.scss";

const Card = (props) => {
  return (
    <div className={`${styles.card}`}>
      <div className={styles.iconBg}>
        {props.imgSrc && <img src={props.imgSrc} />}
        {props.fontAwesome && props.fontAwesome}
      </div>
      <h3>{props.cardHeader}</h3>
      <p>{props.cardText}</p>
    </div>
  );
};

export default Card;
