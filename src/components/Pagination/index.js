import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_PAGE_RANGE } from "../../constants";
import {
  setCurrentPage,
  setPageRange,
  setSlicedSearchedItems,
} from "../../features/search/searchSlice";
import styles from "./styles.module.scss";
function Pagination() {
  const dispatch = useDispatch();
  const { totalPages, pageRange, currentPage } = useSelector(
    (state) => state.search
  );

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const changePage = (index) => {
    dispatch(setCurrentPage(index));
    dispatch(setSlicedSearchedItems());
  };

  const renderPaginationItem = (page) => {
    if (page <= pageRange && page > pageRange - DEFAULT_PAGE_RANGE) {
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
    if (currentPage - 1 <= pageRange - DEFAULT_PAGE_RANGE) {
      dispatch(setPageRange(pageRange - DEFAULT_PAGE_RANGE));
    }
    dispatch(setCurrentPage(currentPage - 1));
    dispatch(setSlicedSearchedItems());
  };

  const handleNext = () => {
    if (currentPage + 1 > pageRange) {
      dispatch(setPageRange(pageRange + DEFAULT_PAGE_RANGE));
    }
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
