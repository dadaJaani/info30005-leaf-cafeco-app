import React, { Component } from 'react'


class RedeemSuccess extends Component{

    render() {
        if (this.props.visible){
            return(
                <div>
                    <div
                        className={'signup-backdrop'}
                        onClick={this.props.closeRedeemSuccess}
                    ></div>

                    <div className={'redeem-container'}>
                        <h2>Redeem Successful</h2>

                        <div>
                            <p>You have been awarded <span>{this.props.points}</span> credits.</p>
                        </div>

                        <button onClick={this.props.closeRedeemSuccess}>
                            Close
                        </button>
                    </div>
                </div>
            )
        } else {
            return(
                <div />
            )
        }

    }
}

export default RedeemSuccess