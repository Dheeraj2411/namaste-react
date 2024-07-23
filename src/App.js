import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import MyContext from "./Utlis/UserContext";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./Utlis/appStore";
import Cart from "./Component/Cart";

const Grocery = lazy(() => import("./Component/Grocery"));
const About = lazy(() => import("./Component/About"));
const RestaurantMenu = lazy(() => import("./Component/RestaurentMenu"));
// const Cart = lazy(() => import("./Component/Cart"));

const AppLayout = () => {
  // userDAta
  const [gitData, setGitData] = useState();
  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    try {
      const gitUser = await fetch("https://api.github.com/users/Dheeraj2411");
      const data = await gitUser.json();

      setGitData(data.login);
    } catch (Error) {
      console.log(Error);
    }
  };

  // DYnamic title

  let alertShow = false;
  setInterval(() => {
    document.title = alertShow ? "Welcome !" : "RAM RAM Ji !";
    alertShow = !alertShow;
  }, 1000);

  return (
    <Provider store={appStore}>
      <MyContext.Provider value={{ loggedInUser: gitData, setGitData }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </MyContext.Provider>
    </Provider>
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
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
