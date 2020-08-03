import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Search from "../components/SearchByIngredients/Search";
import SearchResults from "../components/SearchByIngredients/SearchResults";

import HomePage from "./HomePage";
import SearchResultsCard from "./SearchByIngredients/SearchResultsCard";
import NavBar from "./NavBar";
import "../styles/App.css";
import SearchByIngredients from "../components/SearchByIngredients/SearchByIngredients";
const dotenv = require("dotenv").config();

function App() {
  const [searchResults, setSearchResults] = useState(null);

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
        </Switch>

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
