import RestaurantCard from "./RestaurantCard";
import { useState , useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import contextData from "../Utility/contextData";

const Body =()=> {
    const [restaurantList,setRestaurantList]=useState([]);
    const [filteredList,setFilteredList]=useState([]);
   
    
    console.log(restaurantList);
    console.log(filteredList);
    const [searchText,setSearchTxt]=useState("");

    const resFilter= ()=>{
      
      const filterRes= restaurantList.filter((res)=>res.info.avgRating>4);
      
      setFilteredList(filterRes);
     };


     useEffect(()=>{
      fetchAPIData();
     },[]);

     const fetchAPIData = async () => {
      
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const jsData = await data.json();
      console.log(jsData);
      //optional chaining
      console.log("hiii")
      setRestaurantList(jsData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log("hi")
      setFilteredList(jsData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log("hello")
     };
       //conditional rendering
        if(restaurantList.length === 0){
          return <Shimmer/>
        }
        const {loggedInUser,setUserFunc} = useContext(contextData);

    return(
      
       <div className="body">
         <div className="BtnDiv">
         <input type="text" value= {searchText} onChange={(e)=>setSearchTxt(e.target.value)}></input>
           <button className="search" onClick={()=>{
           const fileteredRes = restaurantList.filter((rest)=>rest.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
           setFilteredList(fileteredRes);
           }
          }
          >Search</button>
            <button onClick={resFilter}>Filter 4+ rated Restaurants</button>
             <input type="text"  onChange={(e)=>setUserFunc(e.target.value)}></input>
         <div>{loggedInUser}</div>
         </div> 
        
         <div className="res-container">
         {filteredList.map((restaurant)=> <Link key={restaurant?.info?.id} to={"/Restaurants/" + restaurant?.info?.id}> <RestaurantCard  resData={restaurant}/></Link>)}
           </div>
       </div>
    )
}

export default Body;