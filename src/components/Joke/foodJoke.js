import React, { useState, useEffect } from "react";
import axios from "axios";

const FoodJoke = () => {
  const [noJoke, setJoke] = useState("");

  const API_KEY2 = process.env.REACT_APP_API_KEY2;

  useEffect(() => {
    axios
      .get(`https://api.spoonacular.com/food/jokes/random?apiKey=${API_KEY2}`)
      .then((response) => {
        console.log(response.data.text);
        const joke = response.data.text;
        return setJoke(joke);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h4>Test</h4>
    </div>
  );
};
export default FoodJoke;
