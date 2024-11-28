import styles from "./tile.module.scss";

const Tile = (props) => {
  return (
    <div className={`${styles.tile}`}>
      <img src={props.imgSrc} />
      <span>{props.cardText}</span>
    </div>
  );
};

export default Tile;
