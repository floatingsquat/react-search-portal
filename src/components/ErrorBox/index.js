import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import errorClose from "../../assets/error-close.svg";
import { useDispatch } from "react-redux";
import { setErrorBarActive } from "../../features/search/searchSlice";
function ErrorBox({ error }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.errorWrapper}>
      <div className={styles.left}>
        <span>Error while adding new record!</span>
        <small>{error?.name}</small>
        <small>{error?.country}</small>
        <small>{error?.city}</small>
        <small>{error?.email}</small>
      </div>
      <div className={styles.center}>
        <span>Error</span>
      </div>
      <div className={styles.right}>
        <button onClick={() => dispatch(setErrorBarActive(false))}>
          <img src={errorClose} alt="error-close" />
        </button>
      </div>
    </div>
  );
}

export default ErrorBox;
