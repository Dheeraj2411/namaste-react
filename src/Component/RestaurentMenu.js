import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useResturantMenu from "../Utlis/useResturantMenu";
import ResturantDetail from "./ResturantDetail";
import ResturantMenuList from "./ResturantMenuList";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  // console.log(resInfo.info)
  console.log(resInfo)
  return !resInfo?(<ShimmerUi/>
  ):(
    <div className="bg-slate-100 w-full">
    <div className=" bg-slate-300 md:w-[700px] h-full mx-auto my-2 py-4 rounded-lg">
    <ResturantDetail {...resInfo.info}/>  
    <ResturantMenuList menu={resInfo.menu}/>
    
   </div>
    </div>
  );
};

export default RestaurantMenu;
