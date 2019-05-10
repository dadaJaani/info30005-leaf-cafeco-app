import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from '../components/Footer'
import RedeemSuccess from '../components/RedeemSuccess'


import * as API from '../utils/api'
import {IoIosAddCircle, IoIosCheckmarkCircle} from "react-icons/io";



class Profile extends Component {


    rewardHelper = {
        RewFD: {
            description: "Free Drink",
            points: 35,
        },
        Rew10: {
            description: "10% Off",
            points: 50,
        },
        Rew20: {
            description: "20% Off",
            points: 75,
        },
        Rew25: {
            description: "25% Off",
            points: 100,
        },
        Rew50: {
            description: "50% Off",
            points: 200,
        },
        Rew75: {
            description: "75% Off",
            points: 350,
        },
        RewFM: {
            description: "Free Meal",
            points: 500,
        },
        Rew100: {
            description: "100% Off",
            points: 1000,
        },
    }

    constructor(props) {
        super(props)

        this.state = {
            savedRestaurants: [],
            rewardHistory: [],
            rewardCodeIN: '',
            saleItem: {},
            saleIDExists: false,
            showStatusSale: false,
            redeemErrors: true,
            redeemSuccessVisible: false,
            redeemPoints: 0,
        }
    }

    goToProfile = () => {}

    redeemCode = (e) => {
        e.preventDefault()

        if (!this.state.redeemErrors) {
            let temp = Math.ceil(this.state.saleItem.price * 3 ) + this.props.user.points

            let newCredits = {
                points: temp,
            }

            API.editUserPoints(this.props.user.username, newCredits).then(res => {
                this.props.updateUser({
                    ...this.props.user,
                    points: newCredits.points,
                })

                this.setState({
                    redeemSuccessVisible: true,
                    redeemPoints: Math.ceil(this.state.saleItem.price * 3 ),
                }, () => {
                    API.deleteSale(this.state.saleItem.id)
                })
            })
        } else {

        }
    }

    // openRedeemSuccess = () => {
    //     this.setState({
    //         redeemSuccessVisible: true
    //     })
    // }

    closeRedeemSuccess = () => {
        this.setState({
            redeemSuccessVisible: false,
            saleItem: {},
            redeemPoints: 0,
        })
    }

    handleChange = () => {
        this.setState({
            rewardCodeIN: this.refs.RedeemIN.value,
            redeemErrors: true
        })
    }

    checkSale = () => {
        if (this.refs.RedeemIN.value !== ''){
            API.getSale(this.state.rewardCodeIN).then( res => {
                if (res !== false){
                    this.setState({
                        showStatusSale: true,
                        saleItem: res,
                        saleIDExists: true,
                        redeemErrors: false,
                    })
                } else {
                    this.setState({
                        showStatusSale: true,
                        saleItem: res,
                        saleIDExists: false,
                        redeemErrors: true
                    })
                }
            })
        } else {
            this.setState({
                showStatusSale: false,
                redeemErrors: true
            })
        }
    }

    goToRestaurantProfile = (restaurantID) => {
        this.props.selectRestaurant(restaurantID)
        this.props.history.push('/restaurant/' + restaurantID)
    }

    logOutUser = () => {
        this.props.logOutUser()
    }

    updateData = () => {
        let saved = []
        let history = []

        if (this.props.user && this.props.restaurants) {

            saved = this.props.user.savedRestaurants.map(item => {
                console.log(this.props.restaurants)

                let found = this.props.restaurants.find( resto => resto.id === item)
                console.log(found)
                return found
            })


            history = this.props.user.rewardHistory.map(item => {
                let string = item.split('-')
                let date = new Date(parseInt(string[3]))
                return {
                    description: this.rewardHelper[string[1]].description,
                    points: this.rewardHelper[string[1]].points,
                    date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                }
            })

            this.setState({
                savedRestaurants: saved,
                rewardHistory: history,
                loading: false,
            })
        }

    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            // this.updateData()
        }
    }

    componentDidMount(){
        if (this.props.userLoggedIn) {
            // this.updateData()
        } else {
            this.props.refresh()

        }
    }


    render () {
        console.log('profile props:', this.props)
        const { user, restaurants,loading } = this.props
        console.log('profile state:', this.state)

        let savedRestaurants = []
        let rewardHistory = []

        if (!loading) {
            savedRestaurants = user.savedRestaurants.map(item => {
                let found = this.props.restaurants.find(resto => resto.id === item)
                return found
            })

            rewardHistory = user.rewardHistory.map(item => {
                let string = item.split('-')
                let resto = restaurants.find(i => i.id === string[2])

                let date = new Date(parseInt(string[3]))
                return {
                    description: this.rewardHelper[string[1]].description,
                    points: this.rewardHelper[string[1]].points,
                    restaurantName: resto.name,
                    date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                }
            })
        }

        if (this.props.loading){
            return (
                <div > LOADING </div>
            )
        } else {

            if (this.props.userLoggedIn) {

                return (
                    <div>
                        <NavBar
                            {...this.props}
                            logOutUser={this.logOutUser}
                            userLoggedIn={this.props.userLoggedIn}
                            goToProfile={this.goToProfile}
                        />
                        <RedeemSuccess
                            visible={this.state.redeemSuccessVisible}
                            closeRedeemSuccess={this.closeRedeemSuccess}
                            points={this.state.redeemPoints}
                        />

                        <div className={'profile-container'}>
                            <div className={'profile-item1'}>
                                <h2 className={'profile-item1-heading'}> Account </h2>

                                <div>
                                    <label>Name:</label>
                                    <span>{user.fname} {user.lname}</span>

                                </div>

                                <div>
                                    <label>Username:</label>
                                    <span>{user.username}</span>

                                </div>

                                <div>
                                    <label>Email:</label>
                                    <span>{user.email}</span>

                                </div>

                                <div>
                                    <label>Password:</label>
                                    <span>*****</span>
                                </div>

                            </div>


                            <div className={'profile-item2'}>
                                <h2>
                                    Credits
                                </h2>
                                <div className='profile-item2-points-container'>
                                    <p>
                                        {user.points}
                                    </p>
                                    <span>
                                    available
                                </span>

                                </div>


                                <div className='profile-item2-input-container'>
                                    <div>Redeem Code</div>

                                    <form
                                        onSubmit={this.redeemCode}
                                        className='redeem-code-container'
                                    >
                                        <input
                                            value={this.state.rewardCodeIN}
                                            ref='RedeemIN'
                                            onChange={this.handleChange}
                                            onBlur={this.checkSale}
                                            minLength={8}
                                            maxLength={8}
                                            required
                                            placeholder='Enter Credit Code'
                                        />

                                        <div className={ this.state.showStatusSale
                                            ? 'redeem-code-check-container'
                                            : 'redeem-code-check-container invisible'
                                        }>
                                            {this.state.saleIDExists
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

                                        <button
                                            className={!this.state.redeemErrors
                                            ? 'redeem-button'
                                            : 'redeem-button-disabled'
                                            }
                                        >
                                            Verify
                                        </button>
                                    </form>

                                </div>

                            </div>


                            <div className={'profile-item3'}>
                                <h2>
                                    Saved Eateries
                                </h2>

                                <div className={'profile-item3-list'}>
                                    {
                                        savedRestaurants.map(item =>

                                            <div
                                                className={'profile-item3-list-item'}
                                                onClick={() => this.goToRestaurantProfile(item.id)}
                                            >
                                                <img alt='resto photo' src={item.photo}/>
                                                <div>
                                                    {item.name}
                                                </div>
                                            </div>
                                        )
                                    }

                                </div>

                            </div>

                            <div className={'profile-item4'}>

                                <h2>
                                    Reward History
                                </h2>

                                <div className={'profile-item4-list'}>
                                    {
                                        rewardHistory.map(item =>
                                            <div className={'profile-item4-list-item'}>
                                                <div className='profile-item4-list-item-info'>
                                                    <label>{item.date}</label>
                                                    <div>{item.restaurantName}</div>
                                                    <span>{item.description}</span>
                                                </div>
                                                <div className='profile-item4-list-item-points'>
                                                    {item.points}
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>


                            </div>
                        </div>

                        <Footer/>
                    </div>
                )
            } else {
                return (
                    <div className='profile-not-signed-in'>
                        <h1>
                            User not signed in
                        </h1>

                        <Link
                            className={'navbar-button'}
                            to={'/dashboard'}
                        > Home </Link>


                    </div>
                )
            }
        }
    }
}

export default withRouter(Profile)