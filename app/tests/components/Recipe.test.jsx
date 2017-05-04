var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var testUtils = require('react-addons-test-utils');

// component to test
var Recipe = require('Recipe');

describe('Recipe', () => {
  it('should exist', () => {
    expect(Recipe).toExist();
  });
});