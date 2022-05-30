import React from "react";
import Products from "./components/Products"
import styles from "./components/App.css"


const App = () => {
  const mystyle = {
    border:"1px solid grey",
    padding: "2%",
    margin: "2% 10% 0% 10%",
  };

  return (
    <div style={mystyle}>
      <Products/>
    </div>
  );
};

export default App;
