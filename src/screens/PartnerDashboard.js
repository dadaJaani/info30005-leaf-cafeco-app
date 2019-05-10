import React, { Component } from 'react';

import PartnerSidebar from '../components/PartnerSidebar'
import PartnerEdit from '../components/PartnerEdit'
import SaleCreateSuccess from '../components/SaleCreateSuccess'
import * as API from '../utils/api'

import '../styles/restaurant.css';

import logo from "../assets/cafecopartnerslogo.svg";
import marker from "../assets/Image-10.png";
import {Link} from "react-router-dom";

class PartnerDashboard extends Component {

    rewardHelper = {
        RewFD: {
            description: "Free Drink",
            points: 35,
        },
        Rew10: {
            description: "10% Off",
            points: 50,
        },
        Rew20: {
            description: "20% Off",
            points: 75,
        },
        Rew25: {
            description: "25% Off",
            points: 100,
        },
        Rew50: {
            description: "50% Off",
            points: 200,
        },
        Rew75: {
            description: "75% Off",
            points: 350,
        },
        RewFM: {
            description: "Free Meal",
            points: 500,
        },
        Rew100: {
            description: "100% Off",
            points: 1000,
        },
    }

    state = {
        salePriceInput: 0,
        partner: {},
        editVisible: false,
        saleSuccessVisible: false,
        createdSalePrice: 0,
        createdSaleID: '',
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            ...this.state,
        })
    }

    openEdit = () => {
        this.setState({
            editVisible: true,
        })
    }

    closeEdit = () => {
        this.setState({
            editVisible: false,
        })
    }

    openSaleSuccess = () => {
        this.setState({
            saleSuccessVisible: true,
        })
    }

    closeSaleSuccess = () => {
        this.setState({
            saleSuccessVisible: false,
        })
    }

    createSale = (e) => {
        e.preventDefault()

        let saleID = ('' + Math.random().toString(36).substr(2, 8)).toLowerCase();

        let newSale = {
            id: saleID,
            restaurantId: this.props.partner.id,
            date: new Date(),
            price: this.state.salePriceInput,
        }

        API.createSale(newSale).then( res => {
            this.setState(prevState => ({
                salePriceInput: 0,
                saleSuccessVisible: true,
                createdSalePrice: prevState.salePriceInput,
                createdSaleID: saleID.toUpperCase(),
            }))
        })

    }

    render() {
        console.log(this.state)
        console.log('this.props',this.props)

        const { partner } = this.props

        if (partner.id) {

            return (
                <div className="partner-top-container">
                    <PartnerSidebar
                        name={partner.name}
                        address={partner.address}
                        logOutPartner={this.props.logOutPartner}
                    />

                    <PartnerEdit
                        visible={this.state.editVisible}
                        closeEdit={this.closeEdit}
                        partner={this.props.partner}
                        editPartner={this.props.editPartner}
                    />

                    <SaleCreateSuccess
                        visible={this.state.saleSuccessVisible}
                        closeSaleSuccess={this.closeSaleSuccess}
                        price={this.state.createdSalePrice}
                        saleID={this.state.createdSaleID}
                    />

                    <div className = "partner-main-container">
                        <div className="partner-stats-container">
                            <h2>
                                Statistics
                            </h2>

                            <label>
                                #100
                            </label>
                            <p>
                                on featured cafes of the week
                            </p>

                        </div>

                        <div className="partner-sale-container">
                            <h2>
                                Create Sale
                            </h2>
                            <form
                                onSubmit={this.createSale}
                            >
                                <input
                                    type={"number"}
                                    value={this.state.salePriceInput}
                                    min={1}
                                    placeholder='enter price'
                                    onChange={(ref) => this.setState({salePriceInput: parseInt(ref.target.value)})}
                                    required
                                />
                                <button className="partner-sale-button">
                                    Create
                                </button>
                            </form>



                        </div>

                        <div className = "restaurant-profile-container">

                            <div className='restaurant-profile-heading'>
                                Profile
                            </div>

                            <label className="restaurant-profile-item1">
                                Name:
                            </label>
                            <div className="restaurant-profile-item2">
                                {partner.name}

                            </div>

                            <label className="restaurant-profile-item3">
                                Description
                            </label>
                            <div className="restaurant-profile-item4">
                                {partner.description}
                            </div>



                            <label className="restaurant-profile-item5">
                                Rewards Offered:

                            </label>
                            <div className="restaurant-profile-item6">
                                <ul>
                                    {
                                       partner.typeOfRewards.map(item =>
                                        <li>
                                            {this.rewardHelper[item].description}
                                        </li>
                                       )
                                    }

                                </ul>
                            </div>

                            <label className="restaurant-profile-item7">
                                About:
                            </label>
                            <div className="restaurant-profile-item8">
                                {partner.about}
                            </div>

                            <label className="restaurant-profile-item9">
                                Sustainability Practices:
                            </label>
                            <div className="restaurant-profile-item10">
                                <ul>
                                    {
                                        partner.sustainabilityPractices.map(item =>
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    }

                                </ul>
                            </div>

                            <label className="restaurant-profile-item11">
                                Address:
                            </label>
                            <div className="restaurant-profile-item12">
                                {partner.address}
                            </div>

                            <div className='restaurant-profile-button'>
                                <button onClick={this.openEdit}>
                                    Edit
                                </button>
                            </div>

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

export default PartnerDashboard;
