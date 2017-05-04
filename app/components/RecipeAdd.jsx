var React = require('react');
var { hashHistory } = require('react-router');

// Add Recipe
var RecipeAdd = React.createClass({
    getInitialState: function()
    {
        return {
          name: '',
          ingredients: []
        };
    },
    onNameChange: function(e)
    {
        this.setState({
          name: e.target.value
        });
    },
    onIngredientsChange: function(e)
    {
        // split comma-separated string into array
        var ingredients = e.target.value.split(',');

        // remove leading spaces from array elements
        ingredients = ingredients.map((ingredient) => {
          return ingredient.trimLeft();
        });

        // update the state
        this.setState({
          ingredients: ingredients
        });
    },
    onSubmit: function(e)
    {
      e.preventDefault();

      // check we have a recipe to save
      if(this.state.name !== '' && this.state.ingredients.length > 0)
      {
        // call the parent's 'recipe add' handler
        this.props.handleRecipeAdd(this.state);

        // empty the state
        this.setState({
          name: '',
          ingredients: []
        },() => {
          // route to the recipe list tab
          hashHistory.push('/');
        });
      }
    },
    render: function()
    {
        return (
            <div className="recipeBook__add">
              <h2>Recipe Add</h2>
              <form onSubmit={this.onSubmit}>
                <label htmlFor="recipeName">Recipe Name:</label>
                <input id="recipeName" value={this.state.name} onChange={this.onNameChange} />

                <label htmlFor="recipeIngredients">Recipe Ingredients <small>(comma separated)</small>:</label>
                <textarea id="recipeIngredients" value={this.state.ingredients.join(', ')} onChange={this.onIngredientsChange}></textarea>

                <button className="btn btn--primary">Add Recipe</button>
              </form>
            </div>
        );
    }
});

module.exports = RecipeAdd;