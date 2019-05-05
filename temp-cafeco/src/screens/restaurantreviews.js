import React, { Component } from 'react';
import '../styles/restaurantreviews.css';
import Rating from "react-rating"

import logo from "../images/cafecopartnerslogo.svg";
import leafOpaque from "../images/leaf-opaque.svg";
import leafTranslucent from "../images/leaf-translucent.svg";
import marker from "../images/Image-10.png";

class restaurantreviews extends Component {
    render() {
        return (
            <div className = "container">
                <div className = "sidebar-container">
                    <div className = "restaurantInfo">
                        <img className = "white-logo" src={logo} alt = "cafe profile image"/>

                        <h1 className = "cafe-title">
                            Bring the sun/Toussaint l'ouverture

                        </h1>

                        <div className = "location">
                            <div className = "marker">
                                <img className = "marker" src={marker} alt = "black and white map marker"/>
                            </div>

                            <p id = "sidebar-address">
                                9 yeeyee address rd, <br/> sub sta 3000

                            </p>
                        </div>
                    </div>

                    <div className = "menu" >
                        <div className = "menu-item" id = "account-review">
                            Account

                        </div>

                        <div className = "menu-item" id = "account-review">
                            Reviews & Ratings

                        </div>

                        <div className = "menu-item" id = "logout">
                            Log Out

                        </div>
                    </div>
                </div>


                <div className = "body-container">
                    <div className = "reviews-container">
                        <h1 className = "reviews-border" id = "reviews-header">
                            Reviews

                            <p className = "filter-by">
                                Filter by:

                            </p>

                            {/* Rating stuff is Waqas' code*/}
                            <Rating className = "select-rating" initialRating={0} readonly={false}
                                emptySymbol={
                                    <img className = "small-leaf"
                                        alt='leaf empty'
                                        width={40}
                                        height={40}
                                        src={leafTranslucent}
                                    />
                                }

                                fullSymbol={
                                    <img className = "small-leaf"
                                        alt='leaf full'
                                        width={40}
                                        height={40}
                                        src={leafOpaque}
                                    />
                                }

                            />

                        </h1>

                        <div className = "reviews">
                            <div className = "reviewItem">
                                To be kind

                                <div className = "user-review-footer">
                                    <Rating className = "user-rating" initialRating={3} readonly={true}
                                        emptySymbol={
                                            <img className = "small-leaf"
                                                alt='leaf empty'
                                                width={40}
                                                height={40}
                                                src={leafTranslucent}
                                            />
                                        }

                                        fullSymbol={
                                            <img className = "small-leaf"
                                                alt='leaf full'
                                                width={40}
                                                height={40}
                                                src={leafOpaque}
                                            />
                                        }

                                    />

                                    <p className = "review-username">
                                        Username

                                    </p>

                                    <p className = "date">
                                        31/12

                                    </p>
                                </div>
                            </div>

                            <div className = "reviewItem">
                                hemlo

                                <div className = "user-review-footer">
                                    <Rating className = "user-rating" initialRating={3} readonly={true}
                                        emptySymbol={
                                            <img className = "small-leaf"
                                                 alt='leaf empty'
                                                 width={40}
                                                 height={40}
                                                 src={leafTranslucent}
                                            />
                                        }

                                        fullSymbol={
                                            <img className = "small-leaf"
                                                 alt='leaf full'
                                                 width={40}
                                                 height={40}
                                                 src={leafOpaque}
                                            />
                                        }

                                    />

                                    <p className = "review-username">
                                        Username

                                    </p>

                                    <p className = "date">
                                        31/12

                                    </p>
                                </div>
                            </div>

                            <div className = "reviewItem">
                                you won't get what you want in the air shrieks the breath is long and the fires are
                                out and the waters sit still

                                <div className = "user-review-footer">
                                    <Rating className = "user-rating" initialRating={3} readonly={true}
                                        emptySymbol={
                                            <img className = "small-leaf"
                                                 alt='leaf empty'
                                                 width={40}
                                                 height={40}
                                                 src={leafTranslucent}
                                            />
                                        }

                                        fullSymbol={
                                            <img className = "small-leaf"
                                                 alt='leaf full'
                                                 width={40}
                                                 height={40}
                                                 src={leafOpaque}
                                            />
                                        }

                                    />

                                    <p className = "review-username">
                                        Username

                                    </p>

                                    <p className = "date">
                                        31/12

                                    </p>
                                </div>
                            </div>

                            <div className = "reviewItem">
                                item 4

                                <div className = "user-review-footer">
                                    <Rating className = "user-rating" initialRating={3} readonly={true}
                                        emptySymbol={
                                            <img className = "small-leaf"
                                                 alt='leaf empty'
                                                 width={40}
                                                 height={40}
                                                 src={leafTranslucent}
                                            />
                                        }

                                        fullSymbol={
                                            <img className = "small-leaf"
                                                 alt='leaf full'
                                                 width={40}
                                                 height={40}
                                                 src={leafOpaque}
                                            />
                                        }

                                    />

                                    <p className = "review-username">
                                        Username

                                    </p>

                                    <p className = "date">
                                        31/12

                                    </p>
                                </div>
                            </div>

                            <div className = "reviewItem">
                                item 5

                                <div className = "user-review-footer">
                                    <Rating className = "user-rating" initialRating={3} readonly={true}
                                        emptySymbol={
                                            <img className = "small-leaf"
                                                 alt='leaf empty'
                                                 width={40}
                                                 height={40}
                                                 src={leafTranslucent}
                                            />
                                        }

                                        fullSymbol={
                                            <img className = "small-leaf"
                                                 alt='leaf full'
                                                 width={40}
                                                 height={40}
                                                 src={leafOpaque}
                                            />
                                        }

                                    />

                                    <p className = "review-username">
                                        Username

                                    </p>

                                    <p className = "date">
                                        31/12
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className = "bottom">
                            <span className = "reviews-border" id = "reviews-footer">
                                <a href = "https://pm1.narvii.com/6118/d903c2b4fd6d9a4e4dd66071c5fbf493d46e50f5_hq.jpg"
                                   className = "page-link">

                                    previous &ensp;

                                </a>

                                <a href = "https://i.kym-cdn.com/photos/images/newsfeed/001/454/854/c9e.png"
                                    className = "page-link">

                                    next

                                </a>
                            </span>
                        </div>
                    </div>


                    <div className = "average-rating-container">
                        <div className = "average-rating">
                            <p className = "rating-title-text">
                                Average Rating

                            </p>
                        </div>

                        <div className = "rating-value">
                            <p className = "rating-number">
                                4.9

                            </p>

                            <img className = "big-leaf" src={leafOpaque} alt = "opaque leaf"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default restaurantreviews;
