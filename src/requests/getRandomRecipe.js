import axios from "axios";

const getRandomRecipe = () => {
  return axios
    .get(`https://immense-castle-65887.herokuapp.com/random`)
    .then((response) => {
      const Results = response.data;
      console.log("Results: ", Results);
      const processed = [
        {
          image: Results.recipes[0].image,
          title: Results.recipes[0].title,
          id: Results.recipes[0].id,
        },
      ];

      console.log(processed);
      return processed;
    })

    .catch((err) => {
      alert("Something went wrong. Please refresh your browser");
    });
};
export default getRandomRecipe;
