import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "../../styles/SearchResults.css";

const API_KEY2 = "48aba1bc5bce4ba3901fc4b1e3591949";
const Result = ({ results }) => {
  const [href, setHref] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${results.id}/information?apiKey=${API_KEY2}`
      )
      .then((response) => {
        const link = response.data.sourceUrl;
        return setHref(link);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div key={results.image} className="innerSearchResult">
      <img src={results.image} alt="mockAlt" className="card-photo" />
      <figcaption className="caption">{results.title}</figcaption>
      <a href={href} target="_blank" rel="noopener noreferrer" >
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
