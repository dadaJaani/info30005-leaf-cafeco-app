import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './screens/Home'
import Dashboard from "./screens/Dashboard"
import Profile from './screens/Profile'
import RestaurantDetails from './screens/RestaurantDetails'
import RestaurantList from './screens/RestaurantList'
import About from './screens/About'




import './styles/main.css'

import * as API from './utils/api'


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      userLoggedIn: false,
      user: {},
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

  render() {
    console.log('app props', this.props)
    console.log('app state', this.state)

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
                  logOutUser={this.logOutUser}

              />
          )}/>

          <Route path="/user/:userID" render={() => (
              <Profile
                  userLoggedIn={this.state.userLoggedIn}
                  user={this.state.user}
                  logOutUser={this.logOutUser}
              />
          )}/>

          <Route path="/restaurant/:restaurantID" render={() => (
              <RestaurantDetails
                  logInUser={this.logInUser}
                  signUpUser={this.signUpUser}
                  userLoggedIn={this.state.userLoggedIn}
                  user={this.state.user}
                  logOutUser={this.logOutUser}
              />
          )}/>

          <Route path="/restaurants" render={() => (
              <RestaurantList
                  logInUser={this.logInUser}
                  signUpUser={this.signUpUser}
                  userLoggedIn={this.state.userLoggedIn}
                  user={this.state.user}
                  logOutUser={this.logOutUser}
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
        </Router>
      </div>
    );
  }
}

export default App;
