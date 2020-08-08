import axios from "axios";

const getRecipes2 = (query, diet) => {
  if (!query) {
    return Promise.resolve([]);
  }

  const request = query.toLowerCase();
  console.log(diet);

  return axios
    .get(
      `https://immense-castle-65887.herokuapp.com/recipename?query=${request}&diet=${diet}&number=2`
    )
    .then((response) => {
      const Results = response.data.results;
      console.log("Results: ", Results);

      const processed = Results.map((result) => {
        return {
          image: result.image,
          title: result.title,
          id: result.id,
          link: result.sourceUrl,
          key: result.id,
        };
      });

      console.log(processed);
      return processed;
    })

    .catch((err) => {
      alert("Something went wrong. Please refresh your browser");
    });
};
export default getRecipes2;
