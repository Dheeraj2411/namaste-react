import ResturantCard, { WithOffer } from "./ResturantCard";
import { useState, useEffect, useContext } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { resData_API } from "../Utlis/contants";
import useOnlineStatus from "../Utlis/useOnlineStatus";
import MyContext from "../Utlis/UserContext";

const Body = () => {
  //  State variable
  const [resturantData, setresturantData] = useState([]); //Main content of Api
  const [inputData, setInputData] = useState(""); //state variable of input data
  const [filterData, setFilterData] = useState(""); // state Variable of filter Data and initial Data of UI
  const { loggedInUser, setGitData } = useContext(MyContext);
  const ResturantCardWithOffer = WithOffer(ResturantCard);
  // <---whenever the state variable  update . react trigger reconcilation cycle(re-render component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(resData_API);
      const json = await data.json();

      // optinoal chaining
      setresturantData(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );

      setFilterData(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(filterData);
  // console.log(resturantData)
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h2>looks like you're offline!! check your internet connection</h2>;

  // console.log(resturantData.length);
  return resturantData.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="  flex flex-row justify-evenly bg-slate-100  flex-nowrap  shadow-lg py-2   ">
        <div className="  flex">
          <input
            type="text"
            data-testid="searchInput"
            // Search the text

            className="text-center flex flex-shrink w-full outline-none border-2 rounded-lg"
            value={inputData}
            placeholder="Search here"
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          />
          <button
            className=" px-1 mx-1  bg-gray-200  border-2 rounded-lg  hover:text-orange-400"
            // filter the returant cards and update the UI
            data-testid="searchBtn"
            onClick={() => {
              const filter = resturantData.filter((res) =>
                res?.info?.name?.toLowerCase().includes(inputData.toLowerCase())
              );

              setFilterData(filter);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="  border-2 rounded-md px-2 bg-white  hover:text-orange-400 "
          // filter Data
          onClick={() => {
            const filterData = resturantData.filter(
              (res) => res?.info?.avgRating >= 4
            );
            setFilterData(filterData);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="">
          <label>
            Input:
            <input
              className="text-center"
              type="text"
              value={loggedInUser}
              onChange={(e) => {
                setGitData(e.target.value);
              }}
            />
          </label>
        </div>
      </div>

      <div className=" flex justify-center flex-wrap ">
        {filterData.map((restutrant) => (
          <Link
            key={restutrant?.info.id}
            to={"/restaurants/" + restutrant?.info?.id}
          >
            {restutrant?.info?.aggregatedDiscountInfoV3?.header ? (
              <ResturantCardWithOffer resData={restutrant} />
            ) : (
              <ResturantCard resData={restutrant} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};
export default Body;
