import { CDN_URL } from "../Utlis/contants";
const ResturantCard=({resData})=>{
  
    // console.log(resData)
    
     return(
      <div className="res-card" >
          
      <img className="res-logo"
      alt="res-img"
      src={CDN_URL+resData?.info?.cloudinaryImageId}/>
      <h3> {resData?.info?.name}</h3>
      <h3>{resData?.imfo?.cuisines.join(", ")}</h3>
      <h4>{resData?.info?.locality}</h4>
      <h3>Rating: {resData?.info?.avgRating}</h3>
      <h3>{resData?.info?.costForTwo}</h3>
      <h3>DeliveryTime:{resData?.info?.sla?.deliveryTime}</h3>
     
     </div>
     )
  }

  export default ResturantCard;