import { LOGO_URL } from "../Utlis/contants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utlis/useOnlineStatus";
import MyContext from "../Utlis/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser } = useContext(MyContext);
  const [btnLogin, setBtnLogin] = useState("login");
  const [btnClick, setbtnClick] = useState(false);
  const onlineStatus = useOnlineStatus();

  const itemCart = useSelector((store) => store.cart.items);
  // console.log(itemCart);

  return (
    <header className=" bg-slate-700 text-white  ">
      <nav className="flex items-center  justify-evenly md:pr-2 lg:pr-4 h-38 md:gap-2 lg:gap-6">
        <div className="w-2/12 py-2">
          <Link to={"/"} className="">
            <img className="w-full max-h-16 " src={LOGO_URL} />
          </Link>
        </div>
        <div className=" whitespace-nowrap">
          {onlineStatus ? "🟢ON" : "🔴OFF"}
        </div>
        <div
          className={`dropdown-menu absolute ${
            btnClick ? "top-16 " : "-top-full"
          }   left-0    max-md:bg-[#ffffff30] w-full flex flex-col gap-2 items-center py-2 text-lg font-bold  md:static md:flex-row justify-between`}
        >
          <ul className="flex flex-col items-center gap-4  md:flex-row md:gap-8  whitespace-nowrap">
            <li className=" hover:text-orange-400">
              <Link to="/" className=" ">
                Home
              </Link>
            </li>
            <li className=" hover:text-orange-400">
              <Link to="/about" className=" ">
                About Us
              </Link>
            </li>
            <li className=" hover:text-orange-400">
              <Link to="/contact" className="  ">
                Contact Us
              </Link>
            </li>
            <li className=" hover:text-orange-400">
              <Link to="/grocery" className="  ">
                Grocery
              </Link>
            </li>

            <div className="w-7  object-cover">{loggedInUser}</div>
          </ul>

          <div className=" md:flex-row md:gap-8 hover:bg-orange-400 rounded-lg py-1 px-2 flex flex-col items-center gap-2">
            <button
              className="Login"
              onClick={() =>
                setBtnLogin(btnLogin === "login" ? "logOut" : "login")
              }
            >
              {btnLogin}
            </button>
          </div>
        </div>
        <button
          className="toggle-button md:hidden "
          onClick={() => setbtnClick(!btnClick)}
        >
          <i
            data-testid="menuIcon"
            className="  m-4 fa-solid fa-bars fa-lg cursor-pointer"
          ></i>
        </button>
        <div>
          <Link to="/cart">
            <div className="p-0 pt-1 text-red-400 ml-2 absolute top-0 text-center justify-center ">
              {itemCart.length}
            </div>
            <i
              data-testid="cartIcon"
              className=" fa-solid fa-cart-shopping fa-lg"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

 export default Header;