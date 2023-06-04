let ingredientList = [];
let instructionList = [];

document.getElementById('add-ingredient').addEventListener('click', () => {
    let ingredient = document.getElementById('ingredients-text').value;
    console.log(ingredient);
    ingredientList.push(ingredient);
    document.getElementById('ingredients-text').value = '';
})

document.getElementById('add-instruction').addEventListener('click', () => {
    let instruction = document.getElementById('instructions-text').value;
    console.log(instruction);
    instructionList.push(instruction);
    document.getElementById('instructions-text').value = '';
})


document.getElementById('submit').addEventListener('click', () => {
    let name = document.getElementById('name-text').value;

    let inputElement = document.getElementById('image-input');
    let files = inputElement.files;

    let formData = new FormData();

    formData.append('name', name);
    formData.append('instructions', JSON.stringify(instructionList));
    formData.append('ingredients', JSON.stringify(ingredientList));

    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        formData.append('images', file);
    }
  
    fetch('/images', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  });


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