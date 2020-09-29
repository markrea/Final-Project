import axios from "axios";

const getRandomRecipe = () => {
  return axios
    .get(`https://immense-castle-65887.herokuapp.com/random`)
    .then((response) => {
      const Results = response.data.recipes;
      // console.log("Results: ", Results);
      const processed = Results.map((result) => {
        return {
          image: result.image,
          title: result.title,
          id: result.id,
        };
      });
      // console.log("random:",processed);
      return processed;
    })

    .catch((err) => {
      // eslint-disable-next-line no-alert
      alert(err("Something went wrong. Please refresh your browser"));
    });
};
export default getRandomRecipe;
