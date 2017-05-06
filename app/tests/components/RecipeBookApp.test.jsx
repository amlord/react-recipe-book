var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var testUtils = require('react-addons-test-utils');

// component to test
var RecipeBookApp = require('RecipeBookApp');

describe('RecipeBookApp', () => {
  it('should exist', () => {
    expect(RecipeBookApp).toExist();
  });

  it('should add recipe to recipe state on handleRecipeAdd', () => {
    var recipeApp = testUtils.renderIntoDocument(<RecipeBookApp/>);
    var spagBol = {
      name: 'Spaghetti Bolognese',
      ingredients: ['Mince', 'Tinned tomatoes', 'Pasta']
    };

    recipeApp.setState({ recipes: [] });

    recipeApp.handleRecipeAdd(spagBol);

    expect(recipeApp.state.recipes[0].name).toBe(spagBol.name);
    expect(recipeApp.state.recipes[0].ingredients[0]).toBe(spagBol.ingredients[0]);
  });
});