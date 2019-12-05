import React, {Component} from 'react';
import NavBar from "../components/NavBar";
import FavoriteRecipeList from "../components/FavoriteRecipeList";

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
                    .map(entry => entry.recipe.recipe_name)
                this.setState({
                    userFavorites: favorites
                })
            })
    }


    render() {
        return (

            <div>
                <NavBar/>
                <FavoriteRecipeList userFavorites={this.state.userFavorites}/>
            </div>

        );
    }
}

export default FavoriteRecipesContainer;