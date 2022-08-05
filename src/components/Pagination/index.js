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

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    dispatch(setSlicedSearchedItems());
  }, [searchQuery]);

  const changePage = (index) => {
    dispatch(setCurrentPage(index));

    dispatch(setSlicedSearchedItems());

    console.log("Butondan gelen page: ", index);
  };

  const renderPaginationItem = (page) => {
    if (page <= pageRange && page > pageRange - 5) {
      //console.log("render olan page buttonları: ", page);
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
    if (currentPage - 1 <= pageRange - 5) {
      dispatch(setPageRange(pageRange - 5));
    }
    console.log("handlePrevious", currentPage - 1);

    dispatch(setCurrentPage(currentPage - 1));

    dispatch(setSlicedSearchedItems());
  };

  const handleNext = () => {
    if (currentPage + 1 > pageRange) {
      dispatch(setPageRange(pageRange + 5));
    }
    console.log("handleNext", currentPage + 1);
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(setSlicedSearchedItems());
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
