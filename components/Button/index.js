import styles from "./btn.module.scss";

const Button = ({ children, ...props }) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.btn} ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
