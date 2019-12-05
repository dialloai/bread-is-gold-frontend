import React, {Component} from 'react';
import NavBar from "../components/NavBar";
import RecipeList from "../components/RecipeList";
import '../AllRecipesContainer.css'
import { Route } from "react-router-dom";


class AllRecipesContainer extends Component {

    constructor(){

        super()

        this.state = {
            allRecipes: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/recipes")
            .then(resp => resp.json())
            .then(allRecipesArr => {
                this.setState({
                   allRecipes: allRecipesArr
                })
            })
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className='all-recipes-container-div'>
                    <div className='recipes-list-header-div'>
                        <h2 className='recipes-list-header'>Recipes List</h2>
                    </div>
                    <div className='all-recipes-list-div'>
                        <ul className='all-recipes-list'>
                            {this.state.allRecipes.map(recipe =>
                            <RecipeList {...recipe} key={recipe.id} />)}
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default AllRecipesContainer;