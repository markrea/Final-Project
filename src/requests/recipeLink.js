import React from "react";
import axios from "axios";
import recipeResponseData from "./exampleRecipeData";

const API_KEY = process.env.REACT_APP_API_KEY1;
//const API_KEY2 = process.env.REACT_APP_API_KEY2;
const API_KEY3 = process.env.REACT_APP_API_KEY3;
const API_KEY2 = "48aba1bc5bce4ba3901fc4b1e3591949";



const recipeLink = async (id) => {
  await axios
    .get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY2}`
    )
    .then((res) => {
      console.log("URLS from recipeLink", res.data.sourceUrl);
      const link = res.data.sourceUrl;
      return link;
    })
    .catch((err) => {
      alert("Error");
    });
};


export default recipeLink;
