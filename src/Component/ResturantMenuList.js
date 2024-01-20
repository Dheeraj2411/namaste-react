import NestedItem from "./NestedItem";

const ResturantMenuList = ({ menu }) => {
  console.log(menu);

  return (
    <div className=" flex justify-center md:font-bold  py-3 shadow-md rounded  ">
      {menu.map((item) => {
        // item.categories
        <NestedItem nestedCategory={item} />;
      })}
    </div>
  );
};
export default ResturantMenuList;
