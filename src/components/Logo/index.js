import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
function Logo({ text, full }) {
  return (
    <div className={styles.logoWrapper}>
      {text ? (
        <>
          <img src={logo} className={text && styles.logo} alt="logo" />
          <div className={styles.textWrapper}>
            <small>Search app</small>
          </div>
        </>
      ) : (
        <>
          <Link to="/">
            <img
              src={logo}
              className={text ? styles.logo : styles.newRecordImg}
              alt="logo"
            />
          </Link>
        </>
      )}
    </div>
  );
}

export default Logo;
