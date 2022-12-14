import Button from "../../components/Button";
import Logo from "../../components/Logo";
import SearchBox from "../../components/SearchBox";
import SearchResult from "../../components/SearchResult";
import Pagination from "../../components/Pagination";

import styles from "./styles.module.scss";
import OrderBy from "../../components/OrderBy";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function FullSearchResult() {
  const { searchedItems, searchQuery } = useSelector((state) => state.search);

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
          {searchQuery && <SearchResult full={true} />}
        </div>
        <div className={styles.order}>{searchQuery && <OrderBy />}</div>
      </div>

      <div className={styles.paginationWrapper}>
        {searchQuery && searchedItems.length > 5 && <Pagination />}
      </div>
    </div>
  );
}

export default FullSearchResult;
