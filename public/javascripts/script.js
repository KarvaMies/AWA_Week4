document.getElementById('submit').addEventListener('click', () => {
    let name = document.getElementById('name-text').value;
    let ingredients = document.getElementById('ingredients-text').value.split('\n');
    let instructions = document.getElementById('instructions-text').value.split('\n');

    let recipe = {
        name: name,
        instructions: instructions,
        ingredients: ingredients
    };

    fetch('/recipe/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    })
    .then(response => response.json())
    .then(recipe => {
        console.log(recipe);
    })
    .catch(error => {
        console.error(error);
    });
});

document.getElementById('add-ingredient').addEventListener('click', () => {
    let ingredient = document.getElementById('ingredients-text').value;
    let ingredientsList = document.getElementById('ingredients-list');

    let li = document.createElement('li');
    li.innerText = ingredient;
    ingredientsList.appendChild(li);

    document.getElementById('ingredients-text').value = '';
});

document.getElementById('add-instruction').addEventListener('click', () => {
    let instruction = document.getElementById('instructions-text').value;
    let instructionsList = document.getElementById('instructions-list');

    let li = document.createElement('li');
    li.innerText = instruction;
    instructionsList.appendChild(li);

    document.getElementById('instructions-text').value = '';
})



fetch('/recipe/Pizza')
  .then(response => response.json())
  .then(recipe => {
    console.log(`recipe: ${recipe}`);

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