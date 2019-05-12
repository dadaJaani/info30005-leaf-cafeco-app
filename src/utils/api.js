
// const api = "http://localhost:3001"
const api = "https://cafeco.herokuapp.com"

const headers = {
    'Authorization': 'whatever i want',
    // 'Access-Control-Allow-Origin': 'http://localhost:3001'
}


// ============================================================================================================
// ============================================================================================================
//                                      USER FUNCTIONS
// ============================================================================================================
// ============================================================================================================

// FUNCTION TO CREATE USER
export const createUser = (newUser) =>
    fetch(`${api}/user`, {
        method: 'post',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( newUser )
    }).then(res => res.json())


export const getUser = (id) =>
    fetch(`${api}/user/${id}`, { headers })
        .then(res => res.json())

// FUNCTION TO EDIT USER
export const editUser = (username, edited) =>
    fetch(`${api}/user/${username}`, {
        method: 'put',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( edited )
    }).then(res => res.json())

export const editUserRewards = (username, edited) =>
    fetch(`${api}/user/${username}/rewards`, {
        method: 'put',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( edited )
    }).then(res => res.json())

export const editUserPoints = (username, edited) =>
    fetch(`${api}/user/${username}/points`, {
        method: 'put',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( edited )
    }).then(res => res.json())

export const editUserSavedRestaurants = (username, savedResaurants) =>
    fetch(`${api}/user/${username}/savedRestaurants`, {
        method: 'put',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( savedResaurants )
    }).then(res => res.json())


// FUNCTION TO CHECK USER ID
export const checkUserID = (id) =>
    fetch(`${api}/user/validate/${id}`, { headers })
        .then(res => res.json())

// FUNCTION TO CHECK USER EMAIL
export const checkUserEmail = (email) =>
    fetch(`${api}/user/validateemail/${email}`, { headers })
        .then(res => res.json())

// FUNCTION TO VALID USER ID AND LOGIN
export const login = (loginDetails) =>
    fetch(`${api}/user/login/`, {
        method: 'post',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( loginDetails )
    }).then(res => res.json())


// FUNCTION TO DELETE USER
export const deleteUser = (userID) =>
    fetch(`${api}/user/${userID}`, {
        method: 'delete',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then( res => console.log(res))



// ============================================================================================================
// ============================================================================================================
//                                      REWARD FUNCTIONS
// ============================================================================================================
// ============================================================================================================


// FUNCTION TO GET ALL REWARDS
export const getRewardsByUserID = (username) =>
    fetch(`${api}/user/${username}/rewards`, {
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then( res => res.json())



export const createReward = (newReward) =>
    fetch(`${api}/reward`, {
        method: 'post',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( newReward )
    }).then(res => res.json())





// ============================================================================================================
// ============================================================================================================
//                                      RESTAURANT FUNCTIONS
// ============================================================================================================
// ============================================================================================================

export const createRestaurant = (newRestaurant) =>
    fetch(`${api}/restaurant`, {
        method: 'post',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( newRestaurant )
    }).then(res => res.json())


export const getAllRestaurants = () =>
    fetch(`${api}/restaurant`, { headers })
        .then(res => res.json())

export const getRestaurant = (restaurantID) =>
    fetch(`${api}/restaurant/${restaurantID}`, { headers })
        .then(res => res.json())

export const createReview = (restaurantID, newReview) =>
    fetch(`${api}/restaurant/${restaurantID}/review`, {
        method: 'put',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( newReview )
    }).then(res => res.json())


export const loginPartner = (loginDetails) =>
    fetch(`${api}/restaurant/login/`, {
        method: 'post',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( loginDetails )
    }).then(res => res.json())



export const editPartner = (id, edited) =>
    fetch(`${api}/restaurant/${id}`, {
        method: 'put',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( edited )
    }).then(res => res.json())



// ============================================================================================================
// ============================================================================================================
//                                      SALE FUNCTIONS
// ============================================================================================================
// ============================================================================================================

export const createSale = ( newSale ) =>
    fetch(`${api}/sale`, {
        method: 'post',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( newSale )
    }).then(res => res.json())

export const getSale = (id) =>
    fetch(`${api}/sale/${id}`, { headers })
        .then(res => res.json())

export const deleteSale = (id) =>
    fetch(`${api}/sale/${id}`, {
        method: 'delete',
        headers: {
            ...headers,
        },
    })