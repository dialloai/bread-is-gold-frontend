import React from 'react';
import { Link } from "react-router-dom";

const FavoriteRecipeList = (props) => {

    return (
        <div className='favorites-list-div'>
            <ul className='favorites-list'>
                {props.userFavorites.map(fav =>
                    <Link to={`recipes/${fav.recipe_id}`}>
                    <li className='each-favorite-recipe' key={fav.id}>{fav.recipe.recipe_name}</li>
                    </Link>
                )}
            </ul>
        </div>
    );
}

export default FavoriteRecipeList;