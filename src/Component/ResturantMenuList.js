import { menuImage_URL } from "../Utlis/contants";
const ResturantMenuList=({menu})=>{
    console.log(menu[0].itemCards[0].card.info.name)
   
return(
    <div>
    <h3  className=" flex justify-center md:font-bold  py-3 shadow-md rounded  ">{menu[0].title}</h3>
      
      {menu[0]?.itemCards?.map((item) => (
        <div className="  flex justify-between  mx-2 my-2  shadow-md rounded 
        " key={item.card.info.id}>
          <ul className=" mx-2 ">
            <li className="my-2 ">{item.card.info.isVeg ? "🟢" : "🔺"}</li>
            <li className="font-thin">{item.card.info.name}</li>
            <li>
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}{" "}
            </li>
          </ul>
          <div className=" "> <img
            className=" rounded-lg w-20 h-20   "
            src={menuImage_URL + item.card.info.imageId}
          /> <button className="  bg-slate-100 ml-3 rounded-md relative -top-3 -bottom-0 ">Add ➕</button>
          </div>
         
        </div>
      ))}
    </div> 
)
}
export default ResturantMenuList