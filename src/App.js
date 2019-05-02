import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './screens/Home'
import Dashboard from "./screens/Dashboard"
import Profile from './screens/Profile'
import RestaurantDetails from './screens/RestaurantDetails'
import RestaurantList from './screens/RestaurantList'
import About from './screens/About'
import PartnerSignUp from './screens/PartnerSignUp'

import './styles/main.css'

import * as API from './utils/api'


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      userLoggedIn: false,
      user: {},
      restaurants: [],
      selectedRestaurant: {},
    }
  }

  logOutUser = () => {
    this.setState({
      userLoggedIn: false,
      user: {},
    })
  }

  logInUser = (user) => {
      this.setState({
        userLoggedIn: true,
        user,
      })
  }

  signUpUser = (user) => {
    this.setState({
      userLoggedIn: true,
      user,
    })
  }

  selectRestaurant = (restaurantID) => {
    let selectedRestaurant =  this.state.restaurants.find( (a) => a.id === restaurantID)

    this.setState({
      selectedRestaurant
    })

  }

  populateAllRestaurants = () => {
    API.getAllRestaurants().then(res =>
        this.setState({
          restaurants: res
        })
    )
  }

  componentDidMount() {
    this.populateAllRestaurants()

  }

  render() {
    console.log(this.state)
    return (
      <div className='app-container'>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact render={() => (
              <Dashboard
                  logInUser={this.logInUser}
                  signUpUser={this.signUpUser}
                  userLoggedIn={this.state.userLoggedIn}
                  user={this.state.user}
                  restaurants={this.state.restaurants}
                  logOutUser={this.logOutUser}
                  selectRestaurant={this.selectRestaurant}
              />
          )}/>

          <Route path="/user/:userID" render={() => (
              <Profile
                  userLoggedIn={this.state.userLoggedIn}
                  user={this.state.user}
                  logOutUser={this.logOutUser}
                  restaurants={this.state.restaurants}
              />
          )}/>

          <Route path="/restaurant/:restaurantID" render={() => (
              <RestaurantDetails
                  logInUser={this.logInUser}
                  signUpUser={this.signUpUser}
                  userLoggedIn={this.state.userLoggedIn}
                  user={this.state.user}
                  logOutUser={this.logOutUser}
                  restaurant={this.state.selectedRestaurant}
              />
          )}/>

          <Route path="/restaurants" render={() => (
              <RestaurantList
                  logInUser={this.logInUser}
                  signUpUser={this.signUpUser}
                  userLoggedIn={this.state.userLoggedIn}
                  user={this.state.user}
                  logOutUser={this.logOutUser}
                  restaurants={this.state.restaurants}
                  selectRestaurant={this.selectRestaurant}
                  populateAllRestaurants={this.populateAllRestaurants}
              />
          )}/>

          <Route path="/about" exact render={() => (
              <About
                logInUser={this.logInUser}
                signUpUser={this.signUpUser}
                userLoggedIn={this.state.userLoggedIn}
                user={this.state.user}
                logOutUser={this.logOutUser}
              />
            )}
          />

          <Route path="/admin/createpartner" exact render={() => (
              <PartnerSignUp

              />
          )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
