import React from "react";
import styles from "./styles.module.scss";
import errorClose from "../../assets/error-close.svg";
function ErrorBox() {
  return (
    <div className={styles.errorWrapper}>
      <div className={styles.left}>
        <span>Error while adding link element</span>
        <small>Name and surname should contain at least 2 words</small>
      </div>
      <div className={styles.center}>
        <span>Error</span>
      </div>
      <div className={styles.right}>
        <img src={errorClose} alt="error-close" />
      </div>
    </div>
  );
}

export default ErrorBox;
