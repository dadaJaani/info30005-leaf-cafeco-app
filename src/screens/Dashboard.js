import React, { Component } from 'react'

import { withRouter, Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';

import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import locMarker from '../assets/loc-marker.svg'

const AnyReactComponent = ({ text, history }) => <div onClick={history.push('/restaurant/jsb')}>
    <img alt = 'marker map' src = {locMarker} width={30} height={30}/>
</div>;

class Dashboard extends Component {

    constructor(props){
        super(props);

        this.refMap = null

        this.state = {
            userLoggedIn: props,
            userInfo: props.user,
        }
    }

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

    goToRestaurantProfile = () => {
        this.scrollToTop()
        this.props.history.push('/restaurant/' + 'asd')

    }

    scrollToMap = () => {
        window.scrollTo(0, this.refMap.offsetTop)
    }
    scrollToFeatured = () => {
        window.scrollTo(0, 5000)
    }
    scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    static defaultProps = {
        center: {
            lat: -37.798404,
            lng: 144.963211
        },
        zoom: 13
    };

    render() {
        console.log('dashboard props', this.props)
        console.log(window)
        return (
            <div >

                <NavBar
                    {...this.props}
                    logOutUser={this.logOutUser}
                    logInUser={this.logInUser}
                    signUpUser={this.signUpUser}
                    userLoggedIn={this.props.userLoggedIn}
                    goToProfile={this.goToProfile}
                />

                <div className='home-grid-container'>

                    <div className='home-grid-main'>
                        <h1>Discover. Earn credits. Get rewards.</h1>
                        <h4>Support your local eco-friendly eateries.</h4>

                        <div className='home-grid-main-form'>
                            <IoIosSearch className='home-grid-main-form-icon'/>
                            <input
                                placeholder='Search eatery by name'
                                className='home-grid-form-input'
                            />
                            <span > or </span>
                            <Link
                                to='/restaurants'

                            >View Complete List</Link>
                        </div>

                    </div>

                    <div className='home-grid-discover-button'>
                        <div
                            className='home-grid-discover-button-inner'
                            onClick={this.scrollToMap}
                        >
                            <p>Discover Eateries</p>
                            <IoIosArrowDown />
                        </div>
                        
                    </div>
                    

                    <div className='home-grid-map' ref={ (ref) => this.refMap = ref}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyAThroloBz4lBlrWA_ZCmtXfOFdsI46CXY' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <AnyReactComponent
                                lat={-37.795821}
                                lng={144.979143}
                                text="My Marker"
                                history = {this.props.history}
                            />

                            <AnyReactComponent
                                lat={-37.802871}
                                lng={144.959125}
                                text="My Marker"
                                history = {this.props.history}
                            />

                            <AnyReactComponent
                                lat={-37.817573}
                                lng={144.992216}
                                text="My Marker"
                                history = {this.props.history}
                            />

                            <AnyReactComponent
                                lat={-37.816700}
                                lng={144.965789}
                                text="My Marker"
                                history = {this.props.history}
                            />
                        </GoogleMapReact>
                    </div>

                    <div className='home-grid-featured-title'>
                        <div
                            className='home-grid-discover-button-inner'
                            onClick={this.scrollToFeatured}
                        >
                            <p>Featured Eateries</p>
                            <IoIosArrowDown />
                        </div>

                    </div>

                    <div className='home-grid-featured'>

                        <div
                            className='home-grid-featured-item'

                        >
                            <img
                                src='https://www.broadsheet.com.au/media/cache/97/09/970914d13d1e1b4fcdd4369cef1420b9.jpg'
                                className='home-grid-featured-item-photo'
                                alt='resto photo'
                            />
                            <p
                                className='home-grid-featured-item-name'
                            >
                                The Vegie Bar
                            </p>
                            <p
                                className='home-grid-featured-item-info'
                            >
                                Inventive veggie and vegan meals, raw food and cocktails in a lively space with a leafy courtyard.
                            </p>
                            <div
                                className='home-grid-featured-item-button-container'
                            >
                                <button
                                    className='home-grid-featured-item-button'
                                    onClick={this.goToRestaurantProfile}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div
                            className='home-grid-featured-item'

                        >
                            <img
                                src='https://i.pinimg.com/originals/de/07/a0/de07a037aabaf27d230b0e3116856c8c.jpg'
                                className='home-grid-featured-item-photo'
                                alt='resto photo'
                            />
                            <p
                                className='home-grid-featured-item-name'
                            >
                                Seven Seeds Coffee Roasters
                            </p>
                            <p
                                className='home-grid-featured-item-info'
                            >
                                Airy, industrial-chic cafe and micro-roaster serving all-day brunch, salads and specialty teas.
                            </p>
                            <div
                                className='home-grid-featured-item-button-container'
                            >
                                <button
                                    className='home-grid-featured-item-button'
                                    onClick={this.goToRestaurantProfile}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>


                        <div
                            className='home-grid-featured-item'

                        >
                            <img
                                src='https://www.broadsheet.com.au/media/cache/1f/bf/1fbf6804a7aa53d06282fd070acb3301.jpg'
                                className='home-grid-featured-item-photo'
                                alt='resto photo'
                            />
                            <p
                                className='home-grid-featured-item-name'
                            >
                                Fifty Acres
                            </p>
                            <p
                                className='home-grid-featured-item-info'
                            >
                                Inventive all-day breakfast menu in a boutique cafe with exposed-brick walls and booth seating.
                            </p>
                            <div
                                className='home-grid-featured-item-button-container'
                            >
                                <button
                                    className='home-grid-featured-item-button'
                                    onClick={this.goToRestaurantProfile}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>


                        <div
                            className='home-grid-featured-item'

                        >
                            <img
                                src='https://www.goodfood.com.au/content/dam/images/g/z/o/j/2/2/image.related.wideLandscape.940x529.gzmqv0.png/1511218776331.jpg'
                                className='home-grid-featured-item-photo'
                                alt='resto photo'
                            />
                            <p
                                className='home-grid-featured-item-name'
                            >
                                Brunetti Flinders Lane
                            </p>
                            <p
                                className='home-grid-featured-item-info'
                            >
                                Italian cafe known for sweets, serving pizza and pasta in a modern space with an outdoor area.
                            </p>
                            <div
                                className='home-grid-featured-item-button-container'
                            >
                                <button
                                    className='home-grid-featured-item-button'
                                    onClick={this.goToRestaurantProfile}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className='home-grid-featured-item-void' />



                    </div>

                    <div className='home-grid-top-button'>
                        <div
                            className='home-grid-discover-button-inner'
                            onClick={this.scrollToTop}
                        >
                            <p>Back To Top</p>
                            <IoIosArrowUp />
                        </div>

                    </div>


                </div>

                <Footer />
            </div>
        );
    }
}

export default withRouter(Dashboard);
