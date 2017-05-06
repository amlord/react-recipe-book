var React = require('react');
var RecipeForm = require('RecipeForm');

var Recipe = React.createClass({
    getInitialState: function()
    {
        return {
          open: false,
          edit: false
        };
    },
    handleToggleClick(){
        this.setState({
            open: !this.state.open
        });
    },
    handleEditClick(){
        this.setState({
            edit: true
        });
    },
    handleDoneClick(){
        this.setState({
            edit: false
        });
    },
    handleDeleteClick(){
        this.props.onRecipeDelete(this.props.id);
    },
    handleRecipeUpdate(recipe){
        this.props.onRecipeUpdate(recipe);
    },
    renderIngredients: function(ingredients){
        var ingredientList = [];

        for(var i = 0; i < ingredients.length; i++)
        {
            ingredientList.push(<li key={i}>{ingredients[i]}</li>);
        }

        return ingredientList;
    },
    render: function()
    {
        var {id, name, ingredients, className} = this.props;

        return (
            <li className="recipeItem">
                <article>
                    <header
                        className={"recipeItem__head" + (this.state.open ? " recipeItem__head--open" : "")}
                        onClick={this.handleToggleClick}>
                        <h1 className="recipeItem__title">{name}</h1>
                    </header>
                    <div className={"recipeItem__body" + (this.state.open ? "" : " hidden")}>
                        <div className={!this.state.edit ? "" : " hidden"}>
                            <h2 className="recipeItem__bodyTitle">Ingredients</h2>
                            <ul className="recipeItem__ingredients">
                                {this.renderIngredients(ingredients)}
                            </ul>
                        </div>
                        <div className={this.state.edit ? "" : " hidden"}>
                            <RecipeForm
                                id={this.props.id}
                                name={name}
                                ingredients={ingredients}
                                edit={true}
                                onRecipeUpdate={this.handleRecipeUpdate} />
                        </div>
                    </div>
                    <footer className={"recipeItem__foot" + (this.state.open ? "" : " hidden")}>
                        <button
                            className={"btn recipeItem__btn recipeItem__btn--done" + (!this.state.edit ? " hidden" : "")}
                            onClick={this.handleDoneClick}>Done</button>
                        <button
                            className={"btn recipeItem__btn recipeItem__btn--edit" + (this.state.edit ? " hidden" : "")}
                            onClick={this.handleEditClick}>Edit</button>
                        <button
                            className="btn recipeItem__btn recipeItem__btn--delete"
                            onClick={this.handleDeleteClick}>Delete</button>
                    </footer>
                </article>
            </li>
        );
    }
});

module.exports = Recipe;