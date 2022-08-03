import React from "react";
import styles from "./styles.module.scss";
import stockImg from "../../assets/stock-img.svg";
function SliderItem({ item }) {
  return (
    <div className={styles.itemWrapper}>
      <img src={stockImg} alt="stock" />
      <div className={styles.text}>{item.heading}</div>
      <small>{item.text}</small>
    </div>
  );
}

export default SliderItem;
