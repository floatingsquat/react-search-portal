import React from "react";
import styles from "./styles.module.scss";
import Input from "../Input";
import Button from "../Button";
function SearchBox() {
  return (
    <div className={styles.wrapper}>
      <h1>Find in records</h1>
      <div className={styles.searchWrapper}>
        <form>
          <Input placeholder="Search something..." />
          <Button>Search</Button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
