import React from "react";
import SearchResultItem from "../SearchResultItem";
import styles from "./styles.module.scss";
function SearchResult() {
  return (
    <div className={styles.resultWrapper}>
      <div className={styles.result}>
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
      </div>
      <button className={styles.button}>Show more...</button>
    </div>
  );
}

export default SearchResult;
