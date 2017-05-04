var React = require('react');

// Add Recipe
var Recipe = (props) => {
    var {name, ingredients} = props;

    return (
        <li className="recipeItem">
            <h2>{name}</h2>
        </li>
    );
};

module.exports = Recipe;