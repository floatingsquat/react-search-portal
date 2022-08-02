import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import styles from "./styles.module.scss";
import TopBar from "../../components/TopBar";
function Home() {
  return (
    <div className={styles.homeWrapper}>
      <TopBar />
      <Header />
      <main>
        <Slider />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
