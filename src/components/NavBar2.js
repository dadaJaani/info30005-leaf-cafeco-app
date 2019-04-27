import React, { Component } from 'react'

import { Link } from "react-router-dom"



import SignUp from './SignUp'
import LogIn from './LogIn'



class NavBar2 extends Component {

    constructor (props) {
        super(props)

        this.state = {
            viewSignup: false,
            viewLogin: false,

        }
    }

    showLogin = () => {
        this.setState({
            viewLogin: true,
        })
    }

    closeLogin = () => {
        this.setState({
            viewLogin: false,
        })
    }


    showSignup = () => {
        this.setState({
            viewSignup: true,
        })
    }

    logOutUser = () => {
        this.props.logOutUser()
    }

    render () {
        return (
            <div className={'navbar-container'}>

                <LogIn visible={this.state.viewLogin} closeLogin={this.closeLogin} />
                <SignUp  visible={this.state.viewSignup} closeSignUp={this.closeSignUp} />

                <div className={'navbar-item'}>
                    <button className={'navbar-button navbar-item'}>
                        Become A Partner
                    </button>
                </div>


                <div
                    className={'navbar-logo navbar-item'}
                >CAFECO </div>

                <div className={'navbar-item navbar-buttons'}>

                    <Link
                        className={'navbar-button'}
                        to={'/dashboard'}
                    >
                        Home
                    </Link>

                    |

                    <button
                        className={'navbar-button'}
                    >
                        Rewards
                    </button>

                    |

                    <button
                        className={'navbar-button'}
                        onClick={this.logOutUser}
                    >
                        Log Out
                    </button>
                </div>





            </div>
        )
    }
}



export default NavBar2