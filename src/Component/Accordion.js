import React, { useState } from "react";
import { menuImage_URL } from "../Utlis/contants";

const Accordion = (item) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-md shadow-md">
        <button
          className="w-full px-4 py-3 flex items-center justify-between  text-white font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="pl-4">Menu</span>
          {isOpen ? "🔼" : "🔽"}
        </button>
        {isOpen && (
          <div
            className="  flex justify-between  mx-2 my-2  shadow-md rounded 
          "
          >
            <ul className=" mx-2 ">
              <li className="my-2 ">{item.card.info.isVeg ? "🟢" : "🔺"}</li>
              <li className="font-thin">{item.card.info.name}</li>
              <li>
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
              </li>
            </ul>
            <div className=" ">
              {" "}
              <img
                className=" rounded-lg w-20 h-20   "
                src={menuImage_URL + item.card.info.imageId}
              />{" "}
              <button className="  bg-slate-100 ml-3 rounded-md relative -top-3 -bottom-0 ">
                Add ➕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
