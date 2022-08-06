import { useRef, useState } from "react";
import styles from "./styles.module.scss";
import SliderItem from "../SliderItem";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import data from "../../config/slider-mockup";
function Slider() {
  const [slides, setSlides] = useState(data);
  const myRef = useRef();
  const prevClick = () => {
    const direction = myRef.current;
    direction.scrollLeft -= direction.offsetWidth;
    if (direction.scrollLeft <= 0) {
      direction.scrollLeft = direction.scrollWidth;
    }
  };

  const nextClick = () => {
    const slide = myRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2>Top News</h2>
      <div className={styles.sliderWrapper}>
        <div className={styles.left}>
          <button onClick={prevClick}>
            <img src={leftArrow} alt="left-arrow" />
          </button>
        </div>
        <div className={styles.content} ref={myRef}>
          {slides.map((item, index) => (
            <SliderItem key={index} item={item} />
          ))}
        </div>
        <div className={styles.right}>
          <button onClick={nextClick}>
            <img src={rightArrow} alt="right-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
