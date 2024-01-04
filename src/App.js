import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import RestaurantMenu from "./Component/RestaurentMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const Grocery =lazy(()=>import("./Component/Grocery"))
const About =lazy(()=>import("./Component/About"))
const AppLayout = () => {
  let alertShow = false;
  setInterval(() => {
    document.title = alertShow ? "Welcome !" : "RAM RAM Ji !";

    alertShow = !alertShow;
  }, 1000);
  
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (<Suspense fallback={<h3>Loading</h3>}> <About /></Suspense>),
      },
      ,
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element:(<Suspense fallback={<h3>Loading</h3>}> <Grocery /></Suspense>),
      },
      {
        path: "/restaurants/:resId",  
        element: <RestaurantMenu />,
        
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
