import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import CategoryCard from "./CategoryCard";



const RestaurantMenu = ()=>{

    const [restDesc,setRestDesc] = useState(null);
    const [showIndex, setShowIndex] = useState(null);

    let cardsArr = [];
    let CategoryCards = [];

    useEffect(()=>{
        fetchRestMenu();
    },[])

    const {resId} = useParams();

   const fetchRestMenu = async () => {
       const restMenuJson = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId);
       const restMenu = await restMenuJson.json();
       console.log(restMenu);
       setRestDesc(restMenu);
   }

   if(restDesc == null){
    return <Shimmer/>
   }

   if (restDesc != null){
      //  recommended = restDesc?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
      //  specialMeals = restDesc?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
        cardsArr = restDesc?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
       CategoryCards =  cardsArr.filter((c)=>c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        
   }

    return(
        <div>
          <div className="Rest-Menu">
            <h2>Welcome to {restDesc?.data?.cards[2]?.card?.card?.info?.name} </h2>
            {/* <h2> {restDesc?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h2>
            <h2> {restDesc?.data?.cards[2]?.card?.card?.info?.cuisines.join(",")}</h2> */}
          </div>
        
        
        <div className="accordian-container">{CategoryCards.map((catcard,index)=><CategoryCard catdata = {catcard} showContent = {index == showIndex} setShowIndex = {()=> setShowIndex(index)} />)}</div>

         </div>
  
    )
} 

export default RestaurantMenu;