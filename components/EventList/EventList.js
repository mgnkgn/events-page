import React, { useContext, useEffect } from "react";
import Event from "./Event";
import { ListContext } from "@/context/main-context";
import styles from "@/styles/Events.module.css";

const myArr = [
  {
    id: 1,
    leftHd: "7 Eylül Salı 21:15",
    category: "Tiyatro",
    hContent: "BKM Yaz Etkinlikleri: Zengin Mutfağı",
    imgUrl: `./assets/ssen.png`,
    location: "Maximum UNIQ Hall",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
  {
    id: 2,
    leftHd: "7 Eylül Salı 21:15",
    category: "Stand Up",
    hContent: "Yasemin Sakallıoğlu",
    imgUrl: `./assets/red.png`,
    location: "Maximum UNIQ Hall",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
  {
    id: 3,
    leftHd: "7 Eylül Salı 21:15",
    category: "Sinema",
    hContent: "Sinema Keyfi: Rifkin’s Festival",
    imgUrl: `./assets/kin.png`,
    location: "Maximum UNIQ Hall",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
  {
    id: 4,
    leftHd: "7 Eylül Salı 21:15",
    category: "Sinema",
    hContent: "BKM Yaz Etkinlikleri: Zengin Mutfağı",
    imgUrl: `./assets/ssen.png`,
    location: "Maximum UNIQ Hall",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
  {
    id: 5,
    leftHd: "7 Eylül Salı 21:15",
    category: "Stand Up",
    hContent: "BKM Yaz Etkinlikleri: Zengin Mutfağı",
    imgUrl: `./assets/red.png`,
    location: "Maximum UNIQ Hall",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
  {
    id: 6,
    leftHd: "7 Eylül Salı 21:15",
    category: "Sinema",
    hContent: "Sinema Keyfi: Rifkin’s Festival",
    imgUrl: `./assets/bkm.png`,
    location: "Maximum UNIQ Hall",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
];

const EventList = () => {
  const { filteredList, listItems } = useContext(ListContext);
  console.log(listItems);
  useEffect(() => {}, [listItems]);
  return (
    <div className={styles.mainCt}>
      {listItems.map((el, i) => (
        <Event
          leftHdSpan={el.leftHdSpan}
          hContent={el.hContent}
          location={el.location}
          leftHd={el.leftHd}
          imgUrl={el.imgUrl}
          pContent={el.pContent}
          category={el.category}
          key={`${el.id}-${i}`}
        />
      ))}
    </div>
  );
};

export default EventList;
