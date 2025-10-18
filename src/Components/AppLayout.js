import Heading from "./Header";
import { Outlet } from "react-router-dom";
import contextData from "../Utility/contextData";
import { useState } from "react";
const AppLayout =()=> {
  const [user,setUser] = useState(null);
    return( 
     <div className = "app">
       <Heading/>
      {/* here i can modify the context and also add more keys in the context object, in place of sending setUser in props directly we can add it in context to get this at any component later. */}
       <contextData.Provider value = {{loggedInUser : user, setUserFunc : setUser}}> 
      {/* //or we can use concise method to store setUser function in context object i.e. 
      // 
      {{loggedInUser : user,setUser}}
      
     */}
       <Outlet/>
       </contextData.Provider>
     </div>
   )
   }

export default AppLayout;