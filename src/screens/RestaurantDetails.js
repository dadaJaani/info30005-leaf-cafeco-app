import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import Rating from 'react-rating';
import "react-toggle/style.css"
import Toggle from 'react-toggle'
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'

import NavBar from "../components/NavBar";
import RewardSelector from "../components/RewardSelector";
import Footer from '../components/Footer'

import leafTranslucent from '../assets/leaf-translucent.svg'
import leafOpaque from '../assets/leaf-opaque.svg'
import locMarker from '../assets/loc-marker.svg'

import * as API from '../utils/api'


const AnyReactComponent = ({ text }) => <div>
    <img alt='marker map'  src={locMarker} width={30} height={30}/>
</div>;

class RestaurantDetails extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            restaurant: props.restaurant,
            isFavorite: false,
        }

        this.navbar = React.createRef();

    }

    setFavorite = () => {
        this.setState({
            isFavorite: true
        })
    }

    unsetFavorite = () => {
        this.setState({
            isFavorite: false
        })
    }

    showLogin = () => {
        this.navbar.current.showLogin()
    }
    showSignup = () => {
        this.navbar.current.showSignup()
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

    componentDidMount() {
        if (this.props.restaurant.id === undefined) {

            API.getRestaurant(this.props.history.location.pathname.substring(12)).then(item => {

                this.setState({
                    restaurant: item[0]
                })
            })
        }
    }

    static defaultProps = {
        center: {
            lat: -37,
            lng: 144
        },
        zoom: 13
    };
    

    render() {
        const { restaurant } = this.state

        return(
            <div>
                <NavBar
                    {...this.props}
                    ref={this.navbar}

                    logOutUser={this.logOutUser}
                    logInUser={this.logInUser}
                    signUpUser={this.signUpUser}
                    userLoggedIn={this.props.userLoggedIn}
                    goToProfile={this.goToProfile}
                />

                {
                    restaurant.id !== undefined
                    ? (
                            <div className='restaurant-detail-container'>

                                <RewardSelector
                                    userLoggedIn={this.props.userLoggedIn}
                                    showLogin={this.showLogin}
                                    showSignup={this.showSignup}
                                />

                                <div className='restaurant-detail-title'>
                                    {restaurant.name}

                                </div>


                                <div className='restaurant-detail-photo'>
                                    <img src={restaurant.photo}
                                         alt='restaurant photo'
                                    />
                                </div>
                                <div className='restaurant-detail-info'>
                                    <p>{restaurant.description}</p>
                                    <span>{restaurant.address}</span>
                                    <span>{restaurant.phone}</span>
                                    <a href={'http://www.' + restaurant.website}>Eatery Website</a>

                                </div>

                                <div className='restaurant-detail-rating'>
                                    <div>Eco Friendliness</div>
                                    <Rating
                                        initialRating={restaurant.averageSustainabilityRating}
                                        readonly={true}
                                        emptySymbol={
                                            <img
                                                alt='leaf empty'
                                                width={40}
                                                height={40}
                                                src={leafTranslucent}
                                            />
                                        }
                                        fullSymbol={
                                            <img
                                                alt='leaf full'
                                                width={40}
                                                height={40}
                                                src={leafOpaque}
                                            />
                                        }

                                    />
                                </div>

                                <div className='restaurant-detail-map'>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: 'AIzaSyAThroloBz4lBlrWA_ZCmtXfOFdsI46CXY' }}
                                        defaultCenter={{
                                            lat: restaurant.location.lat,
                                            lng: restaurant.location.lng,
                                        }}
                                        defaultZoom={this.props.zoom}
                                    >
                                        <AnyReactComponent
                                            lat={restaurant.location.lat}
                                            lng={restaurant.location.lng}
                                            text="My Marker"
                                        />
                                    </GoogleMapReact>
                                </div>

                                <div className='restaurant-detail-about'>
                                    <h2>About</h2>

                                    <div
                                        className={this.props.userLoggedIn
                                            ? 'restaurant-detail-star-container'
                                            : 'restaurant-detail-star-container-hide'}
                                        onClick={ this.state.isFavorite
                                            ? this.unsetFavorite
                                            : this.setFavorite
                                        }
                                    >
                                        {this.state.isFavorite
                                            ?   <IoIosStar
                                                className='restaurant-detail-star restaurant-detail-star-selected'
                                            />
                                            :   <IoIosStarOutline
                                                className='restaurant-detail-star restaurant-detail-star-not-selected'
                                            />
                                        }
                                    </div>

                                    <p> We serve vegetables, and lots of them, while keeping sustainablility in mind. </p>

                                    <h2>Sustainable Practices</h2>
                                    <ul>
                                        <li>Practice 1</li>
                                        <li>Practice 2</li>
                                        <li>Practice 3</li>
                                        <li>Practice 4</li>

                                    </ul>
                                </div>



                                <div className='restaurant-detail-reviews'>
                                    <h2>Reviews</h2>

                                    {
                                        this.props.userLoggedIn
                                            ?
                                            (<div className='restaurant-detail-reviews-list-input'>
                                                <h3>Write a review.</h3>
                                                <div>
                                                    <Rating
                                                        initialRating={0}
                                                        emptySymbol={
                                                            <img
                                                                alt='leaf empty'
                                                                width={22}
                                                                height={22}
                                                                src={leafTranslucent}
                                                            />
                                                        }
                                                        fullSymbol={
                                                            <img
                                                                alt='leaf full'
                                                                width={22}
                                                                height={22}
                                                                src={leafOpaque}
                                                            />
                                                        }

                                                    />
                                                </div>

                                                <textarea />

                                                <button>Submit Review</button>
                                            </div>)
                                            :   (<div/>)
                                    }


                                    <div className='restaurant-detail-reviews-list'>
                                        {
                                            restaurant.sustainabilityReviews.map( review => (
                                                <div
                                                    className='restaurant-detail-reviews-list-item'
                                                    key={review.username}
                                                >
                                                    <label>{review.username}</label>
                                                    <div>
                                                        <Rating
                                                            initialRating={review.rating}
                                                            readonly={true}
                                                            emptySymbol={
                                                                <img
                                                                    alt='leaf empty'
                                                                    width={22}
                                                                    height={22}
                                                                    src={leafTranslucent}
                                                                />
                                                            }
                                                            fullSymbol={
                                                                <img
                                                                    alt='leaf full'
                                                                    width={22}
                                                                    height={22}
                                                                    src={leafOpaque}
                                                                />
                                                            }

                                                        />
                                                        <span >review.date</span>
                                                    </div>

                                                    <p>{review.review}</p>
                                                </div>
                                            ))
                                        }
                                        <div className='restaurant-detail-reviews-list-item'>
                                            <label>JHolden</label>
                                            <div>
                                                <Rating
                                                    initialRating={4}
                                                    readonly={true}
                                                    emptySymbol={
                                                        <img
                                                            alt='leaf empty'
                                                            width={22}
                                                            height={22}
                                                            src={leafTranslucent}
                                                        />
                                                    }
                                                    fullSymbol={
                                                        <img
                                                            alt='leaf full'
                                                            width={22}
                                                            height={22}
                                                            src={leafOpaque}
                                                        />
                                                    }

                                                />
                                                <span >31/3/2019</span>
                                            </div>

                                            <p> pretty good food, not a bad place and seems pretty sustainable </p>
                                        </div>


                                        <div className='restaurant-detail-reviews-list-item'>
                                            <label>vampiremaybe</label>
                                            <div>
                                                <Rating
                                                    initialRating={2}
                                                    readonly={true}
                                                    emptySymbol={
                                                        <img
                                                            alt='leaf empty'
                                                            width={22}
                                                            height={22}
                                                            src={leafTranslucent}
                                                        />
                                                    }
                                                    fullSymbol={
                                                        <img
                                                            alt='leaf full'
                                                            width={22}
                                                            height={22}
                                                            src={leafOpaque}
                                                        />
                                                    }

                                                />
                                                <span >31/3/2019</span>
                                            </div>

                                            <p> I do not know fellow mortal, I just... I am afraid I just drink blood dearest soul. </p>
                                        </div>

                                        <div className='restaurant-detail-reviews-list-item'>
                                            <label>Psyducks</label>
                                            <div>
                                                <Rating
                                                    initialRating={5}
                                                    readonly={true}
                                                    emptySymbol={
                                                        <img
                                                            alt='leaf empty'
                                                            width={22}
                                                            height={22}
                                                            src={leafTranslucent}
                                                        />
                                                    }
                                                    fullSymbol={
                                                        <img
                                                            alt='leaf full'
                                                            width={22}
                                                            height={22}
                                                            src={leafOpaque}
                                                        />
                                                    }

                                                />
                                                <span >31/3/2019</span>
                                            </div>

                                            <p> Being quite a big fan of vegetables I must say this is probably one of, if not the best restaurant I have eaten at. </p>
                                        </div>

                                        <div className='restaurant-detail-reviews-list-item'>
                                            <label>Foodhunter</label>
                                            <div>
                                                <Rating
                                                    initialRating={3}
                                                    readonly={true}
                                                    emptySymbol={
                                                        <img
                                                            alt='leaf empty'
                                                            width={22}
                                                            height={22}
                                                            src={leafTranslucent}
                                                        />
                                                    }
                                                    fullSymbol={
                                                        <img
                                                            alt='leaf full'
                                                            width={22}
                                                            height={22}
                                                            src={leafOpaque}
                                                        />
                                                    }

                                                />
                                                <span >31/3/2019</span>
                                            </div>

                                            <p> Food was not bad, but probably not worth it for the price. </p>
                                        </div>

                                        <div className='restaurant-detail-reviews-list-item'>
                                            <label>BobbyD</label>
                                            <div>
                                                <Rating
                                                    initialRating={1}
                                                    readonly={true}
                                                    emptySymbol={
                                                        <img
                                                            alt='leaf empty'
                                                            width={22}
                                                            height={22}
                                                            src={leafTranslucent}
                                                        />
                                                    }
                                                    fullSymbol={
                                                        <img
                                                            alt='leaf full'
                                                            width={22}
                                                            height={22}
                                                            src={leafOpaque}
                                                        />
                                                    }

                                                />
                                                <span >31/3/2019</span>
                                            </div>

                                            <p> yeah the sustainablility of the place is great but the food absolutely sucks </p>
                                        </div>


                                        <div className='restaurant-detail-reviews-list-item-void'>
                                        </div>
                                    </div>

                                </div>

                            </div>

                    )
                    :
                        <div>
                            Loading

                        </div>
                }


                <Footer />
            </div>
        )
    }
    
    
}


export default withRouter(RestaurantDetails)