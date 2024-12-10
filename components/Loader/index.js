import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./loader.module.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  return <FontAwesomeIcon icon={faSpinner} className={styles.loader} />;
};

export default Loader;
