import React from "react";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import SearchBox from "../../components/SearchBox";
import SearchResult from "../../components/SearchResult";
import Pagination from "../../components/Pagination";

import styles from "./styles.module.scss";
import Order from "../../components/Order";
import { Link, useParams } from "react-router-dom";

function FullSearchResult() {
  const { query } = useParams();
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
      </div>
      <div className={styles.order}>
        <Order />
      </div>

      <div className={styles.paginationWrapper}>
        <Pagination />
      </div>
    </div>
  );
}

export default FullSearchResult;
