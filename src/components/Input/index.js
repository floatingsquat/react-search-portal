import React from "react";
import styles from "./styles.module.scss";
import search from "../../assets/search-icon.svg";
function Input({ home, error, label, placeholder, ...rest }) {
  return (
    <div className={`${styles.inputWrapper} ${error && styles.error}`}>
      {/* className={`${error ? styles.inputWrapperError : styles.inputWrapper}`} */}
      {/* className={`${styles.page} ${
            page === currentPage ? styles.active : ""
          }`} */}
      {label && <label className={`${error && styles.error}`}>{label}</label>}
      <div className={styles.onlyInputWrapper}>
        {home && (
          <img src={search} className={styles.searchIcon} alt="search-icon" />
        )}
        <input
          className={`${
            error ? styles.errorInput : !home && styles.paddingRemove
          }`}
          {...rest}
          placeholder={placeholder}
        />
      </div>

      {error && <label className={`${error && styles.error}`}>{error}</label>}
    </div>
  );
}

export default Input;
