import React from "react";
import styles from "./styles.module.scss";
function Button({ children, ...rest }) {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
