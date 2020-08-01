import React, { useState } from "react";
import "../styles/App.css";

const HomePage = () => {
  return (
    <div>
      <header className="App-header">
        <h1>Fridge Tracker</h1>
      </header>
      {/* could have list/navbar here to search by name, ingredient, random recipe. etc 
      or could render the SideBar in the HomePage component so the "/" route goes to a homepage 
      that has a SideBar where users can search for what they want */}
      
    </div>
  );
};

export default HomePage;
