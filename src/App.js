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
      loading: true,
    }
  }

  doSomethingBeforeUnload = () => {
    // setTimeout(() => {
    //   localStorage.setItem("user", "null")
    // }, 3000)

  }

  setupBeforeUnloadListener = () => {
    window.addEventListener("unload", (ev) => {
      ev.preventDefault();
      return this.doSomethingBeforeUnload();
    });
  };

  refresh = () => {
    this.setState({})
  }

  updateUser = (editedUser) => {
    this.setState({
      user: editedUser,
    }, () => {
      localStorage.setItem("user", JSON.stringify(editedUser))
    })

  }

  logOutUser = () => {
    this.setState({
      userLoggedIn: false,
      user: {},
    }, () => {
      localStorage.setItem("user", "null")
    })
  }

  logInUser = (user) => {
      this.setState({
        userLoggedIn: true,
        user,
      }, () => {
        localStorage.setItem("user", JSON.stringify(user))
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
    API.getAllRestaurants().then(res => {
        this.setState({
          restaurants: res
        })

        let existingUser = JSON.parse(localStorage.getItem("user"))
        if (existingUser != null){
          this.setState({
            userLoggedIn: true,
            user: existingUser,
            loading: false,
          })

          API.getUser(existingUser.username).then( user => {
            this.setState({
              userLoggedIn: true,
              user,
            })
          })
        } else {
          this.setState({
            loading: false,
          })
        }

    })
    // this.setupBeforeUnloadListener();

    console.log("GOES IN APP COMPONENT DID MOUNT")


  }

  render() {
    console.log('appstate:', this.state)
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
                  updateUser={this.updateUser}
                  selectRestaurant={this.selectRestaurant}
                  refresh={this.refresh}
                  loading={this.state.loading}
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
                  populateAllRestaurants={this.populateAllRestaurants}
                  updateUser={this.updateUser}
                  loading={this.state.loading}
                  selectRestaurant={this.selectRestaurant}
                  restaurants={this.state.restaurants}

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
