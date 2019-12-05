import React from 'react';
import { Link } from "react-router-dom";

const FavoriteRecipeList = (props) => {

    return (
        <div>
            <h3>My Favorite Recipes</h3>
            <ul className='favorites-list'>
                {props.userFavorites.map(fav =>
                    <Link to={`recipes/${fav.recipe_id}`}>
                    <li key={fav.id}>{fav.recipe.recipe_name}</li>
                    </Link>
                )}
            </ul>
        </div>
    );
}

export default FavoriteRecipeList;