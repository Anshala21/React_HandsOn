import resList from "../Utility/MockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body =()=> {
    const [restaurantList,setRestaurantList]=useState(resList);
    const resFilter= ()=>{
      const filterRes= restaurantList.filter((res)=>res.info.avgRating>4);
      setRestaurantList(filterRes);
     
}
    return(
       <div className="body">
         <div className="BtnDiv">
            <button onClick={resFilter}>Filter 4+ rated Restaurants</button>
         </div> 
         <div className="res-container">
         {restaurantList.map((restaurant)=>  <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
           </div>
       </div>
    )
}

export default Body;