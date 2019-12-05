import React from 'react';

const RecipeDetails = props => {
    console.log(props.renderRecipe)
    const {recipe_name, ingredients, directions} = props.renderRecipe
        return (
            <div className='recipe-show-page'>
                <h3>{recipe_name}</h3>
                <h4>Ingredients</h4>
                <p>{ingredients}</p>
                <h4>Directions</h4>
                <p>{directions}</p>
            </div>
        );

}

export default RecipeDetails;