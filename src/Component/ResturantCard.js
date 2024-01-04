import { CDN_URL } from "../Utlis/contants";
const ResturantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    locality,
    costForTwo,
    avgRating,
    sla,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="gap-4 m-2 p-2 w-[250px] h-[350px] overflow-auto bg-slate-150 box-border rounded-lg shadow-lg">
      <img
        className="w-full h-[13rem] rounded-lg "
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold px-2 py-1  whitespace-nowrap overflow-hidden"> {name}</h3>
      
      <h3 className="px-2 font-bold py-1" >
      ❇️{avgRating} • {sla?.deliveryTime} mins
      </h3>
      <h4 className=" px-2  font-light text-sm whitespace-nowrap overflow-hidden">{cuisines.join(", ")}</h4>
      <h4 className="px-2">{locality}</h4>
    </div>
  );
};

  export default ResturantCard;
