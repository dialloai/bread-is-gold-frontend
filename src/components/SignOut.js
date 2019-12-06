import React from 'react';
import { Link } from "react-router-dom";

const SignOut = () =>{

        return (
            <div className='sign-out-button-div'>
                <Link to='/'>
                <button className='sign-out-button'>Sign Out</button>
                </Link>
            </div>
        );
};

export default SignOut;