import { useRouteError } from "react-router-dom"
const Error= ()=>{
    const err= useRouteError();
    console.log(err);
    return (
   <div>
    <h1>Status: {err.status}</h1>
    <h2>Description:{err.statusText}</h2>
   </div>

    )
}

export default Error;