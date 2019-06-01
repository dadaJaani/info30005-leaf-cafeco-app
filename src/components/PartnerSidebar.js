import React, { Component } from 'react'

import { Link, withRouter } from "react-router-dom";

import logo from "../assets/cafecopartnerslogo.svg";

class PartnerSidebar extends Component {

    logOutPartner = () => {
        this.props.logOutPartner()
        this.props.history.replace('/partner/login')
    }

    render() {
        return (
            <div className = "partner-sidebar-container">
                <div className="partner-sidebar-menu" id={"partner-sidebar-menu"}>
                    <div className = "partner-sidebar-info">
                        <img className = "white-logo" src={logo} alt = "cafe profile image"/>

                        <h2 className = "cafe-title">
                            {this.props.name}
                        </h2>

                        <p>
                            {this.props.address}

                        </p>

                    </div>


                    <Link
                        to='/partner/home'
                        className='partner-sidebar-menu-item'
                    >
                        Account
                    </Link>

                    <Link
                        to='/partner/reviews'
                        className='partner-sidebar-menu-item'
                    >
                        Reviews & Ratings
                    </Link>

                    <div
                        className='partner-sidebar-menu-item'
                        onClick={this.logOutPartner}
                    >
                        Log Out

                    </div>
                </div>


                <a href={"#partner-sidebar-menu"} className={"open"}>
                    ☰
                </a>

                <a href={"#"} className={"close"}>
                    ☰
                </a>
            </div>
        )
    }
}

export default withRouter(PartnerSidebar)