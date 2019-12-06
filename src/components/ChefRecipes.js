import React from 'react';
import { Link } from "react-router-dom";

const ChefRecipes = props => {
    const {first_name, last_name, chef_image, chef_background, recipes } = props.currentChef

        return (
            <div>
                <div>
                    <div className='chef-recipe-page-header-div'>
                        <h2 className='chef-recipe-page-header'>Chef {first_name} {last_name}'s Recipe List</h2>
                    </div>
                    <div className='chef-and-recipe-show-page-card'>
                        <div>
                            <img className='chef-recipe-chef-img' alt={`Chef ${first_name} ${last_name}`} src={chef_image}/>
                        </div>

                        <div>
                            <p className='chef-recipe-chef-description'>{chef_background}</p>
                        </div>
                    </div>
                </div>

                <div className='chefs-all-recipe-div'>
                    <ul className='chefs-all-recipe'>
                        {recipes ? (recipes.map(recipe =>
                            <Link to={`/recipes/${recipe.id}`}>
                                <li className='each-chef-recipe-item'>{recipe.recipe_name}</li>
                            </Link>
                            )): null}
                    </ul>
                </div>

            </div>
        );

}

export default ChefRecipes;