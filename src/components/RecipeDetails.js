import React from 'react';
import '../RecipeDetail.css'

const RecipeDetails = props => {
    console.log(props.renderRecipe)
    const {recipe_name, ingredients, directions} = props.renderRecipe
        return (
            <div className='recipe-show-page'>
                <h3 className='recipe-detail-name-header'>{recipe_name}</h3> <br/>
                <button className='add-favorite-button'>Add to Favorites</button>
                <h4 className='recipe-detail-ingredients-header'>Ingredients</h4>
                <p className='recipe-detail-ingredients-list'>{ingredients}</p>
                <h4 className='recipe-detail-directions-header'>Directions</h4>
                <p className='recipe-detail-directions-list'>{directions}</p>
            </div>
        );

}

export default RecipeDetails;