import React from 'react';
import '../ChefContainer.css'

const ChefCards = props => {

    const {first_name, last_name, chef_image, chef_background} = props

    return (
        <div className='card'>
            <h2 className='chef-name'>{first_name} {last_name}</h2>
            <img className='chef-image' alt='chef image' src={chef_image} />
            <div>
            <p className='chef-description'>{chef_background}</p>
            </div>
        </div>
    )

}

export default ChefCards;