import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBox from "../../components/SearchBox";
import SearchResult from "../../components/SearchResult";
import Slider from "../../components/Slider";
import styles from "./styles.module.scss";
function Home() {
  return (
    <div className={styles.homeWrapper}>
      <Header />
      <SearchBox />
      <SearchResult />
      <main>
        <Slider />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
