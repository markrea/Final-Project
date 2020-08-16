import React from "react";
import getRandomRecipe from "../../requests/getRandomRecipe";
import "../../styles/Search.css";
import "../../styles/RandomRecipe.css";

const RandomSearch = ({ setSearchResults }) => {
  const handleClick = async (event) => {
    event.preventDefault();
    setSearchResults(await getRandomRecipe());
  };

  return (
    <div className="RandomRecipe" data-testid="searchFormDiv">
      <button className="randomButton" type="button" onClick={handleClick}>
        Go!
      </button>
    </div>
  );
};
export default RandomSearch;