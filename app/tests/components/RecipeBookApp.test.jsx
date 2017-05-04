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
});