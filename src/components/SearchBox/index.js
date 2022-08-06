import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Input from "../Input";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchQuery,
  getSearchedItems,
  setSlicedSearchedItems,
  setCurrentPage,
  setPageRange,
} from "../../features/search/searchSlice";
import { Link } from "react-router-dom";
function SearchBox({ home }) {
  const dispatch = useDispatch();
  const { searchQuery, searchedItems } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(setSlicedSearchedItems());
    dispatch(setPageRange(5)); // to fix : type something and go page at least 6, then type something another.
  }, [searchQuery]);

  const onChangeHandler = (e) => {
    if (e.target.value !== "") {
      dispatch(setSearchQuery(e.target.value));
      dispatch(getSearchedItems());
    }
  };
  return (
    <div className={styles.wrapper}>
      {home && <h2>Find in records</h2>}
      <div className={styles.searchWrapper}>
        <form>
          <Input
            home={home}
            onChange={onChangeHandler}
            defaultValue={searchQuery}
            placeholder="Search something..."
          />
          <Link to={`/search-result/${searchQuery}`}>
            <Button disabled={!searchQuery || !searchedItems}>Search</Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
