import React from "react";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import SearchBox from "../../components/SearchBox";
import SearchResult from "../../components/SearchResult";
import Pagination from "../../components/Pagination";

import styles from "./styles.module.scss";
import Order from "../../components/Order";
import { Link } from "react-router-dom";
function FullSearchResult() {
  return (
    <div className={styles.fullResultWrapper}>
      <div className={styles.header}>
        <Logo />
        <SearchBox />
        <div className={styles.newRecord}>
          <Link to="/new-record">
            <Button>Add new record</Button>
          </Link>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <SearchResult full={true} />
        </div>
        <div className={styles.order}>
          <Order />
        </div>
      </div>

      <div className={styles.paginationWrapper}>
        <Pagination />
      </div>
    </div>
  );
}

export default FullSearchResult;
