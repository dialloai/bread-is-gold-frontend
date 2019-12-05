import React, {Component} from 'react';
import WelcomeScreenHeader from "../components/WelcomeScreenHeader";
import '../WelcomeContainer.css'
import { Link } from "react-router-dom";

class WelcomeContainer extends Component {
    render() {
        return (
            <div className='welcome-screen-container'>
                <WelcomeScreenHeader/>
                <div className='welcome-img-div'>
                    <img className='welcome-img' alt="Chef Massimo Bottura" src='https://www.finedininglovers.com/sites/g/files/xknfdk626/files/original_massimo-Bottura-lasagna-soup.png'/>
                </div>
                <div className='welcome-message-div'>
                    <p className='welcome-message'>
                        Welcome to Bread Is Gold.<br/>
                        We are really glad to have you join us.<br/>
                        <br/>
                        This is a website based on a recipe book called<br/>
                        “Bread Is Gold” by Chef Massimo Bottura and<br/>
                        his 60 other chef friends.<br/>
                        <br/>
                        The recipes in this book were made to feed the<br/>
                        hungry homeless people or people with really low income.<br/>
                        <br/>
                        This soup kitchen is called “Food for Soul,” and<br/>
                        it is a non-profit organization which was establised by<br/>
                        the main chef Massimo Bottura himself.<br/>
                        <br/>
                        To Learn More about “Food For soul,” click the logo below.<br/>
                        Otherwise, click continue to see your account.<br/>
                    </p>
                    <Link to='/favorites'>
                    <button className='continue-button'>Continue</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default WelcomeContainer;