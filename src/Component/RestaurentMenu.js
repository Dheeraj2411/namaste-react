import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useResturantMenu from "../Utlis/useResturantMenu";
import ResturantDetail from "./ResturantDetail";
import ResturantMenuList from "./ResturantMenuList";
// import NestedItemCategory from "./NestedCategoriesItem";
// import Accordion from "./Accordion";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  // console.log(resInfo.info)
  console.log(resInfo);
  return !resInfo ? (
    <ShimmerUi />
  ) : (
    <div className=" w-full">
      <div className="  max-w-2xl max-h-full mx-auto  py-4 rounded-lg">
        <ResturantDetail {...resInfo.info} />
        <ResturantMenuList menu={resInfo.menu} />
        {/* <NestedItemCategory /> */}
        {/* <Accordion menu={resInfo.menu} />  */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
