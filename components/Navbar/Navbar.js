import React, { useContext, useState } from "react";
import styles from "@/styles/Navbar.module.css";
import { ListContext } from "@/context/main-context";

const links = [
  { name: "Tüm Etkinlikler", className: styles.activeA },
  { name: "Tiyatro", className: styles.normalA },
  { name: "Konser", className: styles.normalA },
  { name: "Stand Up", className: styles.normalA },
  { name: "Sinema", className: styles.normalA },
  { name: "Çocuk", className: styles.normalA },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [srchState, setSrchState] = useState("");
  const [myLinks, setMyLinks] = useState(links);

  const { filterAct, filterActCategory } = useContext(ListContext);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const filterActCat = (catContent) => {
    if (catContent === "Tüm Etkinlikler") {
      filterActCategory("");
      return;
    }
    filterActCategory(catContent);
  };
  return (
    <div className={styles.mainCt}>
      <div className={styles.row1}>
        <h2 className={styles.h2}>ETKİNLİKLER</h2>
      </div>
      <div className={styles.row2}>
        <ul className={styles.listCt}>
          {myLinks.map((link, index) => (
            <li
              key={index}
              className={index === activeLink ? styles.liActive : styles.li}
              onClick={() => {
                handleLinkClick(index);
                filterActCat(link.name);
              }}
            >
              <a
                href="#"
                className={
                  index === activeLink ? styles.activeA : styles.normalA
                }
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.searchBox}>
          <img
            src="./assets/Search.png"
            alt="search"
            width={23}
            height={23}
            className={styles.searchImg}
          />
          <input
            type="search"
            name="etkinlik"
            id="etkinlik"
            className={styles.searchInput}
            value={srchState}
            onChange={(e) => {
              console.log(e.target.value);
              setSrchState(e.target.value);
              filterAct(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
