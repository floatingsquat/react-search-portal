import styles from "./styles.module.scss";
function SliderItem({ item }) {
  return (
    <div className={styles.itemWrapper}>
      <img src={`/images/${item.img}`} alt="stock" />
      <div className={styles.text}>{item.heading}</div>
      <small>{item.text}</small>
    </div>
  );
}

export default SliderItem;
