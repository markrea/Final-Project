import React from "react";
import PropTypes from "prop-types";
import "../../styles/SearchResults.css";

const Result = ({ results }) => {
  return (
    <div key={results.image} className="innerSearchResult">
      <img src={results.image} alt="mockAlt" className="card-photo" />
      <figcaption className="caption">{results.title}</figcaption>
      <a href={results.link} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
};
const SearchResults = ({ searchResults }) => {
  return (
    <div className="SearchResults" data-testid="results-div">
      <div className="test">
        {searchResults.map((results) => (
          <Result key={results.id} results={results} />
        ))}
      </div>
    </div>
  );
};

Result.propTypes = {
  results: PropTypes.objectOf.isRequired,
};
SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf.isRequired,
};

export default SearchResults;
