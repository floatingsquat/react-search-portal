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
          searchedItems.map((item, index) => {
            if (index < 3) {
              return <SearchResultItem item={item} />;
            }
            return null;
          })
        ) : (
          <h3>There is no any data!</h3>
        )}
      </div>
      {!full && searchedItems.length ? (
        <button className={styles.button}>Show more...</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchResult;
