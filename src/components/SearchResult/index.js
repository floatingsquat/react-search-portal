import React from "react";
import { useSelector } from "react-redux";
import SearchResultItem from "../SearchResultItem";
import styles from "./styles.module.scss";
function SearchResult({ full }) {
  const { searchedItems, items } = useSelector((state) => state.search);
  return (
    <div className={styles.resultWrapper}>
      <div className={styles.result}>
        {searchedItems.length ? (
          searchedItems.map((item) => <SearchResultItem item={item} />)
        ) : (
          <h3>There is no any data!</h3>
        )}
      </div>
      {!full && <button className={styles.button}>Show more...</button>}
    </div>
  );
}

export default SearchResult;
