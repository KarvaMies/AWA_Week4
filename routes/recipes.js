var express = require('express');
var router = express.Router();

/* GET recipes listing. */
router.get('/', function(req, res, next) {
  res.send("You forgot the recipe from the URL.");
});

router.get("/:food", function(req, res) {
  recipe = {
    name: req.params.food,
    instructions: "First do this. After that do that.",
    ingredients: ["ingredient#1", "ingredient#2", "ingredient#3", "ingredient#4", "ingredient#5"]
  }
  res.json(recipe)
})

module.exports = router;
