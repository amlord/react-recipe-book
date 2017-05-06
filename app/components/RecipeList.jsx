var React = require('react');
var Recipe = require('Recipe');
var RecipeSearch = require('RecipeSearch');

var RecipeList = React.createClass({
    handleSearch: function(searchText){
        this.props.onSearch(searchText);
    },
    handleRecipeDelete: function(recipeId){
        this.props.onRecipeDelete(recipeId);
    },
    handleRecipeUpdate: function(recipe){
        this.props.onRecipeUpdate(recipe);
    },
    renderRecipes: function()
    {
        var {recipes} = this.props;

        return recipes.map((recipe) => {
            return (
                <Recipe
                    key={recipe.id}
                    className="recipeItem"
                    {...recipe}
                    onRecipeDelete={this.handleRecipeDelete}
                    onRecipeUpdate={this.handleRecipeUpdate} />
            );
        });
    },
    render: function()
    {
        return (
            <div className="recipeBook__list">
                <RecipeSearch onSearch={this.handleSearch}/>
                <ul className="recipeItems">{this.renderRecipes()}</ul>
            </div>
        );
    }
});

module.exports = RecipeList;