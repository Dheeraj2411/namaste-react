import ResturantCard from "./ResturantCard";
import { useState,useEffect } from "react";
import ShimmerUi from "./ShimmerUi";


const  Body=()=>{
   const [resturantData,setresturantData]=useState([]);//Main content of Api
   const [inputData,setInputData]=useState("") //state variable of input data
   const [filterData,setFilterData]=useState("")  // state Variable of filter Data and initial Data of UI
         
       useEffect(()=>{
         fetchData()
       },[])

       const fetchData = async()=>{
         //Swiggy APi
       const data = await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.453109&lng=77.037495&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
       
       const json = await data.json();
      
       setresturantData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setFilterData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

       }
       console.log(resturantData.length)
       if(resturantData.length===0){
         return <ShimmerUi/>
       }

      //  console.log(resturantData[0]?.info?.name)

    return(
       <div className="body">
          <div className="filter">
            <input type="text"
            // Search the text
             className="btn-input"
             value={inputData}
             placeholder="Search here"
             onChange={(e)=>{
               setInputData(e.target.value)
               console.log(e.target.value)
               

            }}
             
             />
            <button className="btn-search"
            // filter the returant cards and update the UI

             onClick={()=>{
                  const filter=resturantData.filter((res)=>res?.info?.name?.toLowerCase()
                  .includes(inputData.toLowerCase()))
                  setFilterData(filter)
                  console.log(filter)}}>Search</button>
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