var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var testUtils = require('react-addons-test-utils');

// component to test
var RecipeSearch = require('RecipeSearch');

describe('RecipeSearch', () => {
  it('should exist', () => {
    expect(RecipeSearch).toExist();
  });

  it('should call onSearch with entered search text in lowercase', () => {
    var spy = expect.createSpy();
    var recipeSearch = testUtils.renderIntoDocument(<RecipeSearch onSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(recipeSearch));

    // set the field values
    testUtils.Simulate.change($el.find('#recipeSearch')[0], { target: { value: 'AbCdEfG' } });

    // submit the form
    testUtils.Simulate.submit($el.find('form')[0]);

    // test what's submitted
    expect(spy).toHaveBeenCalledWith('abcdefg');
  });
});
