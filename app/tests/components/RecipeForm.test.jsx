var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var testUtils = require('react-addons-test-utils');

// component to test
var RecipeForm = require('RecipeForm');

describe('RecipeAddForm', () => {
  it('should exist', () => {
    expect(RecipeForm).toExist();
  });

  it('should call handleRecipeAdd if valid recipe entered', () => {
    var spy = expect.createSpy();
    var recipeForm = testUtils.renderIntoDocument(<RecipeForm handleRecipeAdd={spy}/>);
    var $el = $(ReactDOM.findDOMNode(recipeAddForm));
    var recipeName = 'Cheese Toastie'

    // set the field values
    testUtils.Simulate.change($el.find('#recipeName')[0], { target: { value: recipeName } });
    testUtils.Simulate.change($el.find('#recipeIngredients')[0], { target: { value: 'Bread, Cheese, Worcestershire Sauce' } });

    // submit the form
    testUtils.Simulate.submit($el.find('form')[0]);

    // test what's submitted
    expect(spy).toHaveBeenCalledWith({
      name: recipeName,
      ingredients: [
        'Bread',
        'Cheese',
        'Worcestershire Sauce'
      ]
    });
  });

  it('should NOT call handleRecipeAdd if valid recipe entered', () => {
    var spy = expect.createSpy();
    var recipeForm = testUtils.renderIntoDocument(<RecipeForm handleRecipeAdd={spy}/>);
    var $el = $(ReactDOM.findDOMNode(recipeForm));

    // set the field values
    testUtils.Simulate.change($el.find('#recipeName')[0], { target: { value: '' } });
    testUtils.Simulate.change($el.find('#recipeIngredients')[0], { target: { value: '' } });

    // submit the form
    testUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
