import NestedCategoryItem from "./NestedCategoryItem";
import CategoryItem from "./CategoryItem";
import { useState } from "react";

const ResturantMenuList = ({ menu }) => {
  const [showIndex, setShowIndex] = useState(null);
  // const [count, setCount] = useState(0);

  return (
    <div className="">
      {menu.map((item, index) => {
        return (
          <div className="flex mx-auto justify-center " key={index}>
            {item.categories ? (
              <NestedCategoryItem nestedItem={item} borderBottom="border-b-8" />
            ) : (
              <CategoryItem
                item={item}
                isOpen={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                borderBottom="border-b-8"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ResturantMenuList;
