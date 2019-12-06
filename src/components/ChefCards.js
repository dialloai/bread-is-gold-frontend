import React from 'react';
import '../ChefContainer.css'
import { Link } from "react-router-dom";

const ChefCards = props => {

    const {id, first_name, last_name, chef_image, chef_background} = props;

    return (
        <div className='card'>
            <Link to={`/recipes/chefs/${id}`}>
                <h2 className='chef-name'>{first_name} {last_name}</h2>
                <img className='chef-image' alt='chef image' src={chef_image} />
                <div>
                    <p className='chef-description'>{chef_background}</p>
                </div>
            </Link>
        </div>
    )

}

export default ChefCards;