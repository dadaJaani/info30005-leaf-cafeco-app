import React, { Component } from 'react'

import pictureNotLoggedIn from '../assets/reward-selector-sign-in.svg'

import * as API from '../utils/api'


class RewardSelector extends Component {

    helper = {
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


    createReward = (rewardType) => {
        let newReward = {
            id: `${this.props.user.username}-${rewardType}-${this.props.restaurant.id}-${Date.now()}`,
            username: this.props.user.username,
            restaurantID: this.props.restaurant.id,
            points: this.helper[rewardType].points,
            date: Date(),
            type: rewardType,
        }

        API.createReward(newReward).then(res => {

            let newUserPoints = {
                points: this.props.user.points - this.helper[rewardType].points,
                rewardHistory: [...this.props.user.rewardHistory, newReward.id]
            }

            API.editUserPoints(this.props.user.username, newUserPoints).then(res => {
                console.log('user update after creating reward:', res)
                this.props.updateUser({
                    ...this.props.user,
                    points: newUserPoints.points,
                    rewardHistory: newUserPoints.rewardHistory,
                })
            })
        })
    }

    render () {
        const { user } = this.props

        if ( this.props.userLoggedIn){
            return(
                <div className='reward-selector'>
                    <h2>Choose your Rewards</h2>
                    <h4>Avaliable Credits: {user.points}</h4>

                    <div className='reward-selector-list'>
                        {
                            this.props.offeredRewards.map( reward =>
                                <div className='reward-selector-list-item' key={reward}>
                                    <label>{this.helper[reward].description}</label>
                                    <span>{this.helper[reward].points} Credits</span>
                                    <button
                                        onClick={() => this.createReward(reward)}
                                    >
                                        Claim
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        } else {
            return(
                <div className='reward-selector-not'>
                    <img
                        src={pictureNotLoggedIn}
                        className='reward-selector-list-not-picture'
                        alt='art'
                    />
                    <h2>Sign up or log in to acccess Rewards</h2>

                    <div className='reward-selector-not-buttons'>
                        <button
                            onClick={this.props.showSignup}
                        >Sign Up</button>

                        <button
                            onClick={this.props.showLogin}
                        >Log In</button>
                    </div>
                </div>
            )
        }

    }
}

export default RewardSelector