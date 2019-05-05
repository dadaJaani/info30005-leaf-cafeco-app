import React, { Component } from 'react';
import '../styles/restaurantdash.css';

import logo from "../images/cafecopartnerslogo.svg";
import marker from "../images/Image-10.png";

class restaurantdash extends Component {
  render() {
    return (
        <div className = "container">
            <div className = "sidebar-container">
                <div className = "restaurantInfo">
                    <img className = "white-logo" src={logo} alt = "cafe profile image"/>

                    <h1 className = "cafe-title">
                        More than a fairy

                    </h1>

                    <div className = "location">
                        <div className = "marker">
                            <img className = "marker" src={marker} alt = "black and white map marker"/>

                        </div>

                        <p id = "sidebar-address">
                            99999 street address rd, <br/> suburb state 3999

                        </p>
                    </div>
                </div>

                <div className = "menu" >
                    <div className = "menu-item" id = "account-review">
                        Account

                    </div>

                    <div className = "menu-item" id = "account-review">
                        Reviews & Ratings

                    </div>

                    <div className = "menu-item" id = "logout">
                        Log Out

                    </div>
                </div>
            </div>


            <div className = "main-container">
                <div className = "restaurant-profile-container">
                    <h2 className = "detail-info" id = "profile-title">
                        Profile

                    </h2>

                    <p className = "detail-info" id = "name">
                        Buisness name:

                    </p>

                    <p className = "detail-info">
                        Restaurant details:

                    </p>

                    <p className = "detail-info">
                        Rewards offered:

                    </p>

                    <p className = "detail-info" id = "business-name">
                        More than a fairy

                    </p>

                    <p className = "detail-info" id = "address">
                        99999 street address rd <br/> suburb <br/> state <br/> 3999 <br/>

                    </p>

                    <div className = "detail-info" id = "rewards">
                        <p className = "reward-item">
                            reward 1- free dronk

                        </p>

                        <p className = "reward-cost">
                            10 points

                        </p>

                        <p className = "reward-item">
                            reward 2- money off

                        </p>

                        <p className = "reward-cost">
                            10 points

                        </p>

                        <p className = "reward-item">
                            reward 3- more money off

                        </p>

                        <p className = "reward-cost">
                            10 points

                        </p>
                    </div>

                    <button className = "edit-button">
                        Edit

                    </button>
                </div>


                <div className = "stats-container">
                    <h2 className = "detail-info" id = "stats-title">
                        Statistics

                    </h2>

                    <p className = "stats-figure">
                        #100

                    </p>

                    <p className = "stats-details" id = "featured">
                        on featured cafes of the week

                    </p>

                    <p className = "stats-figure">
                        10000

                    </p>

                    <p className = "stats-details" id = "credits">
                        credits have been redeemed at your cafe!

                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default restaurantdash;
