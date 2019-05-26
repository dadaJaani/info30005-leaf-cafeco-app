import React, { Component } from 'react'

import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

import { createBrowserHistory as createHistory } from "history";

import * as ReactRouter from "react-router-dom";

import Home from './screens/Home'
import Dashboard from "./screens/Dashboard"
import Profile from './screens/Profile'
import RestaurantDetails from './screens/RestaurantDetails'
import RestaurantList from './screens/RestaurantList'
import About from './screens/About'
import AboutHow from './screens/AboutHow'
import Sustainability from './screens/Sustainability'
import PartnerSignUp from './screens/PartnerSignUp'
import PartnerDashboard from './screens/PartnerDashboard'
import PartnerLogin from './screens/PartnerLogin'
import PartnerReviews from './screens/PartnerReviews'


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
      partner: {},
      refresh: '',
    }
    // this.history = createHistory({forceRefresh:true});
    this.history = createHistory();

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
    // this.populateAllRestaurants()
    API.getAllRestaurants().then(res => {
        this.setState({
          restaurants: res
        })

        let existingUser = JSON.parse(localStorage.getItem("user"))
        if (existingUser != null){
          // this.setState({
          //   userLoggedIn: true,
          //   user: existingUser,
          //   loading: false,
          // })

          API.getUser(existingUser.username).then( user => {
            this.setState({
              userLoggedIn: true,
              user,
              loading: false,
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


  logInPartner = (partnerLoginDets) => {
    let promise = new Promise( (resolve, reject) => {

      API.loginPartner(partnerLoginDets).then( item => {
        if (item === false) {
          reject("Password Incorrect");
        } else {
          this.setState({
            partner: item
          }, () => {
            resolve(item)
          })
        }
      })
    });

    return promise
  }

  editPartner = (id, partnerEditData) => {
    let promise = new Promise( (resolve, reject) => {
      API.editPartner(id, partnerEditData).then( item => {

        if (item === false) {
          reject("Error with Editing");
        } else {

          let newEditedPartner = {
              id: this.state.partner.id,
              password: this.state.partner.password,
              email: this.state.partner.email,
              foodReviews: this.state.partner.foodReviews,
              sustainabilityReviews: this.state.partner.sustainabilityReviews,
              averageFoodRating: this.state.partner.averageFoodRating,
              averageSustainabilityRating:this.state.partner.averageSustainabilityRating,
              ...partnerEditData.restaurantUpdate,
          }

          this.setState({
            partner: newEditedPartner,
          }, () => {
            resolve(item)
          })
        }
      })
    });

    return promise

  }

  logOutPartner = () => {
    this.history.replace('/partner/login')
    this.setState({
      partner: {}
    })
  }

  render() {

    // console.log(('' + Math.random().toString(36).substr(2, 7)).toUpperCase() )

    let newEditedPartner = {}
    console.log('appstate:', this.state)
    // console.log('context:', this.history)

    return (
      <div className='app-container'>
        <Router history={this.history}>

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

          <Route path="/about/us" render={() => (
              <About
                logInUser={this.logInUser}
                signUpUser={this.signUpUser}
                userLoggedIn={this.state.userLoggedIn}
                user={this.state.user}
                logOutUser={this.logOutUser}
              />
            )}
          />

          <Route path="/about/how" render={() => (
              <AboutHow
                  logInUser={this.logInUser}
                  signUpUser={this.signUpUser}
                  userLoggedIn={this.state.userLoggedIn}
                  user={this.state.user}
                  logOutUser={this.logOutUser}
              />
          )}
          />

          <Route path="/sustainability" render={() => (
              <Sustainability
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

          <Route path="/partner/home"  render={() => (
              <PartnerDashboard
                  partner={this.state.partner}
                  logOutPartner={this.logOutPartner}
                  editPartner={this.editPartner}
              />
          )}
          />

          <Route path="/partner/login"  render={() => (
              <PartnerLogin
                  restaurants={this.state.restaurants}
                  logInPartner={this.logInPartner}
              />
          )}
          />

          <Route path="/partner/reviews"  render={() => (
              <PartnerReviews
                  partner={this.state.partner}
                  logOutPartner={this.logOutPartner}
              />
          )}
          />





        </Router>
      </div>
    );
  }
}

export default App;
