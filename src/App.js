import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"; 
import Body from "./Components/Body";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import AppLayout from "./Components/AppLayout";

const RMenu = lazy(()=>import("./Components/RestaurantMenu"))
const appRouter = createBrowserRouter([
 {
  path: "/",
  element: <AppLayout/>,
  children:[
    {
      path: "/",
      element: <Body/>
     },
    {
      path: "/about",
      element: <About/>
     },
     {
      path: "/contact",
      element: <Contact/>
     },
     {
      path: "/Restaurants/:resId",
      element: <Suspense fallback = {<div>Loading...</div>}><RMenu/></Suspense>
     }
  ],
  errorElement: <Error/>
 }
])

  const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ This should work in React 18+
  root.render(<RouterProvider router= {appRouter}/>);
  // root.render(<AppLayout></AppLayout>)


