import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
// import ShimmerUi from "./Component/ShimmerUi";

const AppLayout=()=>{
   let alertShow= false;
   setInterval(()=>{
      document.title=
        alertShow?"Welcome !"
               :"RAM RAM Ji !";
               
               alertShow=!alertShow
   },1000);
   // console.log(<ShimmerUi/>)
   return(
      <div className="app">
         <Header/>
         <Body/>
         {/* <ShimmerUi/> */}
         
      </div>
   )

}

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>)

