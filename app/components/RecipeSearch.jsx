var React = require('react');

// Add Recipe
var RecipeAddSearch = React.createClass({
    getInitialState: function()
    {
        return {
          searchText: ''
        };
    },
    handleSearch: function(e)
    {
        this.setState({
          searchText: e.target.value.toLowerCase()
        },() => {
            this.props.onSearch(this.state.searchText);
        });
    },
    render: function()
    {
        return (
            <div className="recipeBook__search">
              <form>
                <label htmlFor="recipeSearch">Search:</label>
                <input id="recipeSearch" value={this.state.searchText} onChange={this.handleSearch} />
              </form>
            </div>
        );
    }
});

module.exports = RecipeAddSearch;