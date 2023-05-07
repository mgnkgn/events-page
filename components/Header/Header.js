import React from "react";
import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.mainCt}>
      <img src="./assets/Exclude.png" alt="logo" className={styles.imgLogo} />
    </div>
  );
};

export default Header;
