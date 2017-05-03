var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var RecipeBookApp = require('RecipeBookApp');

// load Foundation
$(document).foundation();

// load App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <RecipeBookApp />,
  document.getElementById('app')
);
