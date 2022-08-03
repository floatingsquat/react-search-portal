import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Input from "../Input";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchQuery,
  getSearchedItems,
} from "../../features/search/searchSlice";
function SearchBox({ home }) {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.search);

  // useEffect(() => {
  //   const delayedSearch = setTimeout(() => {
  //     if (searchQuery) {
  //       dispatch(getResult({ searchQuery }));
  //     }
  //   }, 500);

  //   return () => clearTimeout(delayedSearch);
  // }, [searchQuery]);

  const onChangeHandler = (e) => {
    dispatch(setSearchQuery(e.target.value));
    dispatch(getSearchedItems());
  };
  return (
    <div className={styles.wrapper}>
      {home && <h2>Find in records</h2>}
      <div className={styles.searchWrapper}>
        <form>
          <Input onChange={onChangeHandler} placeholder="Search something..." />
          <Button>Search</Button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
