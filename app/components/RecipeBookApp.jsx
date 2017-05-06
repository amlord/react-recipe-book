var React = require('react');
var Navigation = require('Navigation');

var RecipeBookApp = React.createClass({
    getInitialState: function()
    {
        return {
            recipes: [
                {
                    id: this.uniqueId(),
                    name: 'Spaghetti Bolognese',
                    ingredients: [
                        'mince meat',
                        'pasta',
                        'tomato sauce'
                    ]
                },
                {
                    id: this.uniqueId(),
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
    uniqueId: function() {
        return 'id-' + Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 16);
    },
    handleRecipeAdd: function(recipe){
        var {recipes} = this.state;

        // add an id to the added recipe
        recipe.id = this.uniqueId();

        // add recipe to the recipes array
        recipes.push(recipe);

        // update the state
        this.setState({
            recipes: recipes
        });
    },
    render: function()
    {
        var {recipes} = this.state;

        var children = React.Children.map(this.props.children, (child) => {
 
            // check if we're on the recipe 'add' compoent
            if( child.props.route.path !== undefined &&
                child.props.route.path === 'add')
            {
                return React.cloneElement(child, {
                    handleRecipeAdd: this.handleRecipeAdd
                });
            }

            return React.cloneElement(child, {
                recipes: recipes
            });
        });

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