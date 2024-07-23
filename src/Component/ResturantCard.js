import { CDN_URL } from "../Utlis/contants";

const ResturantCard = (props) => {
  const { resData } = props;
  // console.log(resData);

  const { name, cuisines, locality, avgRating, sla, cloudinaryImageId } =
    resData?.info;

  return (
<<<<<<< HEAD
    <>
      <span className="relative left-3  -bottom-[11.5rem] font-extrabold   opacity-70 p-1 rounded-lg  mx-1 text-ellipsis drop-shadow-2xl"></span>

      <div
        data-testid="resCard"
        className=" m-2 p-1 w-[300px] h-[300px] bg-slate-50 text-ellipsis   box-border rounded-lg shadow-lg"
      >
        <div className="h-[10rem]">
          <img
            className="w-full h-[11rem] rounded-lg "
            alt="res-img"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>

        <h3 className="font-bold px-2 mt-5 text-ellipsis  whitespace-nowrap overflow-hidden">
          {" "}
          {name}
        </h3>

        <h3 className="px-2 font-bold ">
          ❇️{avgRating} • {sla?.deliveryTime} mins
        </h3>
        <h4 className=" px-2 my-1 font-light text-sm whitespace-nowrap text-ellipsis overflow-hidden">
          {cuisines.join(", ")}
        </h4>
        <h4 className="px-2 my-1 font-light">{locality}</h4>
      </div>
    </>
  );
};

export const WithOffer = (ResturantCard) => {
  return (resData) => {
    const { header, subHeader } =
      resData?.resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <span className="relative left-3  -bottom-[11.5rem] font-extrabold  bg-white opacity-70 p-1 rounded-lg  mx-1 text-ellipsis drop-shadow-2xl">
          {subHeader ? header + " " + subHeader : header}
        </span>
        <ResturantCard {...resData} />
      </div>
    );
  };
};

export default ResturantCard;
=======
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
>>>>>>> 3719ce4840d0f40a06a189e71aac7e3ee4af234d
