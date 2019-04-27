import React, { Component } from 'react'
import { Link } from "react-router-dom";

// import Carousel from 'nuka-carousel';
import Slider from 'react-slick'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import '../styles/main.css'

class Home extends Component {
    state = {
        slideIndex: 0,
    }
    
    render() {

        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            className: 'home-carousel-container',
        }


        return(
            <div className='home-container'>

                {/*<Carousel*/}
                {/*    showStatus={false}*/}
                {/*    showThumbs={false}*/}
                {/*    useKeyboardArrows={true}*/}
                {/*    infiniteLoop={true}*/}
                {/*    transitionTime={500}*/}
                {/*    className={'home-carousel-container'}*/}
                {/*>*/}
                {/*    <div className='home-carousel-item'>*/}
                {/*        <img*/}
                {/*            src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAA+VBMVEX/QBP/qgDmO3r/+0EAAAD//0P/rQD/sQDvPX+6fAC6Lw6SJU1cFwf1PRL/rwDdOXWiKQwGBgI4Dh718T52dB62sy7HhQBTFSxcWxgqCxbqOxF2TgBcPQD///+OJAu0Ll8+EAWAIUQkCRODIQrMNGzq5jzQzTVpRgBHEiZyHT2/vDFpGgguLgwuHwD1owAoGgBPThSinynHMg/qnAB/fSCysrKoK1kuDAQfHwhELgA+Pj7BgQCEWACRYQD/uADuPBIjCQN8HwksLCwTBQrWjwDDMmgUFAVCQRGvrC0dFAAZGQZpGziMiSSaJ1JVVBY6DwUaBw42JABNEwZbeKvKAAAEEklEQVR4nO3d/VMTRxzH8RA+ksSSBEEkWqqltAjhsZYKFgGpFJ9Qqf//H9Nsp50px+3t5ps9k6Pv98/JZuc1k8uwu9zV6vV6U3rRmBqtmZbUrQ9fc0mzNUNtqTWTmUNjV/t3pq9351CrwcEwwAADDDDAAAMMMMAAAwxCBjOj1XEGza9r0MnMobE9MMgWY/BkkPTn+YMRO5aePzG0bjY4zk7h/J16a/3rrb3X5rNANY09q0GyMBgYPErT6Zz0k6GFT2aDj90fw3U/aHvnl+Isn5/bXWnhxgUpop7Z4HnMJbi5oe3Qb15Sg+nhG8Ug6ncHAwwwwAADDDDAAAMMMMAAg/+twW3627l9OnTtR24NJaYPlTAoOwyqYfDiwdHwtaTLfky9ShgsW/Z3dqR+1HrlfjUMOoE55jUwWMzuq+WOjwEGGGCAAQYYYIABBhhggAEGE2QwbTuPZDWIXj84aRSX0uCeJZkNYscPvjClgTGrQbJSGqz4Wpce+zowG2x6x/xvX3Tlndc/pTSoNz2tFFjPmg3uRs1rVQ990/q3VATOwHd2f6wGZwODwF5UKgIMahi4MMDAhQEGLgwwcGGAgQsDDFwYYOAaweCkM3SNqWHWDybfYPepJenLZkyfK2FQdlUwuFq3JL3Zi+jTYSUMlkLrfXnV4/cXqmEQmGNe3fh9JgwwwAADDDDAAAMMMMAAAwwwmBgD43mk8tcPAtXmEnUmfeNrSfK+77PmP3rfWJB0/+eY9nQVGn8C7p849jAYGIS+LA/1MnTe9++O7OeVfeOfSI+91xHpKGZaMdUC10xnELMP5O4tvBBzoc5etwvObDcKDPLuLWwtqcHwBBhggAEGGGCAAQYYYIABBhjcAoOY+5l1WubnL1TB4Ol5TMdSf83QXiUMyg6DahhsRj2UZk76I+IZMTdar4RB+DlXroJ9psLxlyphcIYBBhhggAEGGGCAAQYYYIABBuM08N3j8asZBB7pUncG7XCjGEzt5DfjDDyfd5rSIOGimNHAGgYpDRaL6x9quRXTS7PBm35gDnm9TWkQ2gPZittjcWc0jQY9y9bMQkqD0F7YVvxem9nAsEeHAQYYYIABBhhggAEGGGCAAQaTZBD7P57e//kuqhoGF7sxvZN+sPS6EgZlVwWD+ZWN663M6+Jy/3qXPels1dBBJQw2bnyHN7R1Y4Gvb3zGz2xFDLLXcmeQfd2i1MYAAwwwwAADDDDAAAMMMMAAg9toED6PVL6BoWl3z7jhn2WTW+1+cfsXpRtsBaaQn7T8baIizieWbTD2at8Hule6wet5X9Ir37QOJO/bopN+/21QcI4HpRv47ylbcGb7mdS1bGdkxv/1u0ETYVDPL2TgeVt8GGCAAQYYYIABBhhggAEGGAQN/gJj6/0hG8h+YwAAAABJRU5ErkJggg=='}*/}
                {/*            alt={'picture'}*/}
                {/*        />*/}
                {/*        <div className={'button-landing'}>*/}
                {/*            Log In*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    <div className='home-carousel-item'>*/}
                {/*        Div 2*/}
                {/*        <div className={'button-landing'}>*/}
                {/*            Log In*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className='home-carousel-item'>*/}

                {/*        Div 4*/}
                {/*    </div>*/}
                {/*</Carousel>*/}

                <div className='landing-grid-container'>
                    <div className='landing-grid-item1'>

                    </div>

                    <div className='landing-grid-item2'>

                    </div>

                    <div className='landing-grid-item3'>

                    </div>

                    <div className='landing-grid-item4'>

                    </div>

                    <div className='landing-grid-button'>
                        <Link
                            to='/dashboard'
                            className='landing-grid-button-inner'
                        >
                            Home
                        </Link>
                    </div>



                </div>


            </div>
        )
    }
}

export default Home