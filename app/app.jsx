var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var RecipeBookApp = require('RecipeBookApp');
var RecipeForm = require('RecipeForm');
var RecipeList = require('RecipeList');

// load App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={RecipeBookApp}>
      <Route path="add" component={RecipeForm}/>
      <IndexRoute component={RecipeList}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
