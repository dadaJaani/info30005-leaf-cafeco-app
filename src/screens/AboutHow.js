import React, { Component } from 'react'

import { withRouter } from "react-router-dom";
import Rating from 'react-rating';

import NavBar from "../components/NavBar";

import Footer from "../components/Footer";

import leafTranslucent from "../assets/leaf-translucent.svg";
import leafOpaque from "../assets/leaf-opaque.svg";

class AboutHow extends  Component {


    render() {

        return (
            <div>
                <NavBar
                    {...this.props}
                    logOutUser={this.logOutUser}
                    logInUser={this.logInUser}
                    signUpUser={this.signUpUser}
                    userLoggedIn={this.props.userLoggedIn}
                    goToProfile={this.goToProfile}
                />

                <div className='about-how-container'>

                    <h1>
                        FAQ

                    </h1>

                    <h2>
                        How do I get a redeemable code?
                    </h2>

                    <p>
                        Once you’ve visited a partnered cafe, the cafe will register your sale & you will receive a code via email.
                    </p>


                    <h2>
                        How do I claim a reward?
                    </h2>

                    <p>
                        Copy the code given to you in the email. Click the link through the email, or, head to your desired restaurant on CafeCo. Find the list of rewards and claim the reward you want! Your credits will automatically deduct.
                    </p>

                    <h2>
                        How should I rate cafes I’ve visited?
                    </h2>
                    <p>
                        Once you’ve visited a cafe, we recommend you leave a review on how sustainable your experience was while you dined at the cafe. You can this guide to help give an accurate rating of how eco you felt.
                    </p>

                    <div>
                        <Rating
                            initialRating={1}
                            readonly={true}
                            emptySymbol={
                                <img
                                    alt='leaf empty'
                                    width={25}
                                    height={25}
                                    src={leafTranslucent}
                                />
                            }
                            fullSymbol={
                                <img
                                    alt='leaf full'
                                    width={25}
                                    height={25}
                                    src={leafOpaque}
                                />
                            }

                        />
                        <label>
                            1 star: The cafe doesn’t use any kind of sustainable practices at all. You noticed many unsustainable practices and felt the staff wasn’t aware of their Corporate Social Responsibility.
                        </label>
                    </div>

                    <div>
                        <Rating
                            initialRating={2}
                            readonly={true}
                            emptySymbol={
                                <img
                                    alt='leaf empty'
                                    width={25}
                                    height={25}
                                    src={leafTranslucent}
                                />
                            }
                            fullSymbol={
                                <img
                                    alt='leaf full'
                                    width={25}
                                    height={25}
                                    src={leafOpaque}
                                />
                            }

                        />
                        <label>
                            2 stars: The cafe uses one or two sustainable practices. However, you still felt the Cafe doesn’t have conscious efforts to be sustainable.
                        </label>
                    </div>

                    <div>
                        <Rating
                            initialRating={3}
                            readonly={true}
                            emptySymbol={
                                <img
                                    alt='leaf empty'
                                    width={25}
                                    height={25}
                                    src={leafTranslucent}
                                />
                            }
                            fullSymbol={
                                <img
                                    alt='leaf full'
                                    width={25}
                                    height={25}
                                    src={leafOpaque}
                                />
                            }

                        />
                        <label>
                            3 stars: The cafe uses a few sustainable practices. You can see the Cafe is attempting to make a start to be more consciously aware of their business practices and considering sustainability in future practices.
                        </label>
                    </div>

                    <div>
                        <Rating
                            initialRating={4}
                            readonly={true}
                            emptySymbol={
                                <img
                                    alt='leaf empty'
                                    width={25}
                                    height={25}
                                    src={leafTranslucent}
                                />
                            }
                            fullSymbol={
                                <img
                                    alt='leaf full'
                                    width={25}
                                    height={25}
                                    src={leafOpaque}
                                />
                            }

                        />
                        <label>
                            4 stars: The cafe is quite sustainable in their practices. They are aware of their Corporate Social Responsibility and they are attempting to ensure their business practices are sustainable as possible.
                        </label>
                    </div>

                    <div>
                        <Rating
                            initialRating={5}
                            readonly={true}
                            emptySymbol={
                                <img
                                    alt='leaf empty'
                                    width={25}
                                    height={25}
                                    src={leafTranslucent}
                                />
                            }
                            fullSymbol={
                                <img
                                    alt='leaf full'
                                    width={25}
                                    height={25}
                                    src={leafOpaque}
                                />
                            }

                        />
                        <label>
                            5 stars: The cafe is very sustainable in their practices. Almost all decisions and practices are eco-friendly and sustainable.
                        </label>
                    </div>

                    <h2>
                        What should I mention in my review of the cafe?
                    </h2>

                    <p>
                        If you gave a rating and want to expand on why you did, mention some of the sustainable practices you saw or didn’t see during your visit. You can also talk about your experience in general and how much you liked the food and service. However, try to make sure you talk about your experience in terms of eco-friendliness!
                    </p>




                </div>

                <Footer />

            </div>
        )
    }
}

export default withRouter(AboutHow)