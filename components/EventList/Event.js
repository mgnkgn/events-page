import React from "react";
import styles from "@/styles/Events.module.css";

const Event = (props) => {
  // console.log(props.leftHdSpan);
  return (
    <div className={styles.eventCt}>
      <div className={styles.blackSide}>
        <h3 className={styles.blackh3}>
          <span className={styles.blackh3Span}>{props.leftHdSpan}</span>
          {props.leftHd}
        </h3>
      </div>
      <div className={styles.imgCt}>
        <h3
          className={`${styles.imgh3} ${
            props.category === "Tiyatro"
              ? styles.tiyatroBg
              : props.category === "Stand Up"
              ? styles.standupBg
              : props.category === "Sinema"
              ? styles.sinemaBg
              : null
          }`}
        >
          {props.category}
        </h3>
        <img
          src={props.imgUrl}
          alt="sen"
          width={308}
          height={172}
          className={styles.imgEvent}
        />
      </div>
      <div className={styles.middleCol}>
        <h3 className={styles.colh3}>{props.hContent}</h3>
        <h4 className={styles.colh4}>
          <img
            src="./assets/Address.png"
            alt="location"
            width={24}
            height={24}
            className={styles.imgLocation}
          />
          {props.location}
        </h4>
        <p className={styles.colp}>{props.pContent}</p>
        <p className={styles.colpSpan}>Detaylı Bilgi</p>
      </div>
      {/* last column */}
      <div className={styles.lastCol}>
        <div className={styles.pinkBox}>
          <p className={styles.pinkBoxP}>Bilet Al</p>
        </div>
        <div className={styles.takvim}>
          <div className={styles.takvimP}>
            <span>+</span> <p>Takvime ekle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
