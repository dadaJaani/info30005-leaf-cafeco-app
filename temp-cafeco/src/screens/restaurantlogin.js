import React, { Component } from 'react';
import '../styles/restaurantlogin.css';

import loginlogo from "../images/cafecologo.png";
import browserImage from "../images/undraw_browser.svg";
import searchImage from "../images/undraw_file_searching_duff.svg";

class restaurantlogin extends Component {
    render() {
        return (
            <div className = "login-container">
                <div className = "left-container">
                    <img className = "left-image" src = {browserImage} alt = "stylised image of a browser"/>

                </div>


                <div className = "middle-container">
                    <img className = "login-logo" src = {loginlogo} alt = "cafeco logo"/>

                    <h2 className = "login-title">
                        Login

                    </h2>

                    <div className = "input">
                        <p className = "username">
                            Username:

                        </p>

                        <p className = "password">
                            Password:

                        </p>

                        <input className = "input-form"/>

                        <input className = "input-form"/>

                    </div>

                    <button className = "restaurant-login-button">
                        Log in

                    </button>


                    <div className = "footnote">
                        <p className = "footnote-text">
                            {/*Referenced for how to insert spaces in text:
                            https://stackoverflow.com/questions/9792849/how-to-insert-spaces-tabs-in-text-using-html-css*/}
                            Not a partnered buisness? &ensp;

                            <a className = "text-link" href = "https://i.kym-cdn.com/entries/icons/original/000/027/916/hamster.jpg">

                                Return to homepage.

                            </a>
                        </p>
                    </div>
                </div>


                <div className = "right-container">
                    <img className = "right-image" src = {searchImage} alt = "stylised image of a magnifying glass looking at documents"/>

                </div>
            </div>
        );
    }
}

export default restaurantlogin;
