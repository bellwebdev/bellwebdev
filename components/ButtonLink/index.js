import styles from "./btnLink.module.scss";

const ButtonLink = ({ children, ...props }) => {
  return (
    <a href={props.href} className={`${styles.btn} ${props.className}`}>
      {children}
    </a>
  );
};

export default ButtonLink;
