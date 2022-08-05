import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchResultItem from "../SearchResultItem";
import styles from "./styles.module.scss";
function SearchResult({ full }) {
  const { searchedItems, slicedSearchedItems, searchQuery } = useSelector(
    (state) => state.search
  );

  // useEffect(() => {
  //   console.log("sliced", searchedItems.slice(0, 1));
  // }, [searchQuery]);

  return (
    <div className={`${styles.resultWrapper} ${full && styles.full}`}>
      <div className={styles.result}>
        {(full ? slicedSearchedItems : searchedItems).length ? (
          (full ? slicedSearchedItems : searchedItems).map(
            (item, index) =>
              full ? (
                <>
                  <SearchResultItem item={item} /> <hr />
                </>
              ) : (
                index < 3 && <SearchResultItem item={item} full={true} />
              )
            // if (index < 3) {
            //   return <SearchResultItem item={item} />;
            // }

            // return null;
          )
        ) : (
          <h3>There is no any data!</h3>
        )}
      </div>
      {!full && searchedItems.length ? (
        <Link className={styles.button} to={`/search-result/${searchQuery}`}>
          Show more...
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchResult;
