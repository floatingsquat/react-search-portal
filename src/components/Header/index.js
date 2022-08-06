import styles from "./styles.module.scss";
import Logo from "../Logo";
import SearchBox from "../SearchBox";
import SearchResult from "../SearchResult";
import { useSelector } from "react-redux";
function Header() {
  const { searchQuery } = useSelector((state) => state.search);
  return (
    <div className={styles.header}>
      <Logo text={true} />
      <SearchBox home={true} />
      {searchQuery && <SearchResult />}
    </div>
  );
}

export default Header;
