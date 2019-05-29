import React, { Component } from 'react';
import Rating from 'react-rating';

import PartnerSidebar from '../components/PartnerSidebar'

import '../styles/restaurant.css';

import logo from "../assets/cafecopartnerslogo.svg";
import leafOpaque from "../assets/leaf-opaque.svg";
import leafTranslucent from "../assets/leaf-translucent.svg";
import marker from "../assets/Image-10.png";
import {Link} from "react-router-dom";

class PartnerReviews extends Component {

    constructor(props) {
        super(props)

        this.state = {
            salePriceInput: 0,
            partner: props.partner
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps){
            this.setState({
                partner: nextProps.partner
            })
        }
    }

    getDate = (temp) => {
        let date = new Date(temp)
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }

    render() {

        const { partner } = this.state
        let topReviews = []
        let worstReviews = []
        let allReviews = []

        if (partner.id) {
            allReviews = partner.sustainabilityReviews
            console.log(allReviews)
            topReviews = allReviews.sort((b ,a) => a.rating - b.rating).slice(0,5);
            worstReviews = allReviews.sort((b ,a) => b.rating - a.rating).slice(0,5);


        }

        if (partner.id) {
            return (
                <div className = "partner-top-container">
                    <PartnerSidebar
                        name={partner.name}
                        address={partner.address}
                        logOutPartner={this.props.logOutPartner}
                    />



                    <div className="partner-review-container">
                        <h1>
                            Reviews and Ratings
                        </h1>
                        <div className="partner-review-rating">
                            <label>
                                {partner.averageSustainabilityRating.toFixed(2)}
                            </label>
                            <img src={leafOpaque} alt = "leaf"/>
                        </div>


                        <div className="partner-top-reviews-heading">
                            Top 5 Reviews
                        </div>
                        <div className="partner-top-reviews-container">
                            {
                                topReviews.map(item =>
                                    <div className="partner-reviews-item">
                                        <span>
                                            <h2>{item.username} </h2>
                                            <label>{this.getDate(item.date)}</label>
                                            <Rating
                                                initialRating={item.rating}
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
                                        </span>
                                        <div>
                                            <p>
                                                {item.review}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }

                        </div>


                        <div className="partner-worst-reviews-heading">
                            Worst 5 Reviews
                        </div>
                        <div className="partner-worst-reviews-container">
                            {
                                worstReviews.map(item =>
                                    <div className="partner-reviews-item">
                                        <span>
                                            <h2>{item.username} </h2>
                                            <label>{this.getDate(item.date)}</label>
                                            <Rating
                                                initialRating={item.rating}
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
                                        </span>
                                        <div>
                                            <p>
                                                {item.review}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                        <div className="partner-all-reviews-heading">
                            All Reviews
                        </div>
                        <div className="partner-all-reviews-container">
                            {
                                allReviews.map(item =>
                                    <div className="partner-reviews-item">
                                        <span>
                                            <h2>{item.username} </h2>
                                            <label>{this.getDate(item.date)}</label>
                                            <Rating
                                                initialRating={item.rating}
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
                                        </span>
                                        <div>
                                            <p>
                                                {item.review}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>

                </div>
            );
        } else {
            return (

                <div className='profile-not-signed-in'>
                    <h1>
                        No partner logged in. Please Log In.
                    </h1>

                    <Link
                        className={'navbar-button'}
                        to={'/partner/login'}
                    > Partner Login </Link>


                </div>


            )
        }
    }
}

export default PartnerReviews;
