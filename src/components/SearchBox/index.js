import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Input from "../Input";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchQuery,
  getSearchedItems,
} from "../../features/search/searchSlice";
import { Link } from "react-router-dom";
function SearchBox({ home }) {
  const dispatch = useDispatch();
  const { searchQuery, searchedItems } = useSelector((state) => state.search);

  const onChangeHandler = (e) => {
    if (e.target.value.length >= 0) {
      // 2 yap
      dispatch(setSearchQuery(e.target.value));
      dispatch(getSearchedItems());
    } else if (e.target.value === "") {
      dispatch(setSearchQuery(""));
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
