import React from "react";
import styles from "./styles.module.scss";
function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
