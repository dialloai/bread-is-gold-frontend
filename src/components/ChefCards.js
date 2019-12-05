import React from 'react';

const ChefCards = props => {

    const {first_name, last_name, chef_image, chef_background} = props

    return (
        <div className='chef-card' >
            <h3>{first_name} {last_name}</h3>
            <img alt='chef image' src={chef_image} width='500px' height='500px'/>
            <p>{chef_background}</p>
        </div>
    )

}

export default ChefCards;