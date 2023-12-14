import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import { RouterProvider,createBrowserRouter,Outlet } from "react-router-dom";

const AppLayout=()=>{
   let alertShow= false;
   setInterval(()=>{
      document.title=
        alertShow?"Welcome !"
               :"RAM RAM Ji !";
               
               alertShow=!alertShow
   },1000);
   
   
   return(
      <div className="app">
         <Header/>
         <Outlet/>         
      </div>
   );

};
const router=createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      children:[
         {
         path:"/",
         element:<Body/>
      },
         {
            path:"about",
            element:<About/>,
         },
         ,
         {
            path:"/contact",
            element:<Contact/>,
         }],
      errorElement:<Error/>,
   }
])

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={router}/>)

