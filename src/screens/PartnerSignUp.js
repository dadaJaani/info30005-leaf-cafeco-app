import React, { Component } from 'react'

import * as API from '../utils/api'
import { css } from 'emotion';

import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';

const override = css`
    display: block;
    margin: 0 auto;
    width: 10em;
    border-color: red;
`;

class PartnerSignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            restaurant: {
                id: "",
                password: "",
                email: "",
                name: "",
                address: " ",
                description: "",
                about: "",
                sustainabilityPractices: [],
                foodReviews:[],
                sustainabilityReviews:[],
                averageFoodRating: 0,
                location: {
                    lat: 0,
                    lng: 0,
                },
                website: "",
                phone: "",
                averageSustainabilityRating: 0,
                typeOfRewards: [],
                photo: "",
            },
            loading: false,

        }
        this.buttonActive = false
    }



    handleChange = () => {
        let typeOfRewards = []
        let sustainabilityPractices = this.refs.sustainabilityPracticesIN.value.split('//');

        if (this.refs.RewFDIN.checked) typeOfRewards.push(this.refs.RewFDIN.value)
        if (this.refs.Rew10IN.checked) typeOfRewards.push(this.refs.Rew10IN.value)
        if (this.refs.Rew20IN.checked) typeOfRewards.push(this.refs.Rew20IN.value)
        if (this.refs.Rew25IN.checked) typeOfRewards.push(this.refs.Rew25IN.value)
        if (this.refs.Rew50IN.checked) typeOfRewards.push(this.refs.Rew50IN.value)
        if (this.refs.Rew75IN.checked) typeOfRewards.push(this.refs.Rew75IN.value)
        if (this.refs.RewFMIN.checked) typeOfRewards.push(this.refs.RewFMIN.value)
        if (this.refs.Rew100IN.checked) typeOfRewards.push(this.refs.Rew100IN.value)



        this.setState({
            restaurant: {
                id: this.refs.idIN.value.toLowerCase(),
                password: this.refs.passwordIN.value.toLowerCase(),
                email: this.refs.emailIN.value.toLowerCase(),
                name: this.refs.nameIN.value,
                address: this.refs.addressIN.value,
                description: this.refs.descriptionIN.value,
                about: this.refs.aboutIN.value,
                sustainabilityPractices: sustainabilityPractices,
                location: {
                    lat: parseFloat(this.refs.latIN.value),
                    lng: parseFloat(this.refs.lngIN.value),
                },
                website: this.refs.websiteIN.value.toLowerCase(),
                phone: this.refs.phoneIN.value,
                typeOfRewards: typeOfRewards,
                photo: this.refs.photoIN.value,
            },

        })

        const { id, password, email, name, address, description, about, sustainablePractices, location, website, phone, photos } = this.state

    }

    resetFields = () => {
        this.refs.RewFDIN.checked = false
        this.refs.Rew10IN.checked = false
        this.refs.Rew20IN.checked = false
        this.refs.Rew25IN.checked = false
        this.refs.Rew50IN.checked = false
        this.refs.Rew75IN.checked = false
        this.refs.RewFMIN.checked = false
        this.refs.Rew100IN.checked = false
        this.refs.sustainabilityPracticesIN.value = ''

        this.refs.latIN.value = ''
        this.refs.lngIN.value = ''

        this.setState({
            restaurant: {
                id: "",
                password: "",
                email: "",
                name: "",
                address: " ",
                description: "",
                about: "",
                sustainabilityPractices: [],
                foodReviews:[],
                sustainabilityReviews:[],
                averageFoodRating: 0,
                location: {
                    lat: 0,
                    lng: 0,
                },
                website: "",
                phone: "",
                averageSustainabilityRating: 0,
                typeOfRewards: [],
                photo: "",
            },
            loading: false,
        })


    }

    createRestaurant = (e) => {
        e.preventDefault()
        ;
        this.setState({
            loading: true,
        })

        API.createRestaurant(this.state.restaurant).then(res => {
            this.resetFields()
            alert('Successfully created restaurant: ' + res.id)
        });
    }

    render() {
        return (
            <div className='admin-add-partner-container'>

                <form
                    onSubmit={this.createRestaurant}
                >

                    <div>
                        <label>Restaurant ID: </label>
                        <input
                            value={this.state.restaurant.id}
                            ref="idIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Restaurant Password: </label>
                        <input
                            value={this.state.restaurant.password}
                            ref="passwordIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input
                            value={this.state.restaurant.email}
                            ref="emailIN"
                            onChange={this.handleChange}
                            required
                            type='email'
                        />
                    </div>
                    <div>
                        <label>Name: </label>
                        <input
                            value={this.state.restaurant.name}
                            ref="nameIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Address: </label>
                        <input
                            value={this.state.restaurant.address}
                            ref="addressIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Description: </label>
                        <textarea
                            value={this.state.restaurant.description}
                            ref="descriptionIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>About: </label>
                        <textarea
                            value={this.state.restaurant.about}
                            ref="aboutIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Sustainable Practice (separate by '//'): </label>
                        <textarea
                            ref="sustainabilityPracticesIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div id='select-rewards-checkbox-input'>

                        <label>Type of Rewards: </label>

                        <div id='select-rewards-checkbox-input-inner'>
                            <div>
                                <input type="checkbox" value="RewFD" ref="RewFDIN" onChange={this.handleChange}/> <p>Free Drink</p>
                            </div>
                            <div>
                                <input type="checkbox" value="Rew10" ref="Rew10IN" onChange={this.handleChange}/> <p>10% Off</p>
                            </div>
                            <div>
                                <input type="checkbox" value="Rew20" ref="Rew20IN" onChange={this.handleChange}/> <p>20% Off</p>
                            </div>
                            <div>
                                <input type="checkbox" value="Rew25" ref="Rew25IN" onChange={this.handleChange}/> <p>25% Off</p>
                            </div>
                            <div>
                                <input type="checkbox" value="Rew50" ref="Rew50IN" onChange={this.handleChange}/> <p>50% Off</p>
                            </div>
                            <div>
                                <input type="checkbox" value="Rew75" ref="Rew75IN" onChange={this.handleChange}/> <p>75% Off</p>
                            </div>
                            <div>
                                <input type="checkbox" value="RewFM" ref="RewFMIN" onChange={this.handleChange}/> <p>Free Meal</p>
                            </div>
                            <div>
                                <input type="checkbox" value="Rew100" ref="Rew100IN" onChange={this.handleChange}/> <p>100% Off</p>
                            </div>
                        </div>


                    </div>

                    <div>
                        <label>Location: </label>
                        <input
                            ref="latIN"
                            placeholder="Latitude"
                            onChange={this.handleChange}
                            id={'small-input'}
                            required
                            type='number'
                            step={0.000001}
                        />
                        <input
                            ref="lngIN"
                            placeholder="Longitude"
                            onChange={this.handleChange}
                            id={'small-input'}
                            required
                            type='number'
                            step={0.000001}
                        />
                    </div>
                    <div>
                        <label>Website (exclude 'http://www.'): </label>
                        <input
                            value={this.state.restaurant.website}
                            ref="websiteIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input
                            value={this.state.restaurant.phone}
                            ref="phoneIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Photo: </label>
                        <input
                            value={this.state.restaurant.photo}
                            ref="photoIN"
                            onChange={this.handleChange}
                            required

                        />
                    </div>

                    <button
                        className='signup-button'
                    >
                        Add Partner
                    </button>

                </form>

                <button
                    className='signup-button'
                    onClick={this.resetFields}
                >
                    Reset
                </button>

                <Dots
                    size={15}
                    color={'#4ac785'}
                    speed={2}
                    animating={this.state.loading}
                />


            </div>
        )
    }
}

export default PartnerSignUp