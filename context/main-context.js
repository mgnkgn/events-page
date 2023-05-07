import React, { createContext, useState } from "react";

export const ListContext = createContext();

const myArr = [
  {
    id: 1,
    leftHdSpan: "7 Eylül",
    leftHd: "Salı 21:15",
    category: "Tiyatro",
    hContent: "BKM Yaz Etkinlikleri: Zengin Mutfağı",
    imgUrl: `./assets/ssen.png`,
    location: "Maximum UNIQ Hall",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
  {
    id: 2,
    leftHdSpan: "7 Eylül",
    leftHd: "Salı 21:15",
    category: "Stand Up",
    hContent: "Yasemin Sakallıoğlu",
    imgUrl: `./assets/red.png`,
    location: "Maximum UNIQ Hall",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
  {
    id: 3,
    leftHdSpan: "7 Eylül",
    leftHd: "Salı 21:15",
    category: "Sinema",
    hContent: "Sinema Keyfi: Rifkin’s Festival",
    imgUrl: `./assets/kin.png`,
    location: "Maximum UNIQ Box",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
  {
    id: 4,
    leftHdSpan: "7 Eylül",
    leftHd: "Salı 21:15",
    category: "Sinema",
    hContent: "BKM Yaz Etkinlikleri: Zengin Mutfağı",
    imgUrl: `./assets/ssen.png`,
    location: "Maximum UNIQ Box",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
  {
    id: 5,
    leftHdSpan: "7 Eylül",
    leftHd: "Salı 21:15",
    category: "Stand Up",
    hContent: "BKM Yaz Etkinlikleri: Zengin Mutfağı",
    imgUrl: `./assets/red.png`,
    location: "Maximum UNIQ Lounge",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
  {
    id: 6,
    leftHdSpan: "7 Eylül",
    leftHd: "Salı 21:15",
    category: "Sinema",
    hContent: "Sinema Keyfi: Rifkin’s Festival",
    imgUrl: `./assets/bkm.png`,
    location: "Maximum UNIQ Hall",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
  {
    id: 7,
    leftHdSpan: "7 Eylül",
    leftHd: "Salı 21:15",
    category: "Sinema",
    hContent: "Sinema Keyfi: Rifkin’s Festival",
    imgUrl: `./assets/bkm.png`,
    location: "Maximum UNIQ Hall",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
  {
    id: 8,
    leftHdSpan: "7 Eylül",
    leftHd: "Salı 21:15",
    category: "Konser",
    hContent: "Sinema Keyfi: Rifkin’s Festival",
    imgUrl: `./assets/bkm.png`,
    location: "Maximum UNIQ Hall",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
  {
    id: 9,
    leftHdSpan: "7 Eylül",
    leftHd: "Salı 21:15",
    category: "Çocuk",
    hContent: "Sinema Keyfi: Rifkin’s Festival",
    imgUrl: `./assets/bkm.png`,
    location: "Maximum UNIQ Hall",
    pContent:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
  },
];

export const ListContextProvider = ({ children }) => {
  const [listItems, setListItems] = useState(myArr);

  const [filter, setFilter] = useState("");

  const filteredList = listItems.filter((item) =>
    item.hContent?.toLowerCase().includes(filter.toLowerCase())
  );

  const filterAct = (name) => {
    const filteredList = myArr.filter((el) =>
      el.hContent.toLowerCase().includes(name.toLowerCase())
    );
    setListItems(filteredList);
  };

  const filterActLocation = (name) => {
    const filteredList = myArr.filter((el) =>
      el.location.toLowerCase().includes(name.toLowerCase())
    );
    setListItems(filteredList);
  };
  const filterActCategory = (name) => {
    const filteredList = myArr.filter((el) =>
      el.category.toLowerCase().includes(name.toLowerCase())
    );
    setListItems(filteredList);
  };

  return (
    <ListContext.Provider
      value={{
        filteredList,
        setFilter,
        listItems,
        filterAct,
        filterActLocation,
        filterActCategory,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
