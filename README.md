# FRIDGE TRACKER 

Authors: [Mark Rea](https://github.com/markrea), [Aidan Mueller](https://github.com/Ajaymueller) & [Sana Masood](https://github.com/SanMasood)

To view the deployed app [click here](https://fridge-tracker.netlify.app)


## Introduction

The Fridge Tracker app is a friendly web app made with React that lets you browse through recipes depending on what ingredients you have. Alternatively, you can also search for a particular recipe or simply get a random recipe. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for the front end, and Express at the [back end](https://github.com/markrea/final-project-backend) to implement all routes.  
Other tools used to create the Fridge Tracker app are Vanilla Javascript, HTML, CSS, CSS grid & Axios in VS Code. This app has been tested using the React Testing Library.

The API used is [Spoonacular](https://spoonacular.com/food-api), and different endpoints are accessed to return results. In many cases, results from endpoints have been destructured and used as arguments to be passed down into queries for other endpoints.

## Getting Started

To get started, you can either click on the deployed link or clone down the app to your machine by opening a new terminal and typing:

`git clone git@github.com:markrea/Final-Project.git`

Once the app has been successfully cloned, hit

 `npm install`
 
 to install any missing dependencies. 

`npm start`


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Once the app starts up, you should see a landing page:

<p align="center">
<img height="330" width="600" src="https://github.com/markrea/Final-Project/blob/inputform/public/landing-page-fridge-tracker.png?raw=true">
</p>

## Endpoints

From the NavBar on the top right, you can access various options, each of which implement a number of endpoints of the API.

**1. Search By Ingredients**
This option allows the user to enter a comma separated list of ingredients, and then returns recipe cards indicating what can be made using some or all of the input ingredients. The app also caters for filtering results according to dietary preferences and intolerances. You can then click on the 'View More' link which takes you to a third party website for full recipe and details. 

<p align="center">
<img height="330" width="600" src="https://github.com/markrea/Final-Project/blob/inputform/public/FT-SearchByIngredients.png?raw=true">
</p>


**2. Search By Recipe**
This option allows users to search for a particular recipe, once again allowing for any dietary requirements or intolerances. 

<p align="center">
<img height="330" width="600" src="https://github.com/markrea/Final-Project/blob/inputform/public/FT-SearchByRecipe.png?raw=true">
</p>


Each of these pages has been divided into components. First, a Search Form is rendered, equipped with functional props that catch values entered into each of the 3 fields. These values are sent as props to another component, where an axios GET request is performed, and these values are sent as query via the API endpoint. The response received is an array of 10 objects, each with several varying attributes; from each of which we extract and return only the image, title, readyInMinutes, Servings, & calories. The ID is also extracted, which is then passed into another endpoint to retrieve the URL that will take the user to a third party website for further details on the recipe. 

**3. Get a random Recipe**
This uses the random recipe endpoint of the API to return several random recipes. 

<p align="center">
<img height="330" width="600" src="https://github.com/markrea/Final-Project/blob/inputform/public/FT-randomRecipe.png?raw=true">
</p>


## Responsiveness
Keeping mobile first development in mind, the Fridge Tracker app has been made fully responsive. On mobiles, search results will adapt to a single column layout:
<p align="center">
<img height="520" width="290" src="https://github.com/markrea/Final-Project/blob/inputform/public/FT-mobileSearchResults.png?raw=true">
</p>

## What more we could have done
- We could add more features to the app by implementing results from other endpoints that were available to us from Spoonacular, particularly the wine pairing options. 
- Styling would be redone using BootStrap.
