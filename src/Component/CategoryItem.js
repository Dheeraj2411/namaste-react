import React, { useState } from "react";
import ItemCard from "./ItemCard";

const CategoryItem = ({
  item,
  titleFontSize,
  borderBottom,
  isOpen,
  setShowIndex,
}) => {
  // console.log(item.itemCards);
  return (
    <div className={`w-full  border-b-2 ${borderBottom}  box-border  `}>
      <div className=" mb-2 ">
        <button
          className="w-full px-4 py-3 flex items-center justify-between  font-medium"
          onClick={() => setShowIndex()}
        >
          <div className="flex">
            <div className={`${titleFontSize}`}>{item?.title} </div>
            <span className={`${titleFontSize}`}>
              ({item?.itemCards?.length})
            </span>
          </div>
          {isOpen ? "🔼" : "🔽"}
        </button>

        {isOpen && <ItemCard items={item?.itemCards} />}
      </div>
    </div>
  );
};

export default CategoryItem;
