import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
function Logo({ text }) {
  return (
    <div className={styles.logoWrapper}>
      <img src={logo} alt="logo" />
      {text && (
        <div className={styles.textWrapper}>
          <small>Search app</small>
        </div>
      )}
    </div>
  );
}

export default Logo;
