import React, {Component} from 'react';
import NavBar from "../components/NavBar";
import ChefCards from "../components/ChefCards";
import SignOut from "../components/SignOut";
import '../SignOut.css'

class ChefsContainer extends Component {

    constructor(){
        super();

        this.state = {
            allChefs: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/chefs')
            .then(resp => resp.json())
            .then(chefArr => this.setState({
                allChefs: chefArr
            }))
    }

    render() {
        return (
            <div className='chefs-container'>
                <NavBar/>
                <div className='chef-card'>
                    {this.state.allChefs.map(chef => <ChefCards {...chef}/>)}
                </div>
                <SignOut/>
            </div>
        );
    }
}

export default ChefsContainer;