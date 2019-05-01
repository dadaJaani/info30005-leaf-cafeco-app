import React, { Component } from 'react';

import * as API from '../utils/api'

import { IoIosCheckmarkCircle, IoIosAddCircle } from 'react-icons/io'


import '../styles/main.css'

class LogIn extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            showStatusUser: false,
            showStatusPassword: false,
            usernameExists: false,
            passwordCorrect: false,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = () => {
        this.setState({
            username: this.refs.usernameIN.value,
            password: this.refs.passwordIN.value,
        })
    }

    handleChangeUser = () => {
        if (this.refs.usernameIN.value !== ''){
            API.checkUserID(this.refs.usernameIN.value).then(res =>
                this.setState({
                    showStatusUser: true,
                    usernameExists: res
                })
            )
        } else {
            this.setState({
                showStatusUser: false,
            })
        }
    }


    doLogIn = (event) => {
        event.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        }

        API.login(user).then(res => {
            console.log(res)
            if (res === false) {
                this.setState({
                    showStatusPassword: true,
                    passwordCorrect: res
                })

            } else {
                this.setState({
                    username: '',
                    password: '',
                    showStatusUser: false,
                    showStatusPassword: false,
                    usernameExists: false,
                    passwordCorrect: false,
                })
                this.props.doLogIn(res)
            }
        })


    }


    closeLogin = (user) => {
        this.props.closeLogin()
    }


    render(){


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

                        <span className={'signup-input-container'}>
                            <input
                                className={'signup-input signup-input-user'}
                                placeholder={'Username'}
                                type="text"
                                value={this.state.username}
                                ref="usernameIN"
                                onChange={this.handleChange}
                                onBlur={this.handleChangeUser}
                            />

                            <div className={ this.state.showStatusUser
                                ? 'signup-input-check-container'
                                : 'signup-input-check-container invisible'
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
                        </span>

                        <span className={'signup-input-container'}>
                            <input
                                className={'signup-input signup-input-user'}
                                placeholder={'Password'}
                                type={'password'}
                                value={this.state.password}
                                ref="passwordIN"
                                onChange={this.handleChange}
                            />

                            <div className={ this.state.showStatusPassword
                                ? 'signup-input-check-container'
                                : 'signup-input-check-container invisible'
                            }>
                                {this.state.passwordCorrect
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
                        </span>

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
