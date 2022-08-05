import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import SearchBox from "../../components/SearchBox";
import SearchResult from "../../components/SearchResult";
import Pagination from "../../components/Pagination";

import styles from "./styles.module.scss";
import OrderBy from "../../components/OrderBy";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function FullSearchResult() {
  const { query } = useParams();
  const { searchedItems, totalPages } = useSelector((state) => state.search);
  //const totalPages = items?.length;

  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState(3);

  useEffect(() => {
    console.log(totalPages);
  }, []);

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
          <OrderBy />
        </div>
      </div>

      <div className={styles.paginationWrapper}>
        <Pagination
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pageRange={pageRange}
          setPageRange={setPageRange}
        />
      </div>
    </div>
  );
}

export default FullSearchResult;
