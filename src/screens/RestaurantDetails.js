import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import Rating from 'react-rating';

import { IoIosStarOutline, IoIosStar, IoIosCall } from 'react-icons/io'
import { FaRegBuilding } from 'react-icons/fa'


import NavBar from "../components/NavBar";
import RewardSelector from "../components/RewardSelector";
import Footer from '../components/Footer'

import leafTranslucent from '../assets/leaf-translucent.svg'
import leafOpaque from '../assets/leaf-opaque.svg'
import locMarker from '../assets/loc-marker.svg'

import * as API from '../utils/api'
import Loading from "../components/Loading";


const AnyReactComponent = ({ text }) => <div>
    <img alt='marker map'  src={locMarker} width={30} height={30}/>
</div>;

class RestaurantDetails extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            restaurant: props.restaurant,
            allReviews: props.restaurant.sustainabilityReviews,
            isFavorite: false,
            reviewText: '',
            reviewRating: 0,
        }

        this.navbar = React.createRef();

    }

    setFavorite = () => {
        console.log("Set Fav")
        console.log("Current Fav of user:", this.props.user.savedRestaurants)

        let newSaved = {
            savedRestaurants: [...this.props.user.savedRestaurants, this.state.restaurant.id],
        }
        // var newSaved = this.props.user.savedRestaurants;

        API.editUserSavedRestaurants(this.props.user.username, newSaved).then(res => {
            this.setState({
                isFavorite: true
            })
            this.props.updateUser({
                ...this.props.user,
                savedRestaurants: newSaved.savedRestaurants
            });
        })
    }

    unsetFavorite = () => {
        console.log("Unset Fav")
        console.log("Current Fav of user:", this.props.user.savedRestaurants)

        let newSaved = {
            savedRestaurants: this.props.user.savedRestaurants.filter(item => item !== this.state.restaurant.id),
        }

        API.editUserSavedRestaurants(this.props.user.username, newSaved).then(res => {
            this.setState({
                isFavorite: false
            })
            this.props.updateUser({
                ...this.props.user,
                savedRestaurants: newSaved.savedRestaurants
            });
        })

    }


    submitReview = () => {

        let review = {
            username: this.props.user.username,
            review: this.state.reviewText,
            rating: this.state.reviewRating,
            date: new Date(),
        }

        API.createReview(this.state.restaurant.id, review)
            .then(res => {
                let temp = this.state.allReviews
                temp.push(review)
                this.setState({
                    reviewText: '',
                    reviewRating: 0,

                })

                this.props.populateAllRestaurants()
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

    dateString = (date) => {
        let temp = new Date(date)
        let result = `${temp.getDate()}/${temp.getMonth()}/${temp.getFullYear()}`

        return result
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)

        if (this.props.loading !== nextProps.loading) {
            console.log("COMPONNENNT WILL RECIEVE PROPS DESTO DETAIL:")
            console.log(nextProps)

            let address = this.props.history.location.pathname.substring(12)
            let selectedRestaurant = nextProps.restaurants.find( (a) => a.id === address)
            this.setState({
                restaurant: selectedRestaurant,
                allReviews: selectedRestaurant.sustainabilityReviews,
            })
        }
        
        if (!nextProps.user.username) {
        } else {
            let temp = nextProps.user.savedRestaurants.find( element => element === this.state.restaurant.id)

            if (!temp){
            } else {
                this.setState({
                    isFavorite: true
                });
            }
        }

    }

    componentDidMount() {
        // if (this.props.restaurant.id === undefined) {
        //
        //     API.getRestaurant(this.props.history.location.pathname.substring(12)).then(item => {
        //         this.setState({
        //             restaurant: item[0],
        //             allReviews: item[0].sustainabilityReviews,
        //         })
        //
        //         if (this.props.userLoggedIn) {
        //             console.log('this.props.user.savedRestaurants', this.props.user.savedRestaurants)
        //             let temp = this.props.user.savedRestaurants.find( element => element === this.props.restaurant.id)
        //
        //             if (!temp) {
        //             } else {
        //                 this.setState({
        //                     isFavorite: true
        //                 });
        //             }
        //         }
        //     })
        // }
        //

        if (this.props.userLoggedIn) {
            let temp = this.props.user.savedRestaurants.find( element => element === this.props.restaurant.id)

            if (!temp) {
            } else {
                this.setState({
                    isFavorite: true
                });
            }
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
        // console.log('IS THIS RESTO SAVED:', this.state.isFavorite)

        const { restaurant, allReviews } = this.state

        if (this.props.loading){
            return (
                <Loading />
            )
        } else {
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
                                        user={this.props.user}
                                        restaurant={this.state.restaurant}
                                        showLogin={this.showLogin}
                                        showSignup={this.showSignup}
                                        offeredRewards={this.state.restaurant.typeOfRewards}
                                        updateUser={this.props.updateUser}
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
                                        <span>
                                            <FaRegBuilding
                                                size={22}
                                            />
                                            {restaurant.address}</span>
                                        <span>
                                            <IoIosCall
                                                size={22}
                                            />
                                            {restaurant.phone}</span>
                                        <a href={'http://www.' + restaurant.website} target="_blank">Eatery Website</a>

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

                                        <p> {restaurant.about} </p>

                                        <h2>Sustainable Practices</h2>
                                        <ul>
                                            {
                                                restaurant.sustainabilityPractices.map( item =>
                                                    <li>{item}</li>
                                                )
                                            }
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
                                                            initialRating={this.state.reviewRating}
                                                            onChange={(rate) => this.setState({ reviewRating: rate})}

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

                                                    <textarea
                                                        value={this.state.reviewText}
                                                        onChange={(rate) => this.setState({ reviewText: rate.target.value})}
                                                    />

                                                    <button
                                                        onClick={this.submitReview}
                                                    >
                                                        Submit Review
                                                    </button>
                                                </div>)
                                                :   (<div/>)
                                        }


                                        <div className='restaurant-detail-reviews-list'>
                                            {
                                                allReviews.map( review => (
                                                    <div
                                                        className='restaurant-detail-reviews-list-item'
                                                        key={`${review.username}/${Date.parse(review.date)}`}
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
                                                            <span >{this.dateString(review.date)}</span>
                                                        </div>

                                                        <p>{review.review}</p>
                                                    </div>
                                                ))
                                            }

                                            <div className='restaurant-detail-reviews-list-item-void'>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            )
                            :
                            <Loading />
                    }


                    <Footer />
                </div>
            )
        }
    }

    
}


export default withRouter(RestaurantDetails)