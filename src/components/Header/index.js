import React from "react";
import styles from "./styles.module.scss";
import TopBar from "../TopBar";
import Logo from "../Logo";
function Header() {
  return (
    <div className={styles.Header}>
      <TopBar />
      <Logo />
    </div>
  );
}

export default Header;
