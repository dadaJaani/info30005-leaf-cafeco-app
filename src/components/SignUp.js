import React, { Component } from 'react';

import * as API from '../utils/api'

import '../styles/main.css'
import {IoIosAddCircle, IoIosCheckmarkCircle} from "react-icons/io";

class SignUp extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            fname: '',
            lname: '',
            email: '',
            password: '',
            cpassword: '',
            showStatusUser: false,
            usernameExists: false,
            showStatusEmail: false,
            emailExists: false,

            showStatusPassword: false,
            passwordCorrect: false,
            formErrors: true,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = () => {
        this.setState({
            username: this.refs.usernameIN.value,
            fname: this.refs.fnameIN.value,
            lname: this.refs.lnameIN.value,
            email: this.refs.emailIN.value,
            password: this.refs.passwordIN.value,
            cpassword: this.refs.cpasswordIN.value,
        })

        if (this.refs.cpasswordIN.value !== '' && this.refs.passwordIN.value !== ''){

            if (this.refs.cpasswordIN.value ===  this.refs.passwordIN.value) {
                this.setState({
                    showStatusPassword: true,
                    passwordCorrect: true
                })
            } else {
                this.setState({
                    showStatusPassword: true,
                    passwordCorrect: false
                })
            }
        } else {
            this.setState({
                showStatusPassword: false,
            })
        }

        this.setState((prevState) =>  {
            const { username, emailExists, email, passwordCorrect, usernameExists, fname, lname } = prevState
            if (!emailExists && username !== '' && passwordCorrect && !usernameExists && email !== '' && fname !== '' && lname !== ''){
                return {
                    formErrors: false,
                }
            } else {
                return {
                    formErrors: true,
                }
            }

        })

    }


    handleChangeUser = () => {
        if (this.refs.usernameIN.value !== ''){
            API.checkUserID(this.refs.usernameIN.value).then(res =>
                this.setState({
                    showStatusUser: true,
                    usernameExists: res
                }, () => {
                    this.setState((prevState) =>  {
                        const { username, emailExists, email, passwordCorrect, fname, lname } = prevState
                        if (!emailExists && username !== '' && passwordCorrect && !res && email !== '' && fname !== '' && lname !== ''){
                            return {
                                formErrors: false,
                            }
                        } else {
                            return {
                                formErrors: true,
                            }
                        }

                    })
                    }
                )


            )
        } else {
            this.setState({
                showStatusUser: false,
            })
        }


    }

    handleChangeEmail = () => {

        if (this.refs.emailIN.value !== ''){
            API.checkUserEmail(this.refs.emailIN.value).then(res =>
                this.setState({
                    showStatusEmail: true,
                    emailExists: res
                }, () => {
                    this.setState((prevState) =>  {
                        const { username, emailExists, email, passwordCorrect, fname, lname } = prevState
                        if (!emailExists && username !== '' && passwordCorrect && !res && email !== '' && fname !== '' && lname !== ''){
                            return {
                                formErrors: false,
                            }
                        } else {
                            return {
                                formErrors: true,
                            }
                        }

                    })
                })
            )
        } else {
            this.setState({
                showStatusEmail: false,
            })
        }
    }

    signUpUser = (event) => {
        event.preventDefault();

        // console.log(this.state);
        // alert('A name was submitted: ' + this.state);

        // API.createUser(this.state).then(res => console.log('post', res))




        // API.login({ username: this.state.username, password: this.state.password }).then(res => console.log(res))

        // // // API.getRewardsByUserID(this.state.username).then(res => console.log(res))
        // API.editUser('asd' , this.state ).then(res => console.log('put', res))

        // API.getUser(this.state).then(res => console.log('get', res))
        // API.deleteUser(this.state.username).then(res => console.log(res))

    }

    doSignUp = (event) => {
        event.preventDefault();

        if (this.state.formErrors) {

        } else {
            let newUser = {
                username: this.state.username,
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                password: this.state.password,
            }

            API.createUser(newUser).then( res => {
                console.log(res)
                if (!res) {

                } else {
                    this.props.doSignUp(res)
                }
            })
        }

    }

    closeSignUp = () => {
        this.props.closeSignUp()
    }

    //mj@hotmail.com

    render(){

        if (this.props.visible) {
            return (
                <div className={'signup'}>

                    <div
                        className={'signup-backdrop'}
                        onClick={this.closeSignUp}
                    ></div>

                    <div className={'signup-container'}>

                        <div className={'signup-title'}>
                            Sign Up
                        </div>

                        <div className='signup-input-container'>
                            <label className='signup-input-label'>Username:</label>

                            <input
                                className={'signup-input'}
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
                                {!this.state.usernameExists
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
                        </div>


                        <div className='signup-input-container'>
                            <label className='signup-input-label'>First Name:</label>
                            <input
                                className={'signup-input'}
                                placeholder={'First Name'}
                                type="text"
                                value={this.state.fname}
                                ref="fnameIN"
                                onChange={this.handleChange}/>
                        </div>


                        <div className='signup-input-container'>
                            <label className='signup-input-label'>Last Name:</label>
                            <input
                                className={'signup-input'}
                                placeholder={'Last Name'}
                                type="text"
                                value={this.state.lname}
                                ref="lnameIN"
                                onChange={this.handleChange}/>
                        </div>

                        <div className='signup-input-container'>
                            <label className='signup-input-label'>Email:</label>
                            <input
                                className={'signup-input'}
                                placeholder={'Email'}
                                type="text"
                                value={this.state.email}
                                ref="emailIN"
                                onChange={this.handleChange}
                                onBlur={this.handleChangeEmail}
                            />
                            <div className={ this.state.showStatusEmail
                                ? 'signup-input-check-container'
                                : 'signup-input-check-container invisible'
                            }>
                                {!this.state.emailExists
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
                        </div>


                        <div className='signup-input-container'>
                            <label className='signup-input-label'>Password:</label>
                            <input
                                className={'signup-input'}
                                placeholder={'Password'}
                                type={'password'}
                                value={this.state.password}
                                ref="passwordIN"
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='signup-input-container'>
                            <label className='signup-input-label'>Repeat Password:</label>
                            <input
                                className={'signup-input'}
                                placeholder={'Confirm Password'}
                                type={'password'}
                                value={this.state.cpassword}
                                ref="cpasswordIN"
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
                        </div>



                        <div className={'signup-button-container'}>
                            <button
                                className={'signup-button-close'}
                                onClick={this.closeSignUp}>Cancel
                            </button>
                            <button
                                className={this.state.formErrors
                                    ? 'signup-button-disabled'
                                    : 'signup-button' }
                                onClick={this.doSignUp}>Sign Up
                            </button>
                        </div>

                    </div>

                </div>
            )

        } else {
            return (
                <div/>
            )
        }
    }
}

export default SignUp;
