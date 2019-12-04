import React from 'react'

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
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
                <br/>
                <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                <br/>
                <button>Sign In</button>
                <br/>
            </form>
        )
    }


}

export default HomeScreenLoginForm