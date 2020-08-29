import React, { useState } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import getRandomRecipe from "../../requests/getRandomRecipe";

import "../../styles/Search.css";
import "../../styles/RandomRecipe.css";

const RandomSearch = ({ setSearchResults }) => {
  const [loading, setLoading] = useState(false);


  const handleClick = async (event) => {
    setLoading(true);
    event.preventDefault();
    setSearchResults(await getRandomRecipe());
    setLoading(false);
  };

  return (
    <div className="RandomRecipe" data-testid="searchFormDiv">
      <button className="randomButton" type="button" onClick={handleClick}>
        Go!
      </button>

      {loading && (
        <Loader
          className="loader"
          type="ThreeDots"
          color="green"
          height={60}
          width={60}
          timeout={3000}
        />
      )}

    </div>
  );
};
export default RandomSearch;
