import React, {Component} from 'react';
import NavBar from "../components/NavBar";
import ChefRecipes from "../components/ChefRecipes";

class ChefRecipesContainer extends Component {

    constructor(){
        super()

        this.state = {
            allChefs: [],
            currentChef: {}
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/chefs')
            .then(resp => resp.json())
            .then(chefArr => this.setState({
                allChefs: chefArr
            }, () => this.renderChefRecipe()))
    }

    renderChefRecipe = () => {
        this.setState({
            currentChef: this.state.allChefs.find(chef => chef.id === parseInt(this.props.match.url.split('/')[3]) )
        })
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div>
                    <ChefRecipes currentChef={this.state.currentChef} allChef={this.state.allChefs}/>
                </div>
            </div>
        );
    }
}

export default ChefRecipesContainer;