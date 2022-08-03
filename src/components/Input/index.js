import React from "react";
import styles from "./styles.module.scss";
function Input({ icon = false, error, label, placeholder, ...rest }) {
  return (
    <div className={styles.inputWrapper}>
      {label && <label>{label}</label>}
      <input {...rest} placeholder={placeholder} />
      {error && <label>{error}</label>}
    </div>
  );
}

export default Input;
