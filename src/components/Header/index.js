import React from "react";
import styles from "./styles.module.scss";
import TopBar from "../TopBar";
import Logo from "../Logo";
import SearchBox from "../SearchBox";
import SearchResult from "../SearchResult";
function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <SearchBox />
      <SearchResult />
    </div>
  );
}

export default Header;
