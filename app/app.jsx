var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var RecipeBookApp = require('RecipeBookApp');
var RecipeAdd = require('RecipeAdd');
var RecipeList = require('RecipeList');

// load Foundation
$(document).foundation();

// load App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={RecipeBookApp}>
      <Route path="add" component={RecipeAdd}/>
      <IndexRoute component={RecipeList}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
