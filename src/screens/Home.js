import React, { Component } from 'react'
import { Link } from "react-router-dom";

import { IoIosArrowForward, IoIosArrowBack, IoIosArrowUp } from 'react-icons/io'
import posed from 'react-pose';

import landing1 from '../assets/landing1.svg'
import landing2 from '../assets/landing2.svg'
import landing3 from '../assets/landing3.svg'


import '../styles/main.css'

class Home extends Component {

    state = {
        slideIndex: 0,
        isl1Visible: true,
        isl2Visible: false,
        isl3Visible: false,

    }

    nextPage = () => {
        if (this.state.slideIndex < 2) {
            this.setState((oldState) => {
                return {
                    slideIndex: oldState.slideIndex + 1
                }
            })
        }
    }

    prevPage = () => {
        if (this.state.slideIndex > 0) {
            this.setState((oldState) => {
                return {
                    slideIndex: oldState.slideIndex - 1
                }
            })
        }
    }


    
    render() {

        console.log(this.state)
        const { slideIndex } = this.state

        const Graphics = posed.div({
            visible: {
                opacity: 1,
                transition: {
                    duration: 400,
                    ease: 'linear'
                },
            },
            hidden: {
                opacity: 0,
                transition: {
                    duration: 400,
                    ease: 'linear'
                },
            }
        });

        const Dot = posed.div({
            coloriseg: {
                backgroundColor: '#4ac785',
                transition: {
                    duration: 400,
                    ease: 'linear'
                },
            },
            colorisey: {
                backgroundColor: '#F8C960',
                transition: {
                    duration: 400,
                    ease: 'linear'
                },
            },
            coloriser: {
                backgroundColor: '#EF5439',
                transition: {
                    duration: 400,
                    ease: 'linear'
                },
            },
            decolorise: {
                backgroundColor: '#333',
                transition: {
                    duration: 400,
                    ease: 'linear'
                },
            }
        });

        return(
            <div className='home-container'>

                <div className='home-landing-home-button-container'>
                    <Link
                        to={'/dashboard'}
                    >
                        GO
                    </Link>
                </div>

                <span className='home-landing-home-dots-container-line'/>

                <div className='home-landing-home-dots-container'>
                    <Dot
                        className='home-landing-home-dots-dot'
                        pose={slideIndex >= 0 ? 'coloriseg' : 'decolorise'}
                    >
                    </Dot>

                    <Dot
                        className='home-landing-home-dots-dot'
                        pose={slideIndex >= 1 ? 'colorisey' : 'decolorise'}
                    >
                    </Dot>

                    <Dot
                        className='home-landing-home-dots-dot'
                        pose={slideIndex === 2 ? 'coloriser' : 'decolorise'}
                    >
                    </Dot>
                </div>

                <div className='home-landing-right-button-container'>
                    <IoIosArrowForward onClick={this.nextPage} />
                </div>

                <div className='home-landing-left-button-container'>
                    <IoIosArrowBack onClick={this.prevPage} />
                </div>

                <Graphics
                    className='home-landing-graphic'
                    pose={slideIndex === 0 ? 'visible' : 'hidden'}
                >
                    <img
                        src={landing1}
                        alt='landing amage 1'
                    />
                </Graphics>

                <Graphics
                    className='home-landing-graphic'
                    pose={slideIndex === 1 ? 'visible' : 'hidden'}
                >
                    <img
                        src={landing3}
                        alt='landing amage 3'
                    />
                </Graphics>

                <Graphics
                    className='home-landing-graphic'
                    pose={slideIndex === 2 ? 'visible' : 'hidden'}
                >
                    <img
                        src={landing2}
                        alt='landing amage 2'
                    />
                </Graphics>

                {/*{*/}
                {/*    slideIndex === 0*/}
                {/*    ?*/}
                {/*        <img*/}
                {/*            src={landing1}*/}
                {/*            alt='landing amage 1'*/}
                {/*            className='home-landing-graphic-image1'*/}
                {/*        />*/}

                {/*    :*/}

                {/*        <img*/}
                {/*            src={landing3}*/}
                {/*            alt='landing amage 3'*/}
                {/*            className='home-landing-graphic-image3'*/}
                {/*        />*/}




                {/*    // slideIndex === 1 ?*/}
                {/*    // <img*/}
                {/*    // src={landing2}*/}
                {/*    // alt='landing amage 2'*/}
                {/*    // className='home-landing-graphic-image2'*/}
                {/*    // />*/}
                {/*    //*/}
                {/*    // :*/}

                {/*}*/}










            </div>
        )
    }
}

export default Home