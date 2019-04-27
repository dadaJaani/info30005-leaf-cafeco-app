import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import Rating from 'react-rating';

import NavBar from "../components/NavBar";
import RewardSelector from "../components/RewardSelector";
import Footer from '../components/Footer'

import leafTranslucent from '../assets/leaf-translucent.svg'
import leafOpaque from '../assets/leaf-opaque.svg'
import locMarker from '../assets/loc-marker.svg'


const AnyReactComponent = ({ text }) => <div>
    <img alt='marker map'  src={locMarker} width={30} height={30}/>
</div>;

class RestaurantDetails extends Component {
    
    constructor(props) {
        super(props)


        this.state = {

        }

        this.navbar = React.createRef();

    }

    showLogin = () => {
        this.navbar.current.showLogin()
    }
    showSignup = () => {
        this.navbar.current.showSignup()
    }

    logInUser = (user) => {
        this.props.logInUser(user)
    }

    logOutUser = () => {
        this.props.logOutUser()
    }

    goToProfile = () => {
        this.props.history.push('/user/' + this.props.user.name)
    }

    signUpUser = (user) => {
        this.props.signUpUser(user)
    }

    static defaultProps = {
        center: {
            lat: -37.798404,
            lng: 144.963211
        },
        zoom: 13
    };
    

    render() {


        return(
            <div>
                <NavBar
                    {...this.props}
                    ref={this.navbar}

                    logOutUser={this.logOutUser}
                    logInUser={this.logInUser}
                    signUpUser={this.signUpUser}
                    userLoggedIn={this.props.userLoggedIn}
                    goToProfile={this.goToProfile}
                />
                
                <div className='restaurant-detail-container'>

                    <RewardSelector
                        userLoggedIn={this.props.userLoggedIn}
                        showLogin={this.showLogin}
                        showSignup={this.showSignup}
                    />

                    <div className='restaurant-detail-title'>
                        The Vegie Bar
                    </div>


                    <div className='restaurant-detail-photo'>
                        <img src='https://www.broadsheet.com.au/media/cache/97/09/970914d13d1e1b4fcdd4369cef1420b9.jpg'
                             alt='restaurant photo'
                        />
                    </div>
                    <div className='restaurant-detail-info'>
                        <p>Inventive veggie and vegan meals, raw food and cocktails in a lively space with a leafy courtyard.</p>

                        <span>380, Brunswick St, Fitzroy VIC 3065</span>
                        <span>0442 124 244</span>
                        <a href='#'>Eatery Website</a>

                    </div>

                    <div className='restaurant-detail-rating'>
                        <div>Eco Friendliness</div>
                        <Rating
                            initialRating={4}
                            readonly={true}
                            emptySymbol={
                                <img
                                    alt='leaf empty'
                                    width={40}
                                    height={40}
                                    src={leafTranslucent}
                                />
                            }
                            fullSymbol={
                                <img
                                    alt='leaf full'
                                    width={40}
                                    height={40}
                                    src={leafOpaque}
                                />
                            }

                        />
                    </div>

                    <div className='restaurant-detail-map'>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyAThroloBz4lBlrWA_ZCmtXfOFdsI46CXY' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <AnyReactComponent
                                lat={-37.798404}
                                lng={144.963211}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>

                    <div className='restaurant-detail-about'>
                        <h2>About</h2>
                        <p>Lorem ipusm akdjvakljvbadlkfvba adlj ba ajf nnkjdf naj nnlakjfn ljafnvljaf nlkvjafnnlkjn </p>

                        <h2>Sustainable Practices</h2>
                        <ul>
                            <li>Practice 1</li>
                            <li>Practice 2</li>
                            <li>Practice 3</li>
                            <li>Practice 4</li>

                        </ul>
                    </div>



                    <div className='restaurant-detail-reviews'>
                        <h2>Reviews</h2>

                        {
                            this.props.userLoggedIn
                            ?
                                (<div className='restaurant-detail-reviews-list-input'>
                                    <h3>Write a review.</h3>
                                    <div>
                                        <Rating
                                            initialRating={0}
                                            emptySymbol={
                                                <img
                                                    alt='leaf empty'
                                                    width={22}
                                                    height={22}
                                                    src={leafTranslucent}
                                                />
                                            }
                                            fullSymbol={
                                                <img
                                                    alt='leaf full'
                                                    width={22}
                                                    height={22}
                                                    src={leafOpaque}
                                                />
                                            }

                                        />
                                    </div>

                                    <textarea />

                                    <button>Submit Review</button>
                                </div>)
                            :   (<div/>)
                        }


                        <div className='restaurant-detail-reviews-list'>
                            <div className='restaurant-detail-reviews-list-item'>
                                <label>sLeepIngAtLast</label>
                                <div>
                                    <Rating
                                        initialRating={4}
                                        readonly={true}
                                        emptySymbol={
                                            <img
                                                alt='leaf empty'
                                                width={22}
                                                height={22}
                                                src={leafTranslucent}
                                            />
                                        }
                                        fullSymbol={
                                            <img
                                                alt='leaf full'
                                                width={22}
                                                height={22}
                                                src={leafOpaque}
                                            />
                                        }

                                    />
                                    <span >31/3/2019</span>
                                </div>

                                <p>Lorem ipasusma akj nkaj ajdfnalksdjfn nlakjd asdjfn aksdjnf aslkjdfn alskdjf nlaskdjfn nalksjnf klasbfakd vbuann liruvnsr lsn</p>
                            </div>


                            <div className='restaurant-detail-reviews-list-item'>
                                <label>sLeepIngAtLast</label>
                                <div>
                                    <Rating
                                        initialRating={2}
                                        readonly={true}
                                        emptySymbol={
                                            <img
                                                alt='leaf empty'
                                                width={22}
                                                height={22}
                                                src={leafTranslucent}
                                            />
                                        }
                                        fullSymbol={
                                            <img
                                                alt='leaf full'
                                                width={22}
                                                height={22}
                                                src={leafOpaque}
                                            />
                                        }

                                    />
                                    <span >31/3/2019</span>
                                </div>

                                <p>Lorem ipasusma akj nkaj ajdfnalksdjfn ad lkad alkm alsmd  ad;k admv kdfm; vkamd;f knadjkfv adfmlakdm lkvnf lkmflvmadflk mkf ka mldfk malkf malkf mladfmv lkadfm fk amlf makf madjf na;df n;afdkva; ldjf ban;df ;adkfav dfkm ;adfmnadfu n;fdkv; alkdfm ;dfn ;fkdv; akfdmv ;akfdm ;kadfn lkavn ;ak sdkfm v;skdfm ;skm d;slkmv ;sfdkm ;ksfd hviofdmv kmsf msdof mlsfdv smdflms;dkf;k j;sfdkm ;ksfdmb kms;dfkm nlakjd asdjfn aksdjnf aslkjdfn alskdjf nlaskdjfn nalksjnf klasbfakd vbuann liruvnsr lsn</p>
                            </div>

                            <div className='restaurant-detail-reviews-list-item'>
                                <label>sLeepIngAtLast</label>
                                <div>
                                    <Rating
                                        initialRating={5}
                                        readonly={true}
                                        emptySymbol={
                                            <img
                                                alt='leaf empty'
                                                width={22}
                                                height={22}
                                                src={leafTranslucent}
                                            />
                                        }
                                        fullSymbol={
                                            <img
                                                alt='leaf full'
                                                width={22}
                                                height={22}
                                                src={leafOpaque}
                                            />
                                        }

                                    />
                                    <span >31/3/2019</span>
                                </div>

                                <p>Lorem ipasusma akj nkaj ajdfnalksdjfn nlakjd asdjfn aksdjnf aslkjdfn alskdjf nlaskdjfn nalksjnf klasbfakd vbuann liruvnsr lsn</p>
                            </div>

                            <div className='restaurant-detail-reviews-list-item'>
                                <label>sLeepIngAtLast</label>
                                <div>
                                    <Rating
                                        initialRating={3}
                                        readonly={true}
                                        emptySymbol={
                                            <img
                                                alt='leaf empty'
                                                width={22}
                                                height={22}
                                                src={leafTranslucent}
                                            />
                                        }
                                        fullSymbol={
                                            <img
                                                alt='leaf full'
                                                width={22}
                                                height={22}
                                                src={leafOpaque}
                                            />
                                        }

                                    />
                                    <span >31/3/2019</span>
                                </div>

                                <p>Lorem ipasusma akj nkaj ajdfnalksdjfn nlakjd asdjfn aksdjnf aslkjdfn alskdjf nlaskdjfn nalksjnf klasbfakd vbuann liruvnsr lsn</p>
                            </div>

                            <div className='restaurant-detail-reviews-list-item'>
                                <label>sLeepIngAtLast</label>
                                <div>
                                    <Rating
                                        initialRating={1}
                                        readonly={true}
                                        emptySymbol={
                                            <img
                                                alt='leaf empty'
                                                width={22}
                                                height={22}
                                                src={leafTranslucent}
                                            />
                                        }
                                        fullSymbol={
                                            <img
                                                alt='leaf full'
                                                width={22}
                                                height={22}
                                                src={leafOpaque}
                                            />
                                        }

                                    />
                                    <span >31/3/2019</span>
                                </div>

                                <p>Lorem ipasusma akj nkaj ajdfnalksdjfn nlakjd asdjfn aksdjnf aslkjdfn alskdjf nlaskdjfn nalksjnf klasbfakd vbuann liruvnsr lsn</p>
                            </div>


                            <div className='restaurant-detail-reviews-list-item-void'>
                            </div>
                        </div>

                    </div>

                </div>

                <Footer />
            </div>
        )
    }
    
    
}


export default withRouter(RestaurantDetails)