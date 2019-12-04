import React from 'react'
import HomeScreenHeader from "../components/HomeScreenHeader";
import HomeScreenLoginForm from "../components/HomeScreenLoginForm";
import HomeScreenCreateAccountForm from "../components/HomeScreenCreateAccountForm";

class HomeScreenContainer extends React.Component {

    createAccount = (accountInformation) => {
        console.log(accountInformation)
    }

    confirmLogin = (credentials) => {
        console.log(credentials)
    }

    render() {
        return(
            <div>
                <HomeScreenHeader/>
                <h3> Chef's Plate's at Your Dining Table</h3>
                <HomeScreenLoginForm confirmLogin={this.confirmLogin}/>
                <HomeScreenCreateAccountForm createAccount={this.createAccount} />
            </div>
        )
    }

}

export default HomeScreenContainer