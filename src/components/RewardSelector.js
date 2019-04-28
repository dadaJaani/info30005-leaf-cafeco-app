import React, { Component } from 'react'

import pictureNotLoggedIn from '../assets/reward-selector-sign-in.svg'

class RewardSelector extends Component {
    

    render () {
        console.log(this.props.userLoggedIn)
        
        if ( this.props.userLoggedIn){
            return(
                <div className='reward-selector'>
                    <h2>Choose your Rewards</h2>
                    <h4>Avaliable Credits: 352</h4>

                    <div className='reward-selector-list'>

                        <div className='reward-selector-list-item'>
                            <label>Free Drink</label>
                            <span>35 credits</span>
                            <button>Claim</button>
                        </div>

                        <div className='reward-selector-list-item'>
                            <label>10% Off</label>
                            <span>50 credits</span>
                            <button>Claim</button>
                        </div>

                        <div className='reward-selector-list-item'>
                            <label>20% Off</label>
                            <span>75 credits</span>
                            <button>Claim</button>
                        </div>

                        <div className='reward-selector-list-item'>
                            <label>50% Off</label>
                            <span>125 credits</span>
                            <button>Claim</button>
                        </div>

                        <div className='reward-selector-list-item'>
                            <label>Free Meal</label>
                            <span>250 credits</span>
                            <button>Claim</button>
                        </div>

                    </div>
                </div>
            )
        } else {
            return(
                <div className='reward-selector-not'>
                    <img src={pictureNotLoggedIn} className='reward-selector-list-not-picture'/>
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