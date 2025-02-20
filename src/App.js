import React from "react";
import ReactDOM from "react-dom/client"; 
import Heading from "./Components/Header";
import Body from "./Components/Body";



const AppLayout =()=> {
 return( 
  <div className = "app">
    <Heading/>
    <Body/>
  </div>
)
}
    
  const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ This should work in React 18+
  root.render(<AppLayout/>);


