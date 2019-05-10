import React, { Component } from 'react';
import '../styles/restaurantlogin.css';
import '../styles/main.css';

import { Link, withRouter } from "react-router-dom";

import loginlogo from "../assets/cafecologo.png";
import browserImage from "../assets/undraw_browser.svg";
import searchImage from "../assets/undraw_file_searching_duff.svg";
import { IoIosAddCircle, IoIosCheckmarkCircle } from "react-icons/io";

import * as API from "../utils/api";

class PartnerLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            usernameIN: '',
            passwordIN: '',
            showStatus: false,
            usernameExists: false,
            validity: false,
            passwordError: '',
        }
    }

    logInPartner = () => {

        if (this.state.validity) {

            this.props.logInPartner({
                id: this.state.usernameIN,
                password: this.state.passwordIN,
            })
                .then( i => {
                    this.props.history.replace('/partner/home')
                }, err => {
                    this.setState({
                        passwordError: 'Incorrect Password'
                    })
                })

        }
    }

    handleChange = () => {
        this.setState({
            usernameIN: this.refs.usernameIN.value,
            passwordIN: this.refs.passwordIN.value,
        })

        if (this.state.usernameExists && this.state.passwordIN !== '') {
            this.setState({
                validity: true
            })
        } else {
            this.setState({
                validity: false
            })
        }
    }

    handleChangeUser = () => {
        if (this.state.usernameIN !== ''){
            let username = this.refs.usernameIN.value
            let found = this.props.restaurants.find( item => item.id === username)
            if (!found){
                this.setState({
                    showStatus: true,
                    usernameExists: false
                })
            } else {
                this.setState({
                    showStatus: true,
                    usernameExists: true
                })
            }
            if (found !== '' && this.state.passwordIN !== '') {
                this.setState({
                    validity: true
                })
            } else {
                this.setState({
                    validity: false
                })
            }
        } else {
            this.setState({
                showStatus: false,
            })
        }


        

    }

    render() {
        return (
            <div className = "login-container">
                <div className = "left-container">
                    <img className="left-image" src={browserImage} alt = "stylised image of a browser"/>
                </div>

                <div className = "middle-container">
                    <div className = "login-logo">
                        <img  src={loginlogo} alt = "cafeco logo"/>
                    </div>

                    <h2 className = "login-title">
                        Login

                    </h2>

                    <div className = "input">
                        <div className = "username">
                            Username
                        </div>

                        <input
                            onChange={this.handleChange}
                            onBlur={this.handleChangeUser}
                            ref='usernameIN'
                        />

                        <div className={ this.state.showStatus
                            ? 'partner-input-check-container'
                            : 'partner-input-check-container invisible'
                        }>
                            {this.state.usernameExists
                                ?
                                <IoIosCheckmarkCircle
                                    className={'signup-input-check'}
                                />

                                :
                                <IoIosAddCircle
                                    className={'signup-input-cross'}
                                />
                            }
                        </div>

                        <div className = "password">
                            Password
                        </div>
                        <input
                            type='password'
                            ref='passwordIN'
                            onChange={this.handleChange}
                        />

                        <button
                            className={this.state.validity
                                ? "restaurant-login-button"
                                : "restaurant-login-button-disabled"

                            }
                            onClick={this.logInPartner}
                        >
                            Log in
                        </button>

                        <div style={{color: 'red'}}>
                            {this.state.passwordError}
                        </div>
                    </div>



                    <div className = "footnote">
                        <p className = "footnote-text">
                            Not a partnered buisness?
                        </p>
                        <Link className = "text-link" to = "/dashboard">
                            Return to homepage.
                        </Link>
                    </div>

                </div>


                <div className = "right-container">
                    <img className = "right-image" src = {searchImage} alt = "stylised image of a magnifying glass looking at documents"/>

                </div>
            </div>
        );
    }
}

export default withRouter(PartnerLogin);
