var express = require('express');
var router = express.Router();
var path = require('path');


/* GET recipes listing. */

router.get('/', function(req, res, next) {
  res.send("You forgot the recipe from the URL.");
});

router.get("/:food", function(req, res) {
  console.log(`recipe name: ${req.params.food}`);
  recipe = {
    name: req.params.food,
    instructions: "First do this. After that do that.",
    ingredients: ["ingredient#1", "ingredient#2", "ingredient#3", "ingredient#4", "ingredient#5"]
  }
  res.sendFile(path.join(__dirname, '../public/recipes.html'));
})


module.exports = router;
