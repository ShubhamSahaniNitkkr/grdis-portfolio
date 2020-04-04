import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Main from "./Main";
import Contactus from "./Contactus";
import styles from "../../css/home.module.css";

const Home = () => {
  return (
    <div className={styles.gridContainer}>
      <main>
        <Main />
      </main>
      <section className={styles.contactus}>
        <Contactus />
      </section>
      <header>
        <Navbar />
      </header>
      <div className={styles.intro}>
        <Intro />
      </div>
    </div>
  );
};

export default Home;
