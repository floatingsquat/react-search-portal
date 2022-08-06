import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchResultItem from "../SearchResultItem";
import styles from "./styles.module.scss";
import { setCurrentPage } from "../../features/search/searchSlice";
function SearchResult({ full }) {
  const dispatch = useDispatch();
  const { searchedItems, slicedSearchedItems, searchQuery } = useSelector(
    (state) => state.search
  );

  return (
    <div className={`${styles.resultWrapper} ${full && styles.full}`}>
      <div className={styles.result}>
        {searchedItems.length ? (
          (full ? slicedSearchedItems : searchedItems).map(
            (item, index) =>
              full ? (
                <>
                  <SearchResultItem key={index} item={item} /> <hr />
                </>
              ) : (
                index < 3 && (
                  <SearchResultItem
                    key={Math.random()}
                    item={item}
                    full={true}
                  />
                )
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
          <span onClick={() => dispatch(setCurrentPage(1))}>Show more...</span>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchResult;
