import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useResturantMenu from "../Utlis/useResturantMenu";
import ResturantDetail from "./ResturantDetail";
import ResturantMenuList from "./ResturantMenuList";
;

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  // console.log(resInfo.info)
  // console.log(resInfo);
  return !resInfo ? (
    <ShimmerUi />
  ) : (
    <div className="bg-slate-400 ">
      <div className="   max-h-full mx-auto w-7/12 py-4 rounded-lg">
        {/* resturant Detail */}
        <ResturantDetail {...resInfo.info} />
        {/* Menu of resturant */}
        <ResturantMenuList menu={resInfo.menu} />
      
      </div>
    </div>
  );
};

export default RestaurantMenu;
