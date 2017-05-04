var React = require('react');
var Navigation = require('Navigation');

var RecipeBookApp = React.createClass({
    getInitialState: function()
    {
        return {
            recipes: [
                {
                    id: 1,
                    name: 'Spaghetti Bolognese',
                    ingredients: [
                        'mince meat',
                        'pasta',
                        'tomato sauce'
                    ]
                },
                {
                    id: 2,
                    name: 'Toad in the Hole',
                    ingredients: [
                        'Sausages',
                        'Milk',
                        'Flour',
                        'Egg',
                        'Oil'
                    ]
                }
            ]
        };
    },
    render: function()
    {
        var {recipes} = this.state;

        var children = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {
                recipes: recipes
            })
        })

        return (
            <div>
                <Navigation />
                <div className="recipeBook__page">
                    {children}
                </div>
            </div>
        );
    }
});

module.exports = RecipeBookApp;