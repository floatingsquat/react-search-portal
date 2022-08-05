import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import orderIcon from "../../assets/order.svg";

function OrderBy() {
  const [open, setOpen] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };
  return (
    <div className={styles.orderWrapper} ref={container}>
      <div className={styles.btnWrapper}>
        <button className={styles.orderBtn} onClick={() => setOpen(!open)}>
          <img src={orderIcon} alt="order-icon" />
          <span>Order By</span>
        </button>
      </div>
      {open && (
        <div class={styles.content}>
          <button>Name ascending</button>
          <button>Name descending</button>
          <button>Year ascending</button>
          <button>Year descending</button>
        </div>
      )}
    </div>
  );
}

export default OrderBy;
