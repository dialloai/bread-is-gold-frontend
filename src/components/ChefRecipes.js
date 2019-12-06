import React from 'react';
import { Link } from "react-router-dom";

const ChefRecipes = props => {
    const {first_name, last_name, chef_image, chef_background, recipes } = props.currentChef

        return (
            <div>
                <div>
                    <h2>Chef {first_name} {last_name}'s Recipe List</h2>
                </div>

                <div>
                    <img className='chef-recipe-chef-img' alt={`Chef ${first_name} ${last_name}`} src={chef_image}/>
                </div>

                <div>
                    <p className='chef-recipe-chef-description'>{chef_background}</p>
                </div>

                <div>
                    <ul>
                        {recipes ? (recipes.map(recipe =>
                            <Link to={`/recipes/${recipe.id}`}>
                                <li className='each-recipe-item'>{recipe.recipe_name}</li>
                            </Link>
                            )): null}
                    </ul>
                </div>

            </div>
        );

}

export default ChefRecipes;