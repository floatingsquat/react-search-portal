import React from "react";
import styles from "./styles.module.scss";
import stockImg from "../../assets/stock-img.svg";
function SliderItem() {
  return (
    <div className={styles.itemWrapper}>
      <img src={stockImg} alt="stock" />
      <div className={styles.text}>
        A Plan to Rebuild Bus Terminal Eveyone Loves to Hate
      </div>
      <small>1h ago · by Troy Corlson</small>
    </div>
  );
}

export default SliderItem;
