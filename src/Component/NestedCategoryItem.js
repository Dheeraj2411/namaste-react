import React, { useState } from "react";

import CategoryItem from "./CategoryItem";

const NestedCategoryItem = ({ nestedItem, borderBottom }) => {
  const [showIndex, setShowIndex] = useState(null);
  // console.log(nestedItem);
  // console.log(borderBottom);

  return (
    <div className={`w-full my-4  ${borderBottom} `}>
      <div className="rounded-md ">
        <span className="ml-4 font-medium text-lg  my-2 ">
          {nestedItem.title}
        </span>
      </div>
      {nestedItem.categories.map((item, index) => {
        return (
          <div key={index} className=" ">
            <CategoryItem
              item={item}
              titleFontSize="text-sm "
              isOpen={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NestedCategoryItem;
