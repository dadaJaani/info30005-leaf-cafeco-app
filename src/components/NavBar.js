import React, { Component } from 'react'



import SignUp from './SignUp'
import LogIn from './LogIn'

import { Link } from "react-router-dom";



class NavBar extends Component {

    constructor (props) {
        super(props)

        this.state = {
            viewSignup: false,
            viewLogin: false,

        }
    }

    // Functions for Log In Modal
    showLogin = () => {
        this.setState({
            viewLogin: true,
        })
    }

    closeLogin = (user) => {
        this.setState({
            viewLogin: false,
        })
    }

    doLogIn = (user) => {
        this.closeLogin()
        this.props.logInUser(user)
    }

    // Functions for Sign Up Modal
    showSignup = () => {
        this.setState({
            viewSignup: true,
        })
    }

    closeSignUp = () => {
        this.setState({
            viewSignup: false,
        })
    }

    doSignUp = (user) => {
        this.closeSignUp()
        this.props.signUpUser(user)
    }
    

    logOutUser = () => {
        this.props.logOutUser()
        if (this.props.history.location.pathname.search('/user') !== -1) {
            this.props.history.replace('/dashboard')
        }

    }

    goToProfile = () => {
        this.props.goToProfile()
    }

    render () {
        console.log(this.props.history.location.pathname)

        return (
            <div className={'navbar-container'}>

                <LogIn
                    history={this.props.history}
                    visible={this.state.viewLogin}
                    closeLogin={this.closeLogin}
                    doLogIn={this.doLogIn}
                />
                <SignUp 
                    history={this.props.history} 
                    visible={this.state.viewSignup} 
                    closeSignUp={this.closeSignUp}
                    doSignUp={this.doSignUp}
                />


                <div className={'navbar-item'}>
                    <Link to='/dashboard' className="navbar-logo" />
                </div>



                { this.props.userLoggedIn
                    ? (<div className={'navbar-buttons'}>

                            <Link
                                className={this.props.history.location.pathname === '/dashboard'
                                    ? 'navbar-button navbar-button-selected'
                                    : 'navbar-button'
                                }
                                to={'/dashboard'}
                            >
                                Home
                            </Link>



                            <Link
                                className={this.props.history.location.pathname === '/restaurants'
                                    ? 'navbar-button navbar-button-selected'
                                    : 'navbar-button'
                                }
                                to={'/restaurants'}
                            >
                                All Eateries
                            </Link>

                            <div
                                className={this.props.history.location.pathname.search('/user') !== -1
                                    ? 'navbar-button navbar-button-selected'
                                    : 'navbar-button'
                                }
                                onClick={this.goToProfile}
                            >
                                My Profile
                            </div>


                            <Link
                                className={this.props.history.location.pathname === '/about'
                                    ? 'navbar-button navbar-button-selected'
                                    : 'navbar-button'
                                }
                                to={'/about'}
                            >
                                About
                            </Link>

                            <div
                                className={'navbar-button navbar-button-logout'}
                                onClick={this.logOutUser}
                            >
                                Log Out
                            </div>
                        </div>)

                    : (<div className={'navbar-item navbar-buttons'}>
                            <Link
                                className={this.props.history.location.pathname === '/dashboard'
                                    ? 'navbar-button navbar-button-selected'
                                    : 'navbar-button'
                                }
                                to={'/dashboard'}
                            >
                                Home
                            </Link>

                            <Link
                                className={this.props.history.location.pathname === '/restaurants'
                                    ? 'navbar-button navbar-button-selected'
                                    : 'navbar-button'
                                }
                                to={'/restaurants'}
                            >
                                All Eateries
                            </Link>

                            <Link
                                className={this.props.history.location.pathname === '/about'
                                    ? 'navbar-button navbar-button-selected'
                                    : 'navbar-button'
                                }
                                to={'/about'}
                            >
                                About
                            </Link>

                            <div
                                className={'navbar-button'}
                                onClick={this.showLogin}
                            >
                                Log In
                            </div>


                            <div
                                className={'navbar-button'}
                                onClick={this.showSignup}
                            >
                                Sign Up
                            </div>
                        
                        
                        </div>)

                }



            </div>
        )
    }
}



export default NavBar