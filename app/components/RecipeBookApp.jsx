var React = require('react');
var Navigation = require('Navigation');

var RecipeBookApp = React.createClass({
    getInitialState: function()
    {
        return {
            recipes: [
                {
                    id: 1,
                    text: 'abc'
                },
                {
                    id: 2,
                    text: 'def'
                }
            ]
        };
    },
    render: function()
    {
        return (
            <div>
                <Navigation />
                <div className="recipeBook__page">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = RecipeBookApp;