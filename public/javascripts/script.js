
// todo:
/*
siirrä html generointi recipes.js -> tänne ja kato mesierkki public/js/wall.js
ja jotenkin yritä saada fetchillä tai jotenki se resepti tms
*/
/*
let food = window.location.pathname.split('/').pop();
console.log(`the food from URL: ${food}`);
*/
/*
let html = `
    <h2>${recipe.name}</h2>
    <h3>Instructions:</h3>
    <ul>
    ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
    </ul>
    <h3>Ingredients:</h3>
    <ul>
      ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
  `;
*/

// Make a GET request to fetch the recipe data from the server
fetch('/recipe/Pizza')
  .then(response => response.json())
  .then(recipe => {
    console.log(`recipe: ${recipe}`);
    // Create HTML elements based on the recipe data
    var recipeName = document.createElement("h2");
    recipeName.innerText = recipe.name;

    var instructionsHeading = document.createElement("h3");
    instructionsHeading.innerText = "Instructions:";

    var instructionsList = document.createElement("ul");
    recipe.instructions.forEach(function(instruction) {
      var li = document.createElement("li");
      li.innerText = instruction;
      instructionsList.appendChild(li);
    });

    var ingredientsHeading = document.createElement("h3");
    ingredientsHeading.innerText = "Ingredients:";

    var ingredientsList = document.createElement("ul");
    recipe.ingredients.forEach(function(ingredient) {
      var li = document.createElement("li");
      li.innerText = ingredient;
      ingredientsList.appendChild(li);
    });

    // Append the elements to the recipe container
    var recipeContainer = document.getElementById("recipe-container");
    recipeContainer.appendChild(recipeName);
    recipeContainer.appendChild(instructionsHeading);
    recipeContainer.appendChild(instructionsList);
    recipeContainer.appendChild(ingredientsHeading);
    recipeContainer.appendChild(ingredientsList);
  })
  .catch(error => {
    console.error(error);
  });

