import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from '../components/Footer'

import * as API from '../utils/api'



class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }






    goToProfile = () => {}


    goToRestaurantProfile = () => {
        this.props.history.push('/restaurant/' + 'asd')

    }

    logOutUser = () => {
        this.props.logOutUser()
    }


    componentDidMount() {
        API.getRewardsByUserID(this.props.user.username).then(res => {
            console.log(res)
        })
    }


    render () {

        const { user } = this.props

        if (this.props.userLoggedIn) {
            return (
                <div>
                    <NavBar
                        {...this.props}
                        logOutUser={this.logOutUser}
                        userLoggedIn={this.props.userLoggedIn}
                        goToProfile={this.goToProfile}
                    />

                    <div className={'profile-container'}>
                        <div className={'profile-item1'}>
                            <h2 className={'profile-item1-heading'}> Account </h2>

                            <div >
                                <label >Name:</label>
                                <span>{user.fname} {user.lname}</span>

                            </div>

                            <div >
                                <label>Username:</label>
                                <span>{user.username}</span>

                            </div>

                            <div>
                                <label>Email:</label>
                                <span>{user.email}</span>

                            </div>

                            <div >
                                <label>Password:</label>
                                <span>*****</span>
                            </div>

                        </div>


                        <div className={'profile-item2'}>
                            <h2>
                                Credits
                            </h2>
                            <div className='profile-item2-points-container'>
                                <p >
                                    {user.points}
                                </p>
                                <span >
                                    available
                                </span>

                            </div>


                            <div className='profile-item2-input-container'>
                                <div>Redeem Code</div>
                                <input placeholder='Enter Credit Code'/>
                                <button >
                                    Verify
                                </button>
                            </div>

                        </div>


                        <div className={'profile-item3'}>
                            <h2>
                                Saved Eateries
                            </h2>

                            <div className={'profile-item3-list'}>
                                <div
                                    className={'profile-item3-list-item'}
                                    onClick={this.goToRestaurantProfile}
                                >
                                    <img alt='resto photo' src='https://www.broadsheet.com.au/media/cache/97/09/970914d13d1e1b4fcdd4369cef1420b9.jpg'/>
                                    <div>
                                        The Vegie Bar
                                    </div>
                                </div>
                                <div className={'profile-item3-list-item'}>
                                    <img alt='resto photo' src='https://www.broadsheet.com.au/media/cache/97/09/970914d13d1e1b4fcdd4369cef1420b9.jpg'/>
                                    <div>
                                        The Vegie Bar
                                    </div>
                                </div>
                                <div className={'profile-item3-list-item'}>
                                    <img alt='resto photo' src='https://www.broadsheet.com.au/media/cache/97/09/970914d13d1e1b4fcdd4369cef1420b9.jpg'/>
                                    <div>
                                        The Vegie Bar
                                    </div>
                                </div>
                                <div className={'profile-item3-list-item'}>
                                    <img alt='resto photo' src='https://www.broadsheet.com.au/media/cache/97/09/970914d13d1e1b4fcdd4369cef1420b9.jpg'/>
                                    <div>
                                        The Vegie Bar
                                    </div>
                                </div>
                                <div className={'profile-item3-list-item'}>
                                    <img alt='resto photo' src='https://www.broadsheet.com.au/media/cache/97/09/970914d13d1e1b4fcdd4369cef1420b9.jpg'/>
                                    <div>
                                        The Vegie Bar
                                    </div>
                                </div>
                                <div className={'profile-item3-list-item'}>
                                    <img alt='resto photo' src='https://www.broadsheet.com.au/media/cache/97/09/970914d13d1e1b4fcdd4369cef1420b9.jpg'/>
                                    <div>
                                        The Vegie Bar
                                    </div>
                                </div>
                                <div className={'profile-item3-list-item'}>
                                    <img alt='resto photo' src='https://www.broadsheet.com.au/media/cache/97/09/970914d13d1e1b4fcdd4369cef1420b9.jpg'/>
                                    <div>
                                        The Vegie Bar
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className={'profile-item4'}>

                            <h2>
                                Reward History
                            </h2>

                            <div className={'profile-item4-list'}>

                                <div className={'profile-item4-list-item'}>
                                    <div className='profile-item4-list-item-info'>
                                        <label>2/3/19</label>
                                        <div>The Vegie Bar</div>
                                        <span>Free Drink</span>
                                    </div>
                                    <div className='profile-item4-list-item-points'>
                                        15
                                    </div>
                                </div>
                                <div className={'profile-item4-list-item'}>
                                    <div className='profile-item4-list-item-info'>
                                        <label>5/1/19</label>
                                        <div>The Vegie Bar</div>
                                        <span>20%</span>
                                    </div>
                                    <div className='profile-item4-list-item-points'>
                                        30
                                    </div>
                                </div>
                                <div className={'profile-item4-list-item'}>
                                    <div className='profile-item4-list-item-info'>
                                        <label>12/2/19</label>
                                        <div>Fifty Acres</div>
                                        <span>Free Drink</span>
                                    </div>
                                    <div className='profile-item4-list-item-points'>
                                        15
                                    </div>
                                </div>
                                <div className={'profile-item4-list-item'}>
                                    <div className='profile-item4-list-item-info'>
                                        <label>16/2/19</label>
                                        <div>The Vegie Bar</div>
                                        <span>50% Off</span>
                                    </div>
                                    <div className='profile-item4-list-item-points'>
                                        100
                                    </div>
                                </div>
                                <div className={'profile-item4-list-item'}>
                                    <div className='profile-item4-list-item-info'>
                                        <label>20/3/19</label>
                                        <div>Seven Seeds</div>
                                        <span>50% Off</span>
                                    </div>
                                    <div className='profile-item4-list-item-points'>
                                        100
                                    </div>
                                </div>
                                <div className={'profile-item4-list-item'}>
                                    <div className='profile-item4-list-item-info'>
                                        <label>22/3/19</label>
                                        <div>Seven Seeds</div>
                                        <span>10% Off</span>
                                    </div>
                                    <div className='profile-item4-list-item-points'>
                                        30
                                    </div>
                                </div>
                                <div className={'profile-item4-list-item'}>
                                    <div className='profile-item4-list-item-info'>
                                        <label>2/4/19</label>
                                        <div>The Vegie Bar</div>
                                        <span>Free Drink</span>
                                    </div>
                                    <div className='profile-item4-list-item-points'>
                                        15
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                    <Footer />
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

export default withRouter(Profile)