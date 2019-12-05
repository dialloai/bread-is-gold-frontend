import React, {Component} from 'react';
import NavBar from "./NavBar";
import { Router } from 'react-router-dom';

class RecipeDetails extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <NavBar/>

            </div>
        );
    }
}

export default RecipeDetails;