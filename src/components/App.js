import React from "react";
import InputForm from "./inputForm";

import "../styles/App.css";

function App() {
  const getRecipe = (event) => {
    event.preventDefault();
    //console.log(event.target);
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fridge Tracker</h1>
        </header>

        <InputForm getRecipe={getRecipe} />
     
    </div>
  );
}

export default App;
