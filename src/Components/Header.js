import { useContext, useState } from "react";
import logo from "../Utility/Constant";
import { Link } from "react-router-dom";
import contextData from "../Utility/contextData";

const Heading = () => { 
  const [btnContent, setBtnContent] = useState("Login");
  const data = useContext(contextData);
    return (
     <div className = "heading">
       <div className = "logo-container">
       <img className= "logo" src={logo}/>
       <div>{data.loggedInUser}</div>
       
       </div>
       <div className = "nav-items">
         <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About Us</Link></li>
         <li><Link to="/Contact">Contact</Link></li>
         <li>Cart</li>
         <li><button onClick={()=>btnContent === "Login" ? setBtnContent("Logout") : setBtnContent("Login")}>{btnContent}</button></li>
         </ul>

       </div>
       
     </div>
)
}

export default Heading;
