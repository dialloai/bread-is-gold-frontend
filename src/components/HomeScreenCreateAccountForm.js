import React from 'react'


class HomeScreenCreateAccountForm extends React.Component {

    constructor(){
        super()

        this.state = {
            username: 'username',
            password: 'password',
            firstName: 'first name',
            lastName: 'last name'
        }
    }

    updateAccountInformation = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = event => {
        this.props.createAccount(this.state);
        event.target.reset()
    }

    render() {
        return(
            <div>
                <form className='create-account-form' onSubmit={(event) => this.submit(event)}>
                        <input className='create-username-input' type="text" name="username" placeholder="username" onChange={this.updateAccountInformation}/>
                        <br/>
                        <input className='create-password-input'  type="password" name="password" placeholder="password" onChange={this.updateAccountInformation}/>
                        <br/>
                        <input className='create-first-name-input' type="text" name="firstName" placeholder="firstName" onChange={this.updateAccountInformation}/>
                        <br/>
                        <input className='create-last-name-input' type="text" name="lastName" placeholder="lastName" onChange={this.updateAccountInformation}/>
                        <br/>
                        <button className='create-account-button'>Create Account</button>
                </form>
            </div>
        )
    }
}

export default HomeScreenCreateAccountForm