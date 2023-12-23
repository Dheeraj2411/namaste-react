import ResturantCard from "./ResturantCard";
import { useState,useEffect } from "react";
import ShimmerUi from "./ShimmerUi";


const  Body=()=>{
    //  State variable
   const [resturantData,setresturantData]=useState([]);//Main content of Api
   const [inputData,setInputData]=useState("") //state variable of input data
   const [filterData,setFilterData]=useState("")  // state Variable of filter Data and initial Data of UI
         
  // <---whenever the state variable  update . react trigger reconcilation cycle(re-render component)
       useEffect(()=>{
         fetchData()
       },[])

       const fetchData = async()=>{
         //Swiggy APi
       const data = await fetch(

       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.453109&lng=77.037495&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.453109&lng=77.037495&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
       )
     

       
       const json = await data.json();
      // optinoal chaining
       setresturantData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setFilterData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

       }
    
       return resturantData.length===0?(<ShimmerUi/>):
       (
       <div className="body">
          <div className="filter">
            <input type="text"
            // Search the text
             className="btn-input"
             value={inputData}
             placeholder="Search here"
             onChange={(e)=>{
               setInputData(e.target.value)          

            }}
             
             />
            <button className="btn-search"
            // filter the returant cards and update the UI

             onClick={()=>{
                  const filter=resturantData.filter((res)=>res?.info?.name?.toLowerCase()
                  .includes(inputData.toLowerCase()))
                  setFilterData(filter)
                }}>Search</button>
            <button className="filter-btn"
            // filter Data 
             onClick={()=>{
               const filterData=resturantData.filter((res)=>res?.info?.avgRating>=4)
               setFilterData(filterData)
               }}>
               Top Rated Restaurant</button>
          </div>
          <div className="res-container">
          {filterData.map((restutrant)=><ResturantCard resData={restutrant} key={restutrant.info.id}/>)}     
          </div>
        
       </div>
    )
 }
 export default Body;
