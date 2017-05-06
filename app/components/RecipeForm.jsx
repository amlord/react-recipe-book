var React = require('react');
var { hashHistory } = require('react-router');

// Add Recipe
var RecipeForm = React.createClass({
    getInitialState: function()
    {
        var {name, ingredients} = this.props;

        return {
          name: name ? name : '',
          ingredients: ingredients ? ingredients : []
        };
    },
    onNameChange: function(e)
    {
        this.setState({
          name: e.target.value
        },() => {
          this.handleRecipeUpdate();
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
        },() => {
          this.handleRecipeUpdate();
        });
    },
    onSubmit: function(e)
    {
      e.preventDefault();

      // check we have a recipe to save
      if(this.state.name !== '' && this.state.ingredients.length > 0)
      {
        // call the parent's 'recipe add' handler
        this.props.handleRecipeAdd({
          name: this.state.name,
          ingredients: this.state.ingredients
        });

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
    handleRecipeUpdate()
    {
      if(this.props.edit && this.props.id)
      {
        this.props.onRecipeUpdate({
          id: this.props.id,
          name: this.state.name,
          ingredients: this.state.ingredients
        });
      }
    },
    render: function()
    {
        return (
            <div className="recipeBook__add">
              <form onSubmit={this.onSubmit}>
                <label htmlFor="recipeName">Recipe Name:</label>
                <input id="recipeName" value={this.state.name} autoComplete="off" onChange={this.onNameChange} />

                <label htmlFor="recipeIngredients">Recipe Ingredients <small>(comma separated)</small>:</label>
                <textarea id="recipeIngredients" value={this.state.ingredients.join(', ')} onChange={this.onIngredientsChange}></textarea>

                <button className={"btn btn--primary" + (this.props.edit ? " hidden" : "")}>Add Recipe</button>
              </form>
            </div>
        );
    }
});

module.exports = RecipeForm;