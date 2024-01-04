const ResturantDetail=(resturant)=>{
    console.log(resturant)
    return(
        <div className="mx-6 px-4 shadow-md rounded flex justify-center 
      flex-col  text-center">
        <h1 className=" md:text-2xl font-bold whitespace-normal">{resturant.name}</h1>
        <h3>
          {resturant.cuisines.join(" ,")} _{resturant.costForTwoMessage}
        </h3>
      </div>
    )
}
export default ResturantDetail