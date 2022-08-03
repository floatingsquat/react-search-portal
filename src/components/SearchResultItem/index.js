import React from "react";
import styles from "./styles.module.scss";
import locationIcon from "../../assets/location.svg";
function SearchResultItem({ item }) {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.icon}>
        <img src={locationIcon} alt="location-icon" />
      </div>
      <div className={styles.content}>
        <span>{item[0]}</span>
        <small>{item[1]}</small>
      </div>
    </div>
  );
}

export default SearchResultItem;
