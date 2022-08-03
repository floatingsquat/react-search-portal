import React from "react";
import styles from "./styles.module.scss";
import Input from "../Input";
import Button from "../Button";
function SearchBox({ home }) {
  return (
    <div className={styles.wrapper}>
      {home && <h2>Find in records</h2>}
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
