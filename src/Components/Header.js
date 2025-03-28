import { useState } from "react";
import logo from "../Utility/Constant";
const Heading = () => { 
  const [btnContent, setBtnContent] = useState("Login");
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
         <li><button onClick={()=>btnContent === "Login" ? setBtnContent("Logout") : setBtnContent("Login")}>{btnContent}</button></li>
         </ul>

       </div>
       
     </div>
)
}

export default Heading;
