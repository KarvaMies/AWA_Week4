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

  res.json(recipe);
})

router.post('/recipe/', (req, res) => {
  const { name, instructions, ingredients } = req.body;

  const recipe = {
    name,
    instructions,
    ingredients
  };

  res.json(recipe);
})

module.exports = router;
