import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import NavBar from "../components/NavBar";

class About extends Component {

    logInUser = (user) => {
        this.props.logInUser(user)
    }

    logOutUser = () => {
        this.props.logOutUser()
    }

    goToProfile = () => {
        this.props.history.push('/user/' + this.props.user.name)
    }

    signUpUser = (user) => {
        this.props.signUpUser(user)
    }

    render () {
        return(
            <div>
                <NavBar
                    {...this.props}
                    logOutUser={this.logOutUser}
                    logInUser={this.logInUser}
                    signUpUser={this.signUpUser}
                    userLoggedIn={this.props.userLoggedIn}
                    goToProfile={this.goToProfile}
                />

            </div>
        )
    }
}

export default withRouter(About)