import styles from "./btn.module.scss";

const Button = ({ children, ...props }) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.btn} ${props.className}`}
      disabled={props.disabled}
    >
      {children}
    </button>
  );
};

export default Button;
