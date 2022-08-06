import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import orderIcon from "../../assets/order.svg";
import { useDispatch } from "react-redux";
import { setOrderByFilter } from "../../features/search/searchSlice";
import { ORDER_BY_VALUES } from "../../constants";
function OrderBy() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const container = useRef(null);

  const onClickHandler = (e) => {
    dispatch(setOrderByFilter(e.target.name));
  };
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
        <div className={styles.content}>
          {ORDER_BY_VALUES.map((item, index) => (
            <button name={index} key={index} onClick={onClickHandler}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderBy;
