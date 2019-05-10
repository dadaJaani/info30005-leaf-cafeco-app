import React, { Component } from 'react'

import '../styles/restaurant.css';

class PartnerEdit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            partner: props.partner,
            sustainabilityPracticesTemp: '',
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.visible !== this.props.visible) {
            this.setState({
                partner: nextProps.partner,
                sustainabilityPracticesTemp: nextProps.partner.sustainabilityPractices.join('//'),
            })
        }
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
            partner: {
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
            sustainabilityPracticesTemp: this.refs.sustainabilityPracticesIN.value,
        })
    }

    submitEdit = (e) => {
        e.preventDefault()
        this.props.editPartner(this.props.partner.id, {
            restaurantUpdate: this.state.partner
        }).then(res => {
            if (res){
                this.props.closeEdit()
            }
        })
    }

    closeEdit = (e) => {
        e.preventDefault()
        this.props.closeEdit()
    }

    render() {
        // console.log('edit state', this.state)

        const { partner } = this.state

        if (this.props.visible) {

            return(
                <div >
                    <div
                        onClick={this.closeEdit}
                        className='restaurant-edit-backdrop'
                    />

                    <form
                        onSubmit={this.submitEdit}
                        className='restaurant-edit-container'
                    >
                        <div className={'restaurant-edit-title'}>
                            Edit
                        </div>

                        <div className='restaurant-edit-input-container'>
                            <label className='restaurant-edit-input-label'>Name:</label>
                            <input
                                className={'restaurant-edit-input'}
                                placeholder={'Name'}
                                type="text"
                                value={partner.name}
                                ref="nameIN"
                                onChange={this.handleChange}/>
                        </div>



                        <div className='restaurant-edit-input-container'>
                            <label className='restaurant-edit-input-label'>Description:</label>
                            <textarea
                                className={'restaurant-edit-tainput'}
                                placeholder={'Description'}
                                type="text"
                                value={partner.description}
                                ref="descriptionIN"
                                onChange={this.handleChange}/>
                        </div>

                        <div className='restaurant-edit-input-container'>
                            <label className='restaurant-edit-input-label'>About:</label>
                            <textarea
                                className={'restaurant-edit-tainput'}
                                placeholder={'About'}
                                type="text"
                                value={partner.about}
                                ref="aboutIN"
                                onChange={this.handleChange}/>
                        </div>

                        <div className='restaurant-edit-input-container'>
                            <label className='restaurant-edit-input-label'>Sustainable Practice (separate by '//'): </label>
                            <textarea
                                className={'restaurant-edit-tainput'}
                                placeholder={'Sustainable Practice'}
                                type="text"
                                value={this.state.sustainabilityPracticesTemp}
                                ref="sustainabilityPracticesIN"
                                onChange={this.handleChange}/>
                        </div>

                        <div className='restaurant-edit-input-container'>
                            <label className='restaurant-edit-input-label'>Type of Rewards:</label>

                            <div className='restaurant-edit-input-checkbox'>
                                <div>
                                    <input
                                        checked={partner.typeOfRewards.findIndex(i => i === 'RewFD') >= 0}
                                        type="checkbox" value="RewFD" ref="RewFDIN" onChange={this.handleChange}
                                    />
                                    <span>Free Drink</span>
                                </div>
                                <div>
                                    <input
                                        checked={partner.typeOfRewards.findIndex(i => i === 'Rew10') >= 0}
                                        type="checkbox" value="Rew10" ref="Rew10IN" onChange={this.handleChange}
                                    />
                                    <span>10% Off</span>
                                </div>
                                <div>
                                    <input
                                        checked={partner.typeOfRewards.findIndex(i => i === 'Rew20') >= 0}
                                        type="checkbox" value="Rew20" ref="Rew20IN" onChange={this.handleChange}
                                    />
                                    <span>20% Off</span>
                                </div>
                                <div>
                                    <input
                                        checked={partner.typeOfRewards.findIndex(i => i === 'Rew25') >= 0}
                                        type="checkbox" value="Rew25" ref="Rew25IN" onChange={this.handleChange}
                                    />
                                    <span>25% Off</span>
                                </div>
                                <div>
                                    <input
                                        checked={partner.typeOfRewards.findIndex(i => i === 'Rew50') >= 0}
                                        type="checkbox" value="Rew50" ref="Rew50IN" onChange={this.handleChange}
                                    />
                                    <span>50% Off</span>
                                </div>
                                <div>
                                    <input
                                        checked={partner.typeOfRewards.findIndex(i => i === 'Rew75') >= 0}
                                        type="checkbox" value="Rew75" ref="Rew75IN" onChange={this.handleChange}
                                    />
                                    <span>75% Off</span>
                                </div>
                                <div>
                                    <input
                                        checked={partner.typeOfRewards.findIndex(i => i === 'RewFM') >= 0}
                                        type="checkbox" value="RewFM" ref="RewFMIN" onChange={this.handleChange}
                                    />
                                    <span>Free Meal</span>
                                </div>
                                <div>
                                    <input
                                        checked={partner.typeOfRewards.findIndex(i => i === 'Rew100') >= 0}
                                        type="checkbox" value="Rew100" ref="Rew100IN" onChange={this.handleChange}
                                    />
                                    <span>100% Off</span>
                                </div>
                            </div>
                        </div>

                        <div className='restaurant-edit-input-container'>
                            <label className='restaurant-edit-input-label'>Latitude:</label>
                            <input
                                ref="latIN"
                                placeholder="Latitude"
                                onChange={this.handleChange}
                                value={partner.location.lat}
                                className={'restaurant-edit-input'}
                                required
                                type='number'
                                step={0.000001}
                            />
                        </div>

                        <div className='restaurant-edit-input-container'>
                            <label className='restaurant-edit-input-label'>Longitude:</label>
                            <input
                                ref="lngIN"
                                placeholder="Longitude"
                                onChange={this.handleChange}
                                value={partner.location.lng}
                                className={'restaurant-edit-input'}
                                required
                                type='number'
                                step={0.000001}
                            />
                        </div>

                        <div className='restaurant-edit-input-container'>
                            <label className='restaurant-edit-input-label'>Address:</label>
                            <input
                                className={'restaurant-edit-input'}
                                placeholder={'Address'}
                                type="text"
                                value={partner.address}
                                ref="addressIN"
                                onChange={this.handleChange}/>
                        </div>

                        <div className='restaurant-edit-input-container'>
                            <label className='restaurant-edit-input-label'>Phone:</label>
                            <input
                                className={'restaurant-edit-input'}
                                placeholder={'Phone'}
                                type="text"
                                value={partner.phone}
                                ref="phoneIN"
                                onChange={this.handleChange}/>
                        </div>

                        <div className='restaurant-edit-input-container'>
                            <label className='restaurant-edit-input-label'>Photo:</label>
                            <input
                                className={'restaurant-edit-input'}
                                placeholder={'First Name'}
                                type="text"
                                value={partner.photo}
                                ref="photoIN"
                                onChange={this.handleChange}/>
                        </div>

                        <div className='restaurant-edit-input-container'>
                            <label className='restaurant-edit-input-label'>Website (exclude 'http://www.')::</label>
                            <input
                                className={'restaurant-edit-input'}
                                placeholder={'example.com.au'}
                                type="text"
                                value={partner.website}
                                ref="websiteIN"
                                onChange={this.handleChange}/>
                        </div>


                        <div className={'restaurant-edit-button-container'}>
                            <button
                                className={'restaurant-edit-button-close'}
                                onClick={this.closeEdit}>Cancel
                            </button>
                            <button
                                className={this.state.formErrors
                                    ? 'restaurant-edit-button-disabled'
                                    : 'restaurant-edit-button' }
                            >Done
                            </button>
                        </div>



                    </form>
                </div>
            )
        } else {

            return(
                <div />

            )
        }
    }
}

export default PartnerEdit