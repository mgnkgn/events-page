import React, { useContext, useState } from "react";
import styles from "@/styles/Filter.module.css";
import { ListContext } from "@/context/main-context";

const Options = () => {
  const { filterActLocation } = useContext(ListContext);
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const [selectedIdx2, setSelectedIdx2] = useState(-1);

  const myArr = [
    { id: 1, hContent: "Maximum UNIQ Hall" },
    { id: 2, hContent: "Maximum UNIQ Box" },
    { id: 3, hContent: "Maximum UNIQ Lounge" },
    { id: 4, hContent: "Maximum UNIQ Açıkhava" },
    { id: 5, hContent: "Bahçe Fuaye" },
  ];

  const myArr2 = [
    { id: 1, hContent: "Güncel Etkinlikler" },
    { id: 2, hContent: "Geçmiş Etkinlikler" },
  ];

  function makeFilter(hcontent) {
    console.log(hcontent);
    filterActLocation(hcontent);
  }
  return (
    <div className={styles.optMain}>
      <div className={styles.row1}>
        <h3 className={styles.opth3}>Etkinlik Mekanı</h3>
        <div className={styles.listCt}>
          <ul>
            {myArr.map((el, i) => {
              return (
                <li
                  className={styles.optLi}
                  key={`${el.hContent}-${el.id}-${i}`}
                >
                  <div
                    className={`${styles.optLiSpan}  ${
                      selectedIdx === i ? styles.optLiSpanActive : ""
                    }`}
                    onClick={() => {
                      if (+selectedIdx === +i) {
                        console.log("x");
                        setSelectedIdx(-1);
                        makeFilter("");
                        return;
                      }
                      setSelectedIdx(i);
                      makeFilter(el.hContent);
                    }}
                  >
                    <img
                      src="./assets/VectorTick.png"
                      alt="tick"
                      className={styles.tickActive}
                      width={12.5}
                      height={8}
                    />
                  </div>
                  {el.hContent}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.row2}>
        <h3 className={styles.opth3}>Etkinlik Tarihi</h3>
        <div className={styles.listCt}>
          <ul>
            {myArr2.map((el, i) => {
              return (
                <li
                  className={styles.optLi}
                  key={`${el.hContent}-${el.id}-${i}`}
                >
                  <div
                    className={`${styles.optLiSpan}  ${
                      selectedIdx2 === i ? styles.optLiSpanActive : ""
                    }`}
                    onClick={() => {
                      if (+selectedIdx2 === +i) {
                        setSelectedIdx2(-1);
                        return;
                      }
                      setSelectedIdx2(i);
                    }}
                  >
                    <img
                      src="./assets/VectorTick.png"
                      alt="tick"
                      className={styles.tickActive}
                      width={12.5}
                      height={8}
                    />
                  </div>
                  {el.hContent}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Options;
