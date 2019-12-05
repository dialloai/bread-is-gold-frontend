import React, {Component} from 'react';
import NavBar from "../components/NavBar";
import FavoriteRecipeList from "../components/FavoriteRecipeList";
import '../FavoriteRecipesContainer.css'
import {Link} from "react-router-dom";

class FavoriteRecipesContainer extends Component {

    constructor(){

        super()

        this.state = {
            userFavorites: [],
            recipeNames: []
        }
    }

    componentDidMount() {
        let favorites = [];
        fetch("http://localhost:3000/favorites")
            .then(resp => resp.json())
            .then(userData => {
                // TODO: Filter based on user passed in
                favorites = userData.filter(entry => entry.user.username ==='cpark')
                    .map(entry => entry)
                this.setState({
                    userFavorites: favorites
                })
            })
    }


    render() {
        return (

            <div>
                <NavBar/>
                <div className='favorite-recipes-container-div'>
                    <div>
                        <h3 className='favorite-recipes-header'>My Favorite Recipes</h3>
                    </div>
                    <FavoriteRecipeList userFavorites={this.state.userFavorites}/>
                </div>
            </div>

        );
    }
}

export default FavoriteRecipesContainer;