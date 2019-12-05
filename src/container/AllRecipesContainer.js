import React, {Component} from 'react';
import NavBar from "../components/NavBar";
import RecipeList from "../components/RecipeList";
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
            <div className='all-recipes-container-div'>
                <NavBar/>
                <ul className='all-recipes-list'>
                    {this.state.allRecipes.map(recipe =>
                        <RecipeList {...recipe} key={recipe.id} />)}

                </ul>
            </div>

        );
    }
}

export default AllRecipesContainer;