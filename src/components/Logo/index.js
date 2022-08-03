import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
function Logo({ text }) {
  return (
    <div className={styles.logoWrapper}>
      <Link to="/">
        <img src={logo} alt="logo" />
        {text && (
          <div className={styles.textWrapper}>
            <small>Search app</small>
          </div>
        )}
      </Link>
    </div>
  );
}

export default Logo;
