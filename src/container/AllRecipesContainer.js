import React, {Component} from 'react';
import NavBar from "../components/NavBar";
import RecipeList from "../components/RecipeList";
import '../AllRecipesContainer.css'
import { Route } from "react-router-dom";
import SignOut from "../components/SignOut";
import '../SignOut.css'


class AllRecipesContainer extends Component {

    constructor(){

        super()

        this.state = {
            allRecipes: [],
            search: ''
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

    handleSearch = (event) => {
        this.setState( {
            search: event.target.value
        })
    }

    filterSearch = () => {
        return this.state.allRecipes.filter(recipe => recipe.recipe_name === this.state.search)
    }

    render() {
        return (
            <div>
                <NavBar search={this.handleSearch} />
                <div className='all-recipes-container-div'>
                    <div className='recipes-list-header-div'>
                        <h2 className='recipes-list-header'>Recipes List</h2>
                    </div>
                    <div className='all-recipes-list-div'>
                        <ul className='all-recipes-list'>
                            {this.state.allRecipes.map(recipe =>
                            <RecipeList {...recipe} key={recipe.id} />)}
                            {/*{this.state.allRecipes.filter(recipe => recipe.name === this.state.search*/}
                            {/*    <RecipeList {...recipe} key={recipe.id} />)}*/}
                            {/*{this.filterSearch().map(recipe => <RecipeList {...recipe} key={recipe.id} />)}*/}

                        </ul>
                    </div>
                    <div className='sign-out-button-div'>
                        <SignOut/>
                    </div>
                </div>
            </div>

        );
    }
}


export default AllRecipesContainer;