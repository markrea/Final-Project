import React from "react";
import axios from "axios";

import PropTypes from "prop-types";

import "../styles/SearchResults.css";
import recipeLink from "../requests/recipeLink";

const API_KEY2 = "48aba1bc5bce4ba3901fc4b1e3591949";

const SearchResults = ({ searchResults }) => {
  const recipeFinder = (id) => {
    return axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY2}`
      )
      .then((response) => {
        const links = response.data.sourceUrl;
        console.log(links);
        return links;
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="SearchResults" data-testid="results-div">
      <div className="test">
        {searchResults.map((results) => {
          return (
            <div key={results.image} className="innerSearchResult">
              <img src={results.image} alt="mockAlt" className="card-photo" />

              <figcaption className="caption">{results.title}</figcaption>
              <a href={recipeFinder(results.id)} target="_blank">
                More Details
          </a>
              {/*<a href="#">
                <button type="submit" onClick={recipeFinder(results.id)}>
                  See More
                </button>
        </a>*/}
              {/* console.log(recipeLink(results.id)) */}
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
