import { LOGO_URL } from "../Utlis/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utlis/useOnlineStatus";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("login");
  const [btnClick, setbtnClick] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <header className=" bg-[#e3dddd30] text-neutral-700  ">
      <nav className="flex items-center justify-evenly px-4 h-38 md:gap-8">
        <Link to={"/"} className="">
          <img className="w-20 h-14  " src={LOGO_URL} />
        </Link>

        <div className=" whitespace-nowrap">
          {onlineStatus ? "Online 🟢" : "Offline🔴"}
        </div>
        <div
          className={`dropdown-menu absolute ${
            btnClick ? "top-16 " : "-top-full"
          }   left-0    max-md:bg-[#ffffff30] w-full flex flex-col gap-4 items-center py-2 text-lg font-bold md:static md:flex-row justify-between`}
        >
          <ul className="flex flex-col items-center gap-4  md:flex-row md:gap-8 ">
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
          </ul>

          <div className=" md:flex-row md:gap-8 hover:bg-orange-400 rounded-lg py-1 px-2 flex flex-col items-center gap-2">
            <button
              className=""
              onClick={() =>
                setBtnLogin(btnLogin === "login" ? "logout" : "login")
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
          <i className="  m-4 fa-solid fa-bars fa-lg cursor-pointer"></i>
        </button>
        <button>
          <i className=" fa-solid fa-cart-shopping fa-lg"></i>
        </button>
      </nav>
    </header>
  );
};

 export default Header;