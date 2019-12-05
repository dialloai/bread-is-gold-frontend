import React from 'react';
import { Link } from "react-router-dom";

const RecipeList = props => {

    const{id, recipe_name} = props

    return (
        <div>
            <Link to={`recipes/${id}`}>
                <li recipeInfo={props}>{recipe_name}</li>
            </Link>
        </div>
    );

}

export default RecipeList;
