import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from "./Search";
import '../NavBar.css'

class NavBar extends React.Component{

    constructor(){
        super()

        this.state = {
            search: ''
        }
    }

    search = (event) => {
        console.log(event.target.value)
        this.setState({
            search: event.target.value
        })
    };

    render(){
        return(

            <div className='nav-bar-div'>
                <NavLink className='nav-bar-header' to='/'>Bread Is Gold</NavLink>

                <NavLink className='chefs-nav-link' to='/chefs'>Chefs</NavLink>

                <NavLink className='recipes-nav-link' to='/recipes'>Recipes</NavLink>

                <NavLink className='favorites-nav-link' to='/favorites'>My Favorites</NavLink>

                <Search className='search-bar' onChange={this.search}/>

            </div>
        )

    }

}

export default NavBar;