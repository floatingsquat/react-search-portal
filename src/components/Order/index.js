import React from "react";
import styles from "./styles.module.scss";
function Order() {
  return (
    <select name="filter" value="Order By" className={styles.sorting}>
      <option value="name-ascending">Name ascending</option>
      <option value="name-descending">Name descending</option>
      <option value="year-ascending">Year ascending</option>
      <option value="year-descending">Year descending</option>
    </select>
  );
}

export default Order;
