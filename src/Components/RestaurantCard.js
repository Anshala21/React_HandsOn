import { resImgPrefix } from "../Utility/Constant";
const RestaurantCard=(props)=>{
    const {resData} = props;
    const{name,avgRating,cuisines,cloudinaryImageId}=resData.info;
               return(
                <div className="res-card">
                  <img alt="restaurant logo" src={resImgPrefix+cloudinaryImageId}/>
                  <div className="card-info">
                   <h1>{name}</h1>
                   <h2>{avgRating}*</h2>
                   <h5>{cuisines.join(", ")}</h5>
                 </div>
                </div>
                    )
}

export default RestaurantCard;