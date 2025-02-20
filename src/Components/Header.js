import logo from "../Utility/Constant";
const Heading = () => { 
    return (
     <div className = "heading">
       <div className = "logo-container">
       <img className= "logo" src={logo}/>
       </div>
       <div className = "nav-items">
         <ul>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact</li>
         <li>Cart</li>
         </ul>

       </div>
       
     </div>
)
}

export default Heading;
