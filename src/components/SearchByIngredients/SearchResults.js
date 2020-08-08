import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "../../styles/SearchResults.css";

const Result = ({ results }) => {

  return (
    <div key={results.image} className="innerSearchResult">
      <img src={results.image} alt="mockAlt" className="card-photo" />
      <figcaption className="caption">{results.title}</figcaption>
      <a href={results.link} target="_blank" rel="noopener noreferrer">
        More Details
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
SearchResults.propTypes = {
  Result: PropTypes.array,
};
export default SearchResults;