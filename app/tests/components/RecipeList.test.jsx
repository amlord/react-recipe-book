var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var testUtils = require('react-addons-test-utils');

// component to test
var RecipeList = require('RecipeList');
var Recipe = require('Recipe');

describe('RecipeList', () => {
  it('should exist', () => {
    expect(RecipeList).toExist();
  });

  // it('should render one recipe component for each recipe item', () => {
  //   var arr = [{
  //     id: 1,
  //     name: 'Spaghetti Bolognese',
  //     ingredients: []
  //   },{
  //     id: 2,
  //     name: 'Toad in the Hole',
  //     ingredients: []
  //   }];

  //   var recipeList = testUtils.renderIntoDocument(<RecipeList recipes={arr} />);
  //   var recipeComponents = testUtils.scryRenderedComponentsWithType(recipeList, Recipe);

  //   expect(recipeComponents.length).toBe(arr.length);
  // });
});