import React from "react";
import PropTypes from "prop-types";

import "../styles/SearchResults.css";

const SearchResults = ({ searchResults }) => {
  return (
    <div className="SearchResults" data-testid="results-div">
      <div className="test">
        {searchResults.map((results) => {
          return (
            <div key={results.image} className="innerSearchResult">
              <img src={results.image} alt="mockAlt" className="card-photo" />

              <figcaption className="caption">{results.title}</figcaption>
            </div>
          );
        })}
      </div>
    </div>
  );
};
SearchResults.propTypes = {
  searchResults: PropTypes.array,
};

export default SearchResults;
