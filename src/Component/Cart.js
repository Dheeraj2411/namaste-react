import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { deleteToCart } from "../Utlis/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteToCart());
  };

  return (
    <div className=" mx-auto bg-slate-30000 h-[100vh]">
      <div className=" flex bg-slate-300 justify-evenly shadow-lg">
        <h1 className=" p-2  rounded-md text-2xl font-bold shadow-sm">Cart</h1>
      </div>
      <button
        className=" flex text-gray-400 text-center mx-auto font-bold m-2 p-2 rounded-md text-2xl shadow-sm"
        onClick={handleClick}
      >
        ClearCart
      </button>
      {cartItems.length === 0 && (
        <h1 className="mx-atuo text-center mt-5 text-3xl animate-bounce ">
          Add Some item in Cart
        </h1>
      )}
      <div className="flex mx-auto justify-center ">
        <div className="max-h-full mx-auto w-7/12 py-4 rounded-lg">
          <ItemCard button={() => remove} items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
