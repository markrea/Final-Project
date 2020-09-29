import React from "react";
import Proptypes from "prop-types";
import SearchResults from "./SearchResults";
import "../../styles/App.css";

const SearchResultsCard = ({ searchResults }) => {
  return (
    <div>
      <div className="search-results" data-testid="search-div">
        {searchResults && <SearchResults searchResults={searchResults} />}
      </div>
    </div>
  );
};
SearchResultsCard.propTypes = {
  searchResults: Proptypes.objectOf.isRequired,
};

export default SearchResultsCard;
