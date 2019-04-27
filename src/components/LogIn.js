import React, { Component } from 'react';


// import * as API from '../utils/api'

import '../styles/main.css'

class LogIn extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = () => {
        this.setState({
            username: this.refs.usernameIN.value,
            password: this.refs.passwordIN.value,
        })
    }


    doLogIn = (event) => {
        event.preventDefault();

        this.props.doLogIn({
            name: 'asdasd',
        });
    }


    closeLogin = (user) => {
        this.props.closeLogin()
    }


    render(){
        console.log(this.props)


        if (this.props.visible) {
            return(
                <div  className={'signup'}>
                    <div
                        className={'signup-backdrop'}
                        onClick={this.closeLogin}
                    ></div>

                    <div className={'login-container'}>

                        <div  className={'signup-title'}>
                            Log In
                        </div>

                        <input
                            className={'signup-input'}
                            placeholder={'Username'}
                            type="text"
                            value={this.state.username}
                            ref="usernameIN"
                            onChange={this.handleChange}
                        />


                        <input
                            className={'signup-input'}
                            placeholder={'Password'}
                            type={'password'}
                            value={this.state.password}
                            ref="passwordIN"
                            onChange={this.handleChange}/>

                        <div className={'signup-button-container'}>
                            <button
                                className={'signup-button-close'}
                                onClick={this.closeLogin}>Cancel
                            </button>
                            <button
                                className={'signup-button'}
                                onClick={this.doLogIn}>Log In</button>
                        </div>



                    </div>

                </div>
            )
        } else {
            return(
                <div></div>
            )
        }

    }
}

export default LogIn;
