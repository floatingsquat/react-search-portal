import React from "react";
import styles from "./styles.module.scss";

function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
