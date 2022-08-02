import React from "react";
import styles from "./styles.module.scss";
import SliderItem from "../SliderItem";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

function Slider() {
  return (
    <div className={styles.wrapper}>
      <h2>Top News</h2>
      <div className={styles.sliderWrapper}>
        <div className={styles.left}>
          <button>
            <img src={leftArrow} alt="left-arrow" />
          </button>
        </div>
        <div className={styles.content}>
          <SliderItem />
          <SliderItem />
          <SliderItem />
        </div>
        <div className={styles.right}>
          <button>
            <img src={rightArrow} alt="right-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
