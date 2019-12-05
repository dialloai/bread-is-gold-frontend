import React from 'react';

const FavoriteRecipeList = (props) => {
    return (
        <div>
            <h3>My Favorite Recipes</h3>
            <ul className='favorites-list'>
            {props.userFavorites.map(fav =>
                <li key={fav}>{fav}</li>
            )}
            </ul>
        </div>
    );
}

export default FavoriteRecipeList;