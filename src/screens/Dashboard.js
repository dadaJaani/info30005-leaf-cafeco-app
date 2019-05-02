import React, { Component } from 'react'

import { withRouter, Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';

import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import locMarker from '../assets/loc-marker.svg'

const AnyReactComponent = ({ history, restaurantID, selectRestaurant, name }) => <div >
    <img
        alt='marker map'
        className='map-marker'
        onClick={() => {
            window.scrollTo(0, 0)
            selectRestaurant(restaurantID)
            return history.push('/restaurant/' + restaurantID)
        }}
        src={locMarker}
        width={40}
        height={40}
        title={name}
    />
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

    goToRestaurantProfile = (resaurantID) => {
        this.scrollToTop()
        this.props.history.push('/restaurant/' + resaurantID)

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

    selectRestaurant = (restaurantID) => {
        this.props.selectRestaurant(restaurantID)
    }

    static defaultProps = {
        center: {
            lat: -37.798404,
            lng: 144.963211
        },
        zoom: 13
    };

    render() {

        let topRestaurants = []
        let topRestaurantsMarkers = []


        if (this.props.restaurants) {
            topRestaurants = this.props.restaurants

            for (var i=0; i<10; i++) {
                topRestaurants = topRestaurants.sort((b ,a) => a.averageSustainabilityRating - b.averageSustainabilityRating).slice(0,10);
            }

            topRestaurantsMarkers = topRestaurants.map( resto => ({
                lat: resto.location.lat,
                lng: resto.location.lng,
                restaurantID: resto.id,
                name: resto.name,

            }))
        }


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
                            {
                                topRestaurantsMarkers.map(marker =>
                                    <AnyReactComponent
                                        lat={marker.lat}
                                        lng={marker.lng}
                                        key={marker.restaurantID}
                                        name={marker.name}
                                        text="My Marker"
                                        history = {this.props.history}
                                        restaurantID={marker.restaurantID}
                                        selectRestaurant={this.selectRestaurant}
                                    />
                                )
                            }
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


                        {
                            topRestaurants.map(restaurant => (
                                <div
                                    className='home-grid-featured-item'
                                    key={restaurant.id}
                                >
                                    <img
                                        src={restaurant.photo}
                                        className='home-grid-featured-item-photo'
                                        alt='resto photo'
                                    />
                                    <p
                                        className='home-grid-featured-item-name'
                                    >
                                        {restaurant.name}
                                    </p>
                                    <p
                                        className='home-grid-featured-item-info'
                                    >
                                        {restaurant.description}
                                    </p>
                                    <div
                                        className='home-grid-featured-item-button-container'
                                    >
                                        <button
                                            className='home-grid-featured-item-button'
                                            onClick={ () => {
                                                this.selectRestaurant(restaurant.id)
                                                this.goToRestaurantProfile(restaurant.id)
                                            }}

                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            ))
                        }

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
