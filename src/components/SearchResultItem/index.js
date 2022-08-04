import React from "react";
import styles from "./styles.module.scss";
import locationIcon from "../../assets/location.svg";
function SearchResultItem({ item, full }) {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.icon}>
        <img src={locationIcon} alt="location-icon" />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <span>{item[0]}</span>
          <small>{item[1]}</small>
        </div>
        <div className={styles.right}>
          <span>{item[4]}</span>
          <small>{item[3]}</small>
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;
