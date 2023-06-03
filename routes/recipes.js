var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
  res.send("You forgot the recipe from the URL.");
});

router.get("/:food", function(req, res) {
  console.log(`recipe name: ${req.params.food}`);
  recipe = {
    name: req.params.food,
    instructions: "First do this. After that do that.",
    ingredients: ["ingredient#1", "ingredient#2", "ingredient#3", "ingredient#4", "ingredient#5"]
  };

  /*
  let recipeName = document.createElement("h2");
  recipeName.innerText = recipe.name;

  let instructions = document.createElement("p");
  instructions.innerText = recipe.instructions;
  
  let ingredientsList = document.createElement("ul");

  recipe.ingredients.forEach(function(ingredient) {
    let li = document.createElement("li");
    li.innerText = ingredient;
    ingredientsList.appendChild(li);
  });

  let container = document.getElementById("recipe-container");
  container.appendChild(recipeName);
  container.appendChild(instructions);
  container.appendChild(ingredientsList);
  */

  let html = `
    <h2>${recipe.name}</h2>
    <p>${recipe.instructions}</p>
    <ul>
      ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
  `;

  res.send(html);
  //res.sendFile(path.join(__dirname, '../public/recipes.html'));
  //res.json(recipe);
})


module.exports = router;
