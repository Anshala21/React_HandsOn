import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import from "react-dom/client"



//React functional component


const Body = () => (
          <div>
             <Title/>
             <Title></Title>
             {Title()}
             <h2>Body</h2>
             {parent}
             
          </div> 
             
    );
    
    
    const Title = () =>  <h1>Title</h1>;
    
    const parent = (
        <div id="parent">
          <div id="child1">
            <h1>I'm an h1 tag</h1>
            <h2>I'm an h2 tag</h2>
          </div>
          <div id="child2">
            <h1>I'm an h1 tag</h1>
            <h2>I'm an h2 tag</h2>
          </div>
        </div>
      );

      const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ This should work in React 18+
    root.render(<Body/>);


