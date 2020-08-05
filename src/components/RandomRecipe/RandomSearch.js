import React, { useState } from "react";
import getRandomRecipe from "../../requests/getRandomRecipe";
import "../../styles/Search.css";

const RandomSearch = ({ setSearchResults }) => {
  // const [value, setValue] = useState("");
  const handleClick = async (event) => {
    event.preventDefault();
    setSearchResults(await getRandomRecipe());
    
  };

  return (
    <div className="RandomButton" data-testid="searchFormDiv">
      <button type="button" onClick={handleClick}>
        Go!
      </button>
    </div>
  );
};
export default RandomSearch;
