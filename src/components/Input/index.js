import React from "react";
import styles from "./styles.module.scss";
function Input({ icon = false, error, label, placeholder, ...rest }) {
  return (
    <div className={`${styles.inputWrapper} ${error && styles.error}`}>
      {/* className={`${error ? styles.inputWrapperError : styles.inputWrapper}`} */}

      {/* className={`${styles.page} ${
            page === currentPage ? styles.active : ""
          }`} */}
      {label && <label className={`${error && styles.error}`}>{label}</label>}
      <input
        className={`${error && styles.errorInput}`}
        {...rest}
        placeholder={placeholder}
      />
      {error && <label className={`${error && styles.error}`}>{error}</label>}
    </div>
  );
}

export default Input;
