import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setPageRange,
  setSlicedSearchedItems,
} from "../../features/search/searchSlice";
import styles from "./styles.module.scss";
function Pagination() {
  // const [pages, setPages] = useState([]);
  const dispatch = useDispatch();
  const { totalPages, pageRange, currentPage, searchQuery } = useSelector(
    (state) => state.search
  );

  //const pages = Array.from(Array(totalPages).keys());
  // useEffect(() => {
  //   setPages(Array.from(Array(totalPages).keys()));
  // }, []);

  const pages = Array.from(Array(totalPages).keys());

  useEffect(() => {
    dispatch(setSlicedSearchedItems());
  }, [searchQuery]);

  const changePage = (index) => {
    dispatch(setCurrentPage(index));

    dispatch(setSlicedSearchedItems());
  };

  const renderPaginationItem = (page) => {
    if (page <= pageRange && page > pageRange - 3) {
      return (
        <button
          className={`${styles.page} ${
            page === currentPage ? styles.active : ""
          }`}
          onClick={() => changePage(page)}
          key={page}
          disabled={currentPage === page}
        >
          {page}
        </button>
      );
    }

    return null;
  };

  const handlePrevious = () => {
    if (currentPage - 1 <= pageRange - 3) {
      dispatch(setPageRange(pageRange - 3));
    }

    dispatch(setCurrentPage(currentPage - 1));
    //dispatch(getEvents({ searchQuery, page: currentPage - 1 }));
    dispatch(setSlicedSearchedItems());
  };

  const handleNext = () => {
    if (currentPage + 1 > pageRange) {
      dispatch(setPageRange(pageRange + 3));
    }

    dispatch(setCurrentPage(currentPage + 1));
    dispatch(setSlicedSearchedItems());
    //dispatch(getEvents({ searchQuery, page: currentPage + 1 }));
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.navButton}
        disabled={currentPage === 1}
        onClick={handlePrevious}
      >
        Previous
      </button>

      {pages.map((page) => renderPaginationItem(page))}

      <button
        className={styles.navButton}
        disabled={currentPage === pages.length}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
