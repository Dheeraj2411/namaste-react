import { useEffect, useState } from "react";
import { restaurantsMenu_APi } from "./contants";

const useResturantMenu = (resId) => {
  const [resInfo, setResData] = useState(null);
  useEffect(() => {
    get_Resturant_Info();
  }, []);

  const get_Resturant_Info = async () => {
    try {
      // live Data
      const response = await fetch(restaurantsMenu_APi + resId);
      const res_Data = await response.json();

      console.log(res_Data);
      const menuItemsList =
        res_Data.data.cards[4]["groupedCard"].cardGroupMap.REGULAR.cards;
      const itemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const NestedItemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
      //  mock DATA
      const menu = menuItemsList.map((item) => {
        if (
          item.card.card["@type"] === itemCategory ||
          item.card.card["@type"] === NestedItemCategory
        ) {
          return item.card.card;
        }
      });
      const modifiedData = {
        info: res_Data.data.cards[0].card.card.info,
        menu: menu.filter((value) => value !== undefined),
      };

      console.log(modifiedData.menu);
      setResData(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };
  return resInfo;
};
export default useResturantMenu;
