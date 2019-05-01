import React, { Component } from 'react'

import * as API from '../utils/api'

class PartnerSignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: "",
            password: "",
            email: "",
            name: "",
            address: " ",
            description: "",
            about: "",
            sustainablePractices: "",
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
            photos: "",
        }

        this.buttonActive = false
    }



    handleChange = () => {
        let typeOfRewards = []

        if (this.refs.RewFDIN.checked) typeOfRewards.push(this.refs.RewFDIN.value)
        if (this.refs.Rew10IN.checked) typeOfRewards.push(this.refs.Rew10IN.value)
        if (this.refs.Rew20IN.checked) typeOfRewards.push(this.refs.Rew20IN.value)
        if (this.refs.Rew25IN.checked) typeOfRewards.push(this.refs.Rew25IN.value)
        if (this.refs.Rew50IN.checked) typeOfRewards.push(this.refs.Rew50IN.value)
        if (this.refs.Rew75IN.checked) typeOfRewards.push(this.refs.Rew75IN.value)
        if (this.refs.RewFMIN.checked) typeOfRewards.push(this.refs.RewFMIN.value)
        if (this.refs.Rew100IN.checked) typeOfRewards.push(this.refs.Rew100IN.value)


        this.setState({
            id: this.refs.idIN.value.toLowerCase(),
            password: this.refs.passwordIN.value.toLowerCase(),
            email: this.refs.emailIN.value.toLowerCase(),
            name: this.refs.nameIN.value,
            address: this.refs.addressIN.value,
            description: this.refs.descriptionIN.value,
            about: this.refs.aboutIN.value,
            sustainablePractices: this.refs.sustainablePracticeIN.value,
            location: {
                lat: parseFloat(this.refs.latIN.value),
                lng: parseFloat(this.refs.lngIN.value),
            },
            website: this.refs.websiteIN.value.toLowerCase(),
            phone: this.refs.phoneIN.value,
            typeOfRewards: typeOfRewards,
            photos: this.refs.photoIN.value,
        })

        const { id, password, email, name, address, description, about, sustainablePractices, location, website, phone, photos } = this.state


    }

    createRestaurant = (e) => {
        e.preventDefault();


        API.createRestaurant(this.state).then(res => console.log(res));
        console.log(this.state)
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
                            value={this.state.id}
                            ref="idIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Restaurant Password: </label>
                        <input
                            value={this.state.password}
                            ref="passwordIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input
                            value={this.state.email}
                            ref="emailIN"
                            onChange={this.handleChange}
                            required
                            type='email'
                        />
                    </div>
                    <div>
                        <label>Name: </label>
                        <input
                            value={this.state.name}
                            ref="nameIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Address: </label>
                        <input
                            value={this.state.address}
                            ref="addressIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Description: </label>
                        <textarea
                            value={this.state.description}
                            ref="descriptionIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>About: </label>
                        <textarea
                            value={this.state.about}
                            ref="aboutIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Sustainable Practice: </label>
                        <textarea
                            value={this.state.sustainablePractice}
                            ref="sustainablePracticeIN"
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
                            value={this.state.website}
                            ref="websiteIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input
                            value={this.state.phone}
                            ref="phoneIN"
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Photo: </label>
                        <input
                            value={this.state.photo}
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

                    <input
                        value={this.state.photo}
                        ref="photoIN"
                        onChange={this.handleChange}
                        type='reset'

                    />

                </form>


            </div>
        )
    }
}

export default PartnerSignUp