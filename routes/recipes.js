var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/recipes.html'));
});

router.get('/recipe', function(req, res, next) {
  res.send("You forgot the recipe from the URL.");
});

router.get("/recipe/:food", function(req, res) {
  recipe = {
    name: req.params.food,
    instructions: ["First do this.", "After this do that."],
    ingredients: ["ingredient#1", "ingredient#2", "ingredient#3", "ingredient#4", "ingredient#5"]
  };

  /* moved to client side code -> public/javascripts/script.js
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

  let htmlPath = path.join(__dirname, '../public/recipes.html');
  fs.readFile(htmlPath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading recipes.html file');
      return;
    }

    updatedHtml = data.replace('<div id="recipe-container"></div>', `<div id="recipe-container">${html}</div>`);

    res.send(updatedHtml);
  })
  */
 /*
  res.sendFile(path.join(__dirname, '../public/recipes.html'), function (err) {
    if (err) {
      console.log(err);
      res.status(500).send('Error loading recipes.html');
    }
    else {
      res.locals.recipe = recipe;
    }
  });
  */
  res.json(recipe);
})


module.exports = router;
