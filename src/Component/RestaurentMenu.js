import ShimmerUi from "./ShimmerUi";
import { restaurants_APi } from "../Utlis/contants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    menuData();
  }, []);

  const menuData = async () => {
    const data = await fetch(restaurants_APi + resId);
    const json = await data?.json();
    setResInfo(json?.data);
    console.log(json?.data);
  };

  if (resInfo === null) {
    return <ShimmerUi />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(resInfo?.cards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <h3>
        {cuisines.join(" ,")} _{costForTwoMessage}
      </h3>
      <h2></h2>
      <h3>Recomended</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
