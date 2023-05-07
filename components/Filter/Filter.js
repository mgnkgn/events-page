import React from "react";
import styles from "@/styles/Filter.module.css";
import Options from "./Options";

const Filter = () => {
  return (
    <div className={styles.mainCt}>
      <div className={styles.leftBox}>
        <img src="./assets/group1.png" alt="dots" width={10} height={18} />
        <p>Filtreler</p>
      </div>
      <div className={styles.optCt}>
        <Options />
      </div>
      <div className={styles.rightBox}>
        <img
          src="./assets/Calendar.png"
          alt="calendar"
          width={24}
          height={24}
        />
        <p>Takvimde Gör</p>
      </div>
    </div>
  );
};

export default Filter;
