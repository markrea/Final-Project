import React, { useState } from "react";
import axios from "axios";
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
      
      <div className="search-results">
          {
                   
           (searchResults)? 
            <SearchResults searchResults = {searchResults} /> :
           
           <div><h2 className="results-text">No results... yet.</h2></div>              
           
          }
        </div>

</div>
  );
}

export default App;
