import React from "react";
import SearchResults from "./SearchResults";
import "../../styles/App.css";

const SearchResultsCard = ({searchResults}) => {
  return (
    <div>
      <div className="search-results" data-testid="search-div">
        {searchResults ? (
          <SearchResults searchResults={searchResults} />
        ) : (
          <div>
            <h2 className="results-text"></h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchResultsCard;
