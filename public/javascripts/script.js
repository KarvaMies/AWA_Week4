// Function to make an AJAX request to the recipe route
function fetchRecipe() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/recipe/pizza'); // Replace 'pizza' with the desired meal
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var recipe = JSON.parse(xhr.responseText);
          renderRecipe(recipe);
        } else {
          console.log('Failed to fetch recipe');
        }
      }
    };
    xhr.send();
  }
  
  // Function to render the recipe on the page
  function renderRecipe(recipe) {
    var recipeContainer = document.getElementById('recipe-container');
    var html = '<h2>' + recipe.name + '</h2>';
    html += '<h3>Instructions:</h3>';
    html += '<ul>';
    recipe.instructions.forEach(function(instruction) {
      html += '<li>' + instruction + '</li>';
    });
    html += '</ul>';
    html += '<h3>Ingredients:</h3>';
    html += '<ul>';
    recipe.ingredients.forEach(function(ingredient) {
      html += '<li>' + ingredient + '</li>';
    });
    html += '</ul>';
  
    recipeContainer.innerHTML = html;
  }
  
  // Fetch the recipe when the page loads
  window.onload = fetchRecipe;
  