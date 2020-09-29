import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/App.css";
import SearchByIngredients from "./SearchByIngredients/SearchByIngredients";
import SearchByRecipe from "./SearchByRecipe/SearchByRecipe";
import RandomRecipe from "./RandomRecipe/RandomRecipe";

// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config();

function App() {
  return (
    <div className="App" data-testid="App-div">
      <header className="App-header">
        <NavBar />

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route
            exact
            path="/search-by-ingredients"
            component={SearchByIngredients}
          />
          <Route exact path="/search-by-recipe" component={SearchByRecipe} />

          <Route exact path="/get-random-recipe" component={RandomRecipe} />
        </Switch>

        <Footer />
      </header>
    </div>
  );
}

export default App;
