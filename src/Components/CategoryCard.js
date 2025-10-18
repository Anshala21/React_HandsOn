import { useState } from "react";
import ItemData from "./ItemData";
const CategoryCard = ({catdata, showContent, setShowIndex}) => {

const contentData = catdata.card.card.itemCards;
const [show, setShow] =useState(true);

const handleOnClick = () =>{
if(showContent == true){
  showContent = false;
  setShow(false);
}
else{
 setShowIndex();
 setShow(true);
}
}


 return (
    <div className="accordian-categories">
    <h4 className="accordianTitle"  onClick={()=>handleOnClick()}>{catdata.card.card.title}</h4>
    <div>{show && showContent && <ItemData itemData = {contentData}/>}</div>
    </div>)




}
export default CategoryCard