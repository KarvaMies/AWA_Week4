const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    let uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.filename + '-' + uniqueSuffix + '-' + file.originalname.split('.').pop());
  }
});

let upload = multer({ storage: storage });

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

router.post('/images', upload.array('images'), (req, res) => {
  console.log(req.files);

  res.send('Hi');
});

module.exports = router;
