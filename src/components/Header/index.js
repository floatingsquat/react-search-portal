import React from "react";
import styles from "./styles.module.scss";
import Logo from "../Logo";
import SearchBox from "../SearchBox";
import SearchResult from "../SearchResult";
function Header() {
  return (
    <div className={styles.header}>
      <Logo text={true} />
      <SearchBox home={true} />
      <SearchResult />
    </div>
  );
}

export default Header;
