import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { resData_API } from "../Utlis/contants";

const Body = () => {
  //  State variable
  const [resturantData, setresturantData] = useState([]); //Main content of Api
  const [inputData, setInputData] = useState(""); //state variable of input data
  const [filterData, setFilterData] = useState(""); // state Variable of filter Data and initial Data of UI

  // <---whenever the state variable  update . react trigger reconcilation cycle(re-render component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resData_API);
    const json = await data.json();
    console.log(json);
    // optinoal chaining
    setresturantData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );

    setFilterData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
  };

  return resturantData.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          // Search the text
          className="btn-input"
          value={inputData}
          placeholder="Search here"
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        />
        <button
          className="btn-search"
          // filter the returant cards and update the UI

          onClick={() => {
            const filter = resturantData.filter((res) =>
              res?.info?.name?.toLowerCase().includes(inputData.toLowerCase())
            );
            setFilterData(filter);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
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
      </div>
      <div className="res-container">
        {filterData.map((restutrant) => (
          <Link
            key={restutrant.info.id}
            to={"/restaurants/" + restutrant.info.id}
          >
            <ResturantCard resData={restutrant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
