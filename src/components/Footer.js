import React, { Component } from 'react'
import { Link } from "react-router-dom";

import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'


class Footer extends Component {


    render() {
        return(
            <div className='footer-container'>

                <div className='footer-item1'>
                    <p> Privacy Policy </p>
                </div>

                <div className='footer-item2'>
                    <p>Contact Us: </p>
                    <p>support@cafeco.com</p>
                    <p>0443 234 253</p>

                </div>

                <div className='footer-item3'>
                    <p>Follow Us:</p>
                    <span className='footer-item3-icons'>
                        <IoLogoTwitter />
                        <IoLogoFacebook />
                        <IoLogoInstagram />
                    </span>
                </div>

                <div className='footer-item4'>
                    <Link
                        to='/partner/login'
                        className='footer-link'
                    >
                        Partner Business Portal
                    </Link>
                </div>


                <div className='footer-item5'>
                    <p>Copyright CafeCo 2019 </p>
                </div>

            </div>

        )
    }

}

export default Footer