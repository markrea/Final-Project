import React from "react";
import PropTypes from "prop-types";

import "../styles/SearchResults.css";
import recipeLink from "../requests/recipeLink";


const SearchResults = ({ searchResults }) => {
  return (
    <div className="SearchResults" data-testid="results-div">
      <div className="test">
        {searchResults.map((results) => {
          return (
            <div key={results.image} className="innerSearchResult">
              <img src={results.image} alt="mockAlt" className="card-photo" />

              <figcaption className="caption">{results.title}</figcaption>
              <a href={recipeLink(results.id)}>More Details</a>
              {console.log(recipeLink(results.id))}
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
