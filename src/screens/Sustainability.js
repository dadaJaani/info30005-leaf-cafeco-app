import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import img1 from '../assets/sust1.svg'
import img2 from '../assets/sust2.svg'

class Sustainability extends Component {

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

    render () {
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

                <div className='sustainability-container'>

                    <h1>
                        How can I do better?

                    </h1>



                    <p>
                        While we show our love to sustainable eateries, we can always take the extra step and do initiatives ourselves to help take care of the environment. So what can you do? Here are a few simple everyday changes we can make in our lives!
                    </p>



                    <h2>
                        1. Pick Public Transport!
                    </h2>
                    <img
                        src={img1}
                    />

                    <p>
                        A single person who swaps a 20-mile round-trip commute by car to public transportation can reduce annual carbon dioxide emissions by 10%.
                    </p>



                    <h2>
                        2. Understand Expiration Dates!
                    </h2>

                    <p>
                        It’s important to understand what expiration dates on food products actually mean, so that you don’t end up throwing away a perfectly good loaf of bread. Expiration dates actually refer to the product’s quality, not safety. There are a bunch of techniques you can use to extend the shelf life of everything in your kitchen, like keeping the fridge and freezer cool enough and unpacking groceries as soon as you get home from the store. Disclaimer: We are not advocating that anyone eat curdled yogurt for the sake of saving the environment!
                    </p>

                    <h2>
                        3. Use Less Food Packaging.
                    </h2>

                    <img
                        src={img2}
                    />

                    <p>
                        - If you’re a coffee lover, maybe spend a couple of bucks on a keep cup, instead of using disposable cups every time you need a coffee fix. - Make it metal. Consider investing in some metal and ceramic baking pans that you can re-use if you’re a baker, or invest in metal straws if you tend to love using straws in your drinks! - When shopping, look for products with minimal to no packaging, or at least packaging made from recycled items.
                    </p>

                    <h2>
                        4. Green your Home.
                    </h2>

                    <p>
                        Make sure your home has adequate insulation and energy-saving windows, and use a programmable thermostat for more efficient heating and cooling — and, of course, energy-saving lightbulbs for more efficient lighting.
                    </p>

                    <h2>
                        5. Eat Locally.
                    </h2>
                    <p>
                        Of course, our favourite way to help the environment is to support our locals. One of the main benefits of eating locally is reducing the amount of energy it takes to ship food. And food that comes from a local farm or farmer’s market generally uses less packaging than food from a grocery store. Eating locally also means supporting farmers who care about and protect the environment and wildlife.
                    </p>


                </div>

                <Footer />

            </div>
        )
    }
}

export default withRouter(Sustainability)