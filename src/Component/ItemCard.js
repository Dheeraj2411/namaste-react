import React from "react";
import { menuImage_URL } from "../Utlis/contants";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../Utlis/cartSlice";

const ItemCard = ({ items }) => {
  // dispatch an action to add
  const disPatch = useDispatch();
  const handleAddItem = (item) => {
    // Add to cart
    disPatch(addToCart(item));
  };
  const handleRemoveItem = (item) => {
    // Add to cart
    disPatch(removeToCart(item));
  };
  const itemCart = useSelector((store) => store.cart.items);

  console.log(items);
  return (
    <div className="">
      {items?.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="  flex justify-between  pb-4 m-2   border-b-2    
      "
          >
            <div className="  w-9/12  ">
              <div className="flex flex-col">
                <span className="my-1 ">
                  {item?.card?.info?.isVeg ? "🟢 " : "🔺 "}
                  <span className="text-[#ee9c00]">
                    {item?.card?.info?.ribbon?.text}
                  </span>
                </span>
                <span className="text-base font-mono leading-4  text-pretty text-ellipsis  ">
                  {item?.card?.info?.name}
                </span>
                <span className="font-medium ">
                  ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}{" "}
                </span>
              </div>
              <div className="my-2 font-[200] leading-3">
                <span className="from-neutral-300 text-xs py-2   ">
                  {" "}
                  {item?.card?.info?.description}
                </span>
              </div>
            </div>
            <div className="w-3/12 p-4  relative">
              {item?.card?.info?.imageId ? (
                <div className=" relative ">
                  <div className="absolute flex text-center gap-1 left-6 z-50 right-3 h-8 top-[3.5rem] ">
                    <button
                      className=" relative  px-2 bg-slate-100 hover:text-base text-lg  rounded-md opacity-90  hover:text-orange-400"
                      onClick={() => handleAddItem(item)}
                    >
                      +
                    </button>

                    <button
                      className=" relative  px-2 text-lg bg-slate-100 hover:text-base  rounded-md opacity-90  hover:text-orange-400"
                      onClick={() => handleRemoveItem(item)}
                    >
                      -
                    </button>
                  </div>
                  <div className=" ">
                    <img
                      className=" absolute rounded-lg w-full h-20  hover:aspect-square"
                      src={menuImage_URL + item?.card?.info?.imageId}
                    />
                  </div>
                </div>
              ) : (
                <div className="absolute hover:bg-gray-700 top-[2rem] ">
                  <button
                    className=" relative  left-6 p-3 bg-slate-100   rounded-md opacity-90 hover:text-lg hover:text-orange-400 "
                    // redux funtion
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                  <button
                    className=" relative top-[2rem] left-6 p-3 bg-slate-100   rounded-md opacity-90 hover:text-lg hover:text-orange-400 "
                    // redux funtion
                    onClick={() => handleRemoveItem(item)}
                  >
                    Remove -
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
