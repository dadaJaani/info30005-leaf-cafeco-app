import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

class RestaurantList extends Component {

    constructor (props) {
        super(props)

        this.state = {
            items: [
                {
                    name: "Starbucks",
                    photo: "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg",
                    location: "MCG"
                },
                {
                    name: "Anderson",
                    photo: "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg",
                    location: "Home"
                },
                {
                    name: "Candey",
                    photo: "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg",
                    location: "House"
                },
                {
                    name: "Danbury",
                    photo: "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg",
                    location: "asd"
                },
                {
                    name: "DistantLannd",
                    photo: "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg",
                    location: "asdas"
                },
                {
                    name: "DistantLannd",
                    photo: "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg",
                    location: "asdas"
                },
                {
                    name: "NasstantLannd",
                    photo: "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg",
                    location: "asdas"
                },
                {
                    name: "JanstiLannd",
                    photo: "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg",
                    location: "asdas"
                },
                {
                    name: "DistantLannd",
                    photo: "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg",
                    location: "asdas"
                },
                {
                    name: "DistantLannd",
                    photo: "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg",
                    location: "asdas"
                },
                {
                    name: "DistantLannd",
                    photo: "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg",
                    location: "asdas"
                },
            ],
            itemsSorted: {},
            loading: true,
        };

        this.refIndices = {}
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
        let temp =  {}
        this.state.items.forEach((item) => {
            let firstChar = item.name[0].toUpperCase()
            if ( temp[firstChar] === undefined || temp[firstChar.toUpperCase()] === null) {
                temp[firstChar] = []
            }

            temp[firstChar].push(item)
        })

        this.setState({
            itemsSorted: temp,
            loading: false,
        })


        console.log('temp', temp)
    }

    scrollToTop = () => {
        window.scrollTo(0, 0)
    }


    render(){
        const { itemsSorted } = this.state

        return(
            <div>
                <NavBar
                    {...this.props}
                    logOutUser={this.logOutUser}
                    logInUser={this.logInUser}
                    signUpUser={this.signUpUser}
                    userLoggedIn={this.props.userLoggedIn}
                    goToProfile={this.goToProfile}
                />

                <div className='restaurant-list-top-buttons'>
                {Object.keys(itemsSorted).map((fletter) => (
                    <span
                        key={fletter}
                        className='restaurant-list-top-buttons'
                        onClick={() => window.scrollTo(0, this.refIndices[fletter].offsetTop)}
                    >
                        {fletter}
                    </span>
                ))}
                </div>

                <div className='restaurant-list-container'>
                {Object.keys(itemsSorted).map((fletter) => (
                    <div className='restaurant-list-divider' key={fletter}>
                        <div
                            className='restaurant-list-letter-title'
                            ref={(ref) => this.refIndices[fletter] = ref}
                        >
                            <span />
                            <h2 onClick={this.scrollToTop}>{fletter}</h2>
                        </div>

                        <div className='restaurant-list-sublist'>
                            {
                                itemsSorted[fletter].map(restaurant => (
                                    <div
                                        key={restaurant.name}
                                        className='restaurant-list-sublist-item'
                                        onClick={() => {
                                            this.scrollToTop()
                                            return this.props.history.push('/restaurant/' + restaurant.name )
                                        }}
                                    >
                                        <img
                                            alt='resto photo'
                                            src={restaurant.photo}
                                        />
                                        <span>
                                            {restaurant.name}
                                        </span>
                                    </div>
                                ))
                            }

                            <div className='restaurant-list-sublist-item-void' />
                        </div>

                    </div>
                ))
                }
                </div>

                <div className='restaurant-list-goto-top'>
                    <div
                        className='restaurant-list-goto-top-inner'
                        onClick={this.scrollToTop}
                    >
                        <p>Back To Top</p>
                        <IoIosArrowUp />
                    </div>

                </div>

                <Footer/>

            </div>
        )
    }
}

export default withRouter(RestaurantList)