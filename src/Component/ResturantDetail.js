const ResturantDetail = (resturant) => {
  console.log(resturant);
  return (
    <div
      className="mx-auto px-2  flex justify-center 
      flex-col "
    >
      <span className="font-thin text-slate-400 text-xs my-5 ">
        {" "}
        {/* // resturant name and city */}
        {resturant.city + " / " + resturant.name}
      </span>
      <h1 className=" md:text-3xl text-xl font-medium whitespace-normal">
        {" "}
        {/* ///resturant name */}
        {resturant.name}
      </h1>
      <h3 className="text-slate-400 text-sm mt-2 mx-1">
        {" "}
        {/* /// cuisines name */}
        {resturant.cuisines.join(" ,")}
      </h3>
      <span className="text-slate-400 text-sm mx-1 ">
        {" "}
        {/* // area name and distance */}
        {resturant?.areaName}, {resturant?.sla?.lastMileTravelString}
      </span>
    </div>
  );
};
export default ResturantDetail;
