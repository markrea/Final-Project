import axios from "axios";

const getRecipes2 = (query, diet, intolerances) => {
  if (!query) {
    return Promise.resolve([]);
  }
  const intoleranceToString = () => {
    if (intolerances === null) {
      return [];
    }
    return intolerances.map((intolerance) => intolerance.value.toString());
  };
  const intoleranceValue = intoleranceToString(intolerances).join("&");
  // console.log(intoleranceValue);
  const request = query.toLowerCase();
  return axios
    .get(
      `https://immense-castle-65887.herokuapp.com/recipename?query=${request}&diet=${diet}&intolerances=${intoleranceValue}`
    )
    .then((response) => {
      const Results = response.data.results;
      // console.log("Results: ", Results);

      const processed = Results.map((result) => {
        return {
          image: result.image,
          readyInMinutes: result.readyInMinutes,
          calories: result.nutrition.nutrients[0].amount,
          serves: result.servings,
          title: result.title,
          id: result.id,
          link: result.sourceUrl,
          key: result.id,
        };
      });

      // console.log(processed);
      return processed;
    })

    .catch((err) => {
      // eslint-disable-next-line no-alert
      alert(err("Something went wrong. Please refresh your browser"));
    });
};
export default getRecipes2;
