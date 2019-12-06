import React, {Component} from 'react';
import NavBar from "../components/NavBar";
import RecipeDetails from "../components/RecipeDetails";
import SignOut from "../components/SignOut";


class RecipeDetailsContainer extends Component {

    constructor(){
        super()

        this.state = {
            allRecipes: [],
            currentRecipe: {}
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/recipes')
            .then(resp => resp.json())
            .then(allRecipesArr => this.setState({
                allRecipes: allRecipesArr
            }, () => this.renderRecipe()))
    }

    //write a function that goes through allRecipes in state and
    // find a recipe that matches the id in the url

    renderRecipe = () => {
        this.setState({
            currentRecipe: this.state.allRecipes.find(recipe => recipe.id === parseInt(this.props.match.url.split('/')[2]) )
        })
    }


    render() {

        return (
            <div>
                <NavBar/>
                <RecipeDetails renderRecipe={this.state.currentRecipe} allRecipes={this.state.allRecipes}/>
                <SignOut/>
            </div>
        );
    }
}

export default RecipeDetailsContainer;