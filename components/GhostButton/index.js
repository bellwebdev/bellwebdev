import styles from "./ghostbtn.module.scss";

const GhostButton = ({ children, ...props }) => {
  return (
    <a href={props.href} className={`${styles.btn} ${props.className}`}>
      {children}
    </a>
  );
};

export default GhostButton;
