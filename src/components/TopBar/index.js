import React from "react";
import styles from "./styles.module.scss";
import Button from "../Button";
import { Link } from "react-router-dom";
function TopBar() {
  return (
    <div className={styles.topBarWrapper}>
      <Link to="/new-record">
        <Button>Add new record</Button>
      </Link>
    </div>
  );
}

export default TopBar;
