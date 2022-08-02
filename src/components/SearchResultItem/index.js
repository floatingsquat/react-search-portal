import React from "react";
import styles from "./styles.module.scss";
import locationIcon from "../../assets/location.svg";
function SearchResultItem() {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.icon}>
        <img src={locationIcon} alt="location-icon" />
      </div>
      <div className={styles.content}>
        <span>brendan martinez</span>
        <small>Volutpat Nunc Associates</small>
      </div>
    </div>
  );
}

export default SearchResultItem;
