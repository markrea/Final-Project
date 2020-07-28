import axios from "axios";

const API_KEY = "96b004d159144ba09fb4b7e07ef4ac0a";
const getRecipes = (query) => {
  if (!query) {
    return Promise.resolve([]);
  }

  const request = query.toLowerCase();

  return axios
    .get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${request}`
    )
    .then((response) => {
      const Results = response.data;
      console.log("Results: ", Results);

      const processed = Results.map((result) => {
        return {
          image: result.image,
          title: result.title,
        };
      });
      // console.log(processed.title);

      console.log(processed);
      return processed;
    })

    .catch((err) => {
      alert("Something went wrong. Please refresh your browser");
    });
};
export default getRecipes;
