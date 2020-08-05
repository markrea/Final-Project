import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/App.css";
import SearchByIngredients from "./SearchByIngredients/SearchByIngredients";
import SearchByRecipe from "./SearchByRecipe/SearchByRecipe";

const dotenv = require("dotenv").config();

function App() {
  // const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="App">
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
        </Switch>

        <Footer />

        {/*
      <Switch>
        <Route path="/" exact render={(props) => <HomePage {...props} />} />
       
       <Route
          path="/search-by-ingredients"
          exact
          render={(props) => <SearchResults {...props} />}
        />
      </Switch> */}
        {/* <Search setSearchResults={setSearchResults} />
      <SearchResultsCard searchResults={searchResults} /> */}
      </header>
    </div>
  );
}

export default App;
