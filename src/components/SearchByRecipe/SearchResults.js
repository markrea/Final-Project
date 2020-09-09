import React from "react";
import PropTypes from "prop-types";
import "../../styles/SearchResults.css";

const Result = ({ results }) => {
  const calories = Math.round(results.calories);
  return (
    
      <div key={results.image} className="innerSearchResult">
        <img src={results.image} alt="mockAlt" className="card-photo" />
        <figcaption className="caption">
          <b>{results.title}</b>
        </figcaption>
        <figcaption className="caption">
          Ready in {results.readyInMinutes}
          mins
        </figcaption>
        <figcaption className="caption">
          Serves
          {results.serves}
        </figcaption>
        <figcaption className="caption"> {calories} Calories</figcaption>
        <a href={results.link} target="_blank" rel="noopener noreferrer">
          View Recipe
        </a>
      </div>
   
  );
};
const SearchResults = ({ searchResults }) => {
  if (searchResults[0]) {
    return (
      <div className="SearchResults" data-testid="results-div">
        <div className="test">
          {searchResults.map((results) => (
            <Result key={results.id} results={results} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="noResults">
      <p>No recipes found. Please try another search</p>
    </div>
  );
};
SearchResults.propTypes = {
  Result: PropTypes.array,
};
export default SearchResults;
