import React, { Component } from 'react'

class SaleCreateSuccess extends Component {


    render() {
        if (this.props.visible){
            return (
                <div>
                    <div
                        onClick={this.props.closeSaleSuccess}
                        className='restaurant-edit-backdrop'
                    />

                    <div className='sale-success-container'>
                        <h2>Sales Created</h2>
                        <div>
                            <span>Code:</span>
                            <label>{this.props.saleID}</label>
                        </div>
                        <div>
                            <span>Price:</span>
                            <label>{this.props.price}</label>
                        </div>
                        <p>Please provide this code to the customer.</p>
                        <button onClick={this.props.closeSaleSuccess}>
                            Close
                        </button>
                    </div>
                </div>

            )
        } else {
            return (
                <div />
            )
        }
    }
}

export default SaleCreateSuccess