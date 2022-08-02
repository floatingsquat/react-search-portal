import React from "react";
import styles from "./styles.module.scss";
import Button from "../Button";
function TopBar() {
  return (
    <div className={styles.topBarWrapper}>
      <Button>Add new record</Button>
    </div>
  );
}

export default TopBar;
