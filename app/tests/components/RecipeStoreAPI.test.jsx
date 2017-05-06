var expect = require('expect');

// component to test
var RecipeStoreAPI = require('RecipeStoreAPI');
var key = '_amlord_recipes';

describe('RecipeStoreAPI', () => {
  beforeEach( () => {
    localStorage.removeItem(key)
  });

  it('should exist', () => {
    expect(RecipeStoreAPI).toExist();
  });

  describe('saveRecipes', () => {
    it('should save valid recipe array', () => {
        var recipes = [{
            id: 23,
            name: 'Spaghetti Bolognese',
            ingredients: ['Beef Mince', 'Onions', 'Garlic', 'Olive Oil', 'Oregano', 'Basil', 'Pasta']
        }];

        RecipeStoreAPI.saveRecipes(recipes);

        var actualRecipes = JSON.parse(localStorage.getItem(key));

        expect(actualRecipes).toEqual(recipes)
    });

    it('should not save invalid recipe array', () => {
        var recipes = {a: 'b'};

        RecipeStoreAPI.saveRecipes(recipes);

        var actualRecipes = JSON.parse(localStorage.getItem(key));

        expect(actualRecipes).toBe(null)
    });
  });

  describe('getRecipies', () => {
    it('should return empty array for missing local storage data', () => {
        var actualRecipes = RecipeStoreAPI.getRecipes();

        expect(actualRecipes).toEqual([]);
    });

    it('should return valid recipe array from localstorage', () => {
        var recipes = [{
            id: 23,
            name: 'Spaghetti Bolognese',
            ingredients: ['Beef Mince', 'Onions', 'Garlic', 'Olive Oil', 'Oregano', 'Basil', 'Pasta']
        }];

        localStorage.setItem(key, JSON.stringify(recipes));

        var actualRecipes = RecipeStoreAPI.getRecipes();

        expect(actualRecipes).toEqual(recipes);
    });
  });
});
