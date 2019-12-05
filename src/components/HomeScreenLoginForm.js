import React from 'react'
import {Link} from "react-router-dom";

class HomeScreenLoginForm extends React.Component {

    constructor(){
        super()

        this.state = {
            username: 'username',
            password: 'password'
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        this.props.confirmLogin(this.state)
        event.target.reset()
    }


    render() {
        return (
            <form className='login-form' onSubmit={(event) => this.handleSubmit(event)}>
                <input className='login-username-input' type="text" name="username" placeholder="username" onChange={this.handleChange}/>
                <br/>
                <input className='login-password-input' type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                <br/>
                <Link to='/favorites'>
                    <button className='sign-in-button'>Sign In</button>
                </Link>
                <br/>
            </form>
        )
    }


}

export default HomeScreenLoginForm