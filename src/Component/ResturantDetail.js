const ResturantDetail = (resturant) => {
  // console.log(resturant);
  return (
    <div className=" mx-auto justify-center ">
      <span className="font-thin text-slate-400 text-xs my-5 ">
        {/* // resturant name and city */}

        {resturant.city + " / " + resturant.name}
      </span>
      <div className="flex justify-between flex-row">
        <div className=" mt-4 flex  flex-col  ">
          <h1 className=" md:text-2xl text-xl font-medium whitespace-normal">
            {" "}
            {/* ///resturant name */}
            {resturant.name}
          </h1>
          <h3 className="text-slate-400 text-sm mt-2 mx-1">
            {" "}
            {/* /// cuisines name */}
            {/* {resturant.cuisines.join(", ")} */}
          </h3>
          <span className="text-slate-400 text-sm mx-1 ">
            {" "}
            {/* // area name and distance */}
            {resturant?.areaName}, {resturant?.sla?.lastMileTravelString}
          </span>
        </div>
        <div className="flex flex-col p-2 my-5 text-center border rounded-lg shadow-lg">
          <span className="text-green-700 font-bold p-2 border-b text-lg ">
            ❇️ {resturant.avgRatingString}
          </span>
          <span className="font-semibold text-[0.6rem] my-2 ">
            {" "}
            {resturant.totalRatingsString}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ResturantDetail;
