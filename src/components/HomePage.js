import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div>
      <header className="App-header" data-testid="HomePage-div">
        <h2> Welcome to the Fridge Tracker App</h2>
      </header>
      <div className="mainText">
        <h4>Dinner just got made easier!</h4>
        <h4>Search what to cook by typing in ingredients you have.</h4>
        <h4>Or Search for a particular recipe </h4>
        <h4>Wondering what to cook? Get a random recipe!</h4>
      </div>
    </div>
  );
};

export default HomePage;
