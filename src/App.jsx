import React from "react";
import Products from "./components/Products"
import styles from "./components/App.css"


const App = () => {
  return (
    <div className={styles.App}>
      <Products />
    </div>
  );
};

export default App;
