import React from "react";
import axios from "axios";
import recipeResponseData from "./exampleRecipeData";

const API_KEY = "96b004d159144ba09fb4b7e07ef4ac0a";
const API_KEY2 = "48aba1bc5bce4ba3901fc4b1e3591949"; // new
const API_KEY3 = "257a8c4b423e48649fb5c5824c41b8eb";

/* const recipeLink = () => {
  console.log(recipeResponseData.sourceUrl);
  return recipeResponseData.sourceUrl;

}; */

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
