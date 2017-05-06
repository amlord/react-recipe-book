// ----- Storage -----------------------------
module.exports = {
  // public functions
  getRecipes: function()
  {
    return _loadFromStorage();
  },
  saveRecipes: function(recipies)
  {
    // save data array to local storage
    _saveToStorage(recipies);
  },
  filterRecipes: function(recipes, searchText){

    var filteredRecipes = recipes.filter((recipe) => {
      // check for (case-insensitive) match in the recipe name
      if(recipe.name.toLowerCase().indexOf(searchText) !== -1){
        return true;
      }

      // loop through the ingerdients for matches
      for(var i = 0; i < recipe.ingredients.length; i++)
      {
        if(recipe.ingredients[i].toLowerCase().indexOf(searchText) !== -1){
          return true;
        }
      }
    });

    return filteredRecipes;
  }
};

// private variables
var _key = '_amlord_recipes';

// private functions
function _storageAvailable(type)
{
  try {
    var storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return false;
  }
}

function _loadFromStorage()
{
  if (_storageAvailable('localStorage'))
  {
    var data;

    try{
      data = JSON.parse(localStorage.getItem(_key));
    }
    catch(e){
      data = [];
    }

    return Array.isArray(data) ? data : [];
  }
}

function _saveToStorage(data)
{
  if (_storageAvailable('localStorage') && Array.isArray(data))
  {
    localStorage.setItem(_key, JSON.stringify(data));
  }
}