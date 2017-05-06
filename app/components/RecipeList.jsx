var React = require('react');
var Recipe = require('Recipe');
var RecipeSearch = require('RecipeSearch');

// var RecipeStore = require('RecipeStore');
// var recipeStore = new RecipeStore('_amlord_recipes');

var RecipeList = React.createClass({
    handleSearch: function(searchText){
        //this.props.onSearch(searchText);
        console.log(searchText);
    },
    renderRecipes: function()
    {
        var {recipes} = this.props;

        return recipes.map((recipe) => {
            return (
                <Recipe key={recipe.id} {...recipe} />
            );
        });
    },
    render: function()
    {
        return (
            <div className="recipeBook__list">
                <h2>Recipe List</h2>
                <RecipeSearch onSearch={this.handleSearch}/>
                <ul>{this.renderRecipes()}</ul>
            </div>
        );
    }
});

module.exports = RecipeList;