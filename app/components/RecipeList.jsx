var React = require('react');
var Recipe = require('Recipe');

// var RecipeStore = require('RecipeStore');
// var recipeStore = new RecipeStore('_amlord_recipes');

var RecipeList = React.createClass({
  getInitialState: function()
  { 
    return {
      //recipes: recipeStore.getFullList()
      recipes: []
    };
  },
  onClick: function(recipeId)
  {
    // return a function to manage table sort change
    return () => {
      this.props.onClick(recipeId);
    };
  },
  render: function()
  {
    var {recipes} = this.state,
        recipesBlock = [];
    
    for(var i = 0; i < recipes.length; i++)
    {
      recipesBlock.push(<li onClick={this.onClick(i)}>{recipes[i].name}</li>);
    }
    
    return (
      <div className="recipeBook__list">
        <h2>Recipe List</h2>
        <ul>{recipesBlock}</ul>
      </div>
    );
  }
});

module.exports = RecipeList;