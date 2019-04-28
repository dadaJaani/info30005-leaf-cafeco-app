import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import hands from '../assets/hands.png'
import team from '../assets/team.png'

class About extends Component {

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

                    <div className='about-container'>

                        <div className='about-item1'>

                            <h1>WHO?</h1>

                                <p>Hi! We are leaf, a group of individuals passionate about empowering our generation to
                                    fight for our planet.
                                    This site was implemented by five University of Melbourne students.
                                    <ul>
                                        <li>Ena: Front-Ender.</li>
                                        <li>Nadia: Front-Ender.</li>
                                        <li>Sarah: Front-Ender.</li>
                                        <li>Waqas: Front/Back-Ender.</li>
                                        <li>Alexs: Back-Ender.</li>
                                    </ul>

                                </p>
                        </div>

                        <div className='about-item2'>
                            <img src={team}  alt="hands all together"/>

                        </div>

                        <div className='about-item5'>
                            <h1>AIM</h1>

                            <p>We aim to utilise CafeCo’s reward system as a means of encouraging individuals
                                to give their love to businesses that are doing their part to care for the
                                environment.
                                Earth needs our help. Our planets deterioration is causing many issues, such
                                as,the possible
                                extinction of Great Barrier Reef and global warming. The younger generation have
                                the drive,
                                urgency and potential to truly change the world for the better. We at Leaf, want
                                to use this
                                platform and draw upon their eagerness and shift more mindserts to utilise
                                sustainable practices.
                            </p>
                        </div>

                        <div className='about-item3'>
                            <img src={hands} alt="hands all together"/>
                        </div>

                        <div className='about-item4'>
                            <h1>WHY?</h1>
                            <p>CafeCo aims to empower youths in their fight against Climate Change and
                                promote sustainable cafes that excelling at their Corporate Social
                                Responsibility.
                                We will provide users with nearby eateries that practice sustainability.
                                While, CafeCo will also help cafes to build their customer base and
                                improve their sustainability, through providing them with relevant customer
                                feedback.

                                As a result, CafeCo creates an environment where sustainable eateries can
                                thrive
                                and Gen Z can conveniently contribute to sustainability. </p>

                        </div>
                    </div>

                <Footer />

            </div>
        )
    }
}

export default withRouter(About)