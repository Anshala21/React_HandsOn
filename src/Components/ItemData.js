const ItemData = ({itemData}) => {

return (
  <div>
   <div>{itemData.map((item)=>{
    return(
    <div className = "accordian-item">
        <h5 className="accordian-item-name">{item.card.info.name}</h5>
        <h6 className="accordian-itemDesc">{item.card.info.description}</h6>
    </div>


    )
   })} </div>
  </div>
)


}
export default ItemData