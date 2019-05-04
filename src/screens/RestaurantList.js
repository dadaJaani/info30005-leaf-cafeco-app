import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Dashboard from "./Dashboard";

class RestaurantList extends Component {

    constructor (props) {
        super(props)

        this.state = {
            items: props.restaurants,
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

    sortIntoCategories = () => {
        let temp =  {}
        let sortedTemp = this.state.items.sort((a,b) => a.name > b.name ? 1 : -1)

        sortedTemp.forEach((item) => {
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
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            items: nextProps.restaurants
        });
        this.sortIntoCategories()
    }

    componentDidMount() {
        if (this.props.restaurants.length === 0) {
            this.props.populateAllRestaurants()
        } else {
            this.sortIntoCategories()
        }
    }

    scrollToTop = () => {
        window.scrollTo(0, 0)
    }


    render(){

        const { itemsSorted } = this.state
        console.log(this.props)

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
                                            this.props.selectRestaurant(restaurant.id)
                                            this.props.history.push('/restaurant/' + restaurant.id)
                                        }}
                                    >
                                        <img
                                            alt='restosasd photo'
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