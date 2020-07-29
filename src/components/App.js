import React, { useState } from "react";
import axios from "axios";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Search from "./Search";
import SearchResults from "./SearchResults";

import "../styles/App.css";

function App() {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fridge Tracker</h1>
      </header>
      <Search setSearchResults={setSearchResults} />

      <div className="search-results" data-testid="search-div">
        {searchResults ? (
          <SearchResults searchResults={searchResults} />
        ) : (
          <div>
            <h2 className="results-text">No results... yet.</h2>
          </div>
        )}
        <BrowserRouter>
          <Route path="/" exact render={(props) => <HomePage {...props} />} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
