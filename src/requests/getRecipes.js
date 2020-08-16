import axios from "axios";

const getRecipes = (query, diet, intolerances) => {
  if (!query) {
    return Promise.resolve([]);
  }
  const intoleranceValue = intolerances[0].value;
  const request = query.toLowerCase();

  return axios

    .get(
      `https://immense-castle-65887.herokuapp.com/recipes?ingredients=${request}&diet=${diet}&intolerances=${intoleranceValue}`
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
      console.log(processed.title);

      console.log(processed);
      return processed;
    })

    .catch((err) => {
      alert("Something went wrong. Please refresh your browser");
    });
};
export default getRecipes;
