import React, { useState } from "react";
import axios from "axios";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Search from "./Search";
import SearchResults from "./SearchResults";
import HomePage from "./HomePage";
import SearchResultsCard from "./SearchResultsCard";

import "../styles/App.css";

function App() {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props} />} />
          <Route
            path="/recipes"
            exact
            render={(props) => <SearchResults {...props} />}
          />
        </Switch>
      </BrowserRouter>
      <SearchResultsCard searchResults={searchResults} />
      <Search setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;
