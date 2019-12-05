import React from 'react';

const Search  = props => {
    return (
        <div>
            <input className="search-bar" placeholder='Search' onChange={props.onChange} />
        </div>
    );
}

export default Search;