import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Social Media Sentiment Analysis</h1>
      <nav className={styles.nav}>
        <a href="/" className={styles.link}>
          Home
        </a>
      </nav>
    </header>
  );
};

export default Header;
