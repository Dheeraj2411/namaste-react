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
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3> {name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>🌏{locality}</h4>
      <h3>{costForTwo}</h3>
      <h3>
        ⭐{avgRating} ⏱️{sla?.deliveryTime}mins
      </h3>
    </div>
  );
};

  export default ResturantCard;