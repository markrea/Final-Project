import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY1;
//const API_KEY2 = process.env.REACT_APP_API_KEY2;
const API_KEY3 = process.env.REACT_APP_API_KEY3;
const API_KEY2 = "48aba1bc5bce4ba3901fc4b1e3591949";



const getRecipes = (query) => {
  if (!query) {
    return Promise.resolve([]);
  }

  const request = query.toLowerCase();

  return axios
    .get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY2}&ingredients=${request}&number=2`
    )
    .then((response) => {
      const Results = response.data;
      console.log("Results: ", Results);

      const processed = Results.map((result) => {
        return {
          image: result.image,
          title: result.title,
          id: result.id,
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
