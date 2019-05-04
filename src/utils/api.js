
// const api = "http://localhost:3001"
const api = "https://cafeco-server.herokuapp.com"

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
    fetch(`${api}/searchUser/${id}`, { headers })
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

// let newRestaurant = {
//     id: "thevegiebar",
//     password: "123",
//     email: "thevegiebars@gmail.com",
//     name: "The Vegie Bar",
//     address: "380 Brunswick St, Fitzroy, VIC 3065",
//     description: "Inventive veggie and vegan meals, raw food and cocktails in a lively space with a leafy courtyard.",
//     foodReviews:[],
//     sustainabilityReviews:[],
//     averageFoodRating: 0,
//     location: {
//         lat: -37.795840,
//         lng: 144.979121,
//     },
//     website: "vegiebar.com.au",
//     phone: "(03) 9417 6935",
//     averageSustainabilityRating: 0,
//     typeOfRewards: ["RewFD", "Rew10", "Rew20", "Rew50" ],
//     photos: "https://www.goodfood.com.au/content/dam/images/h/1/9/6/w/t/image.related.wideLandscape.940x529.h198ct.png/1545090534636.jpg",
// }

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
    fetch(`${api}/findAllRestaurants`, { headers })
        .then(res => res.json())

export const getRestaurant = (restaurantID) =>
    fetch(`${api}/searchRestaurant/${restaurantID}`, { headers })
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

// export const getCategories = () =>
//     fetch(`${api}/categories`, { headers })
//         .then(res => res.json())
//         .then(data => data.categories)
//
// export const getPostsFromCategory = (category) =>
//     fetch(`${api}/${category}/posts`, { headers })
//         .then(res => res.json())
//
// export const getAllPosts = () =>
//     fetch(`${api}/posts`, { headers })
//         .then(res => res.json())
// // .then(data => data.posts)
//
// export const addPost = (newPost) =>
//     fetch(`${api}/posts`, {
//         method: 'post',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify( newPost )
//     }).then(res => res.json())
//
// export const getPost = (postId) =>
//     fetch(`${api}/posts/${postId}`, { headers })
//         .then(res => res.json())
//
// // voteString must have { option: "upVote" or "downVote"}
// export const votePost = (postId, voteString) =>
//     fetch(`${api}/posts/${postId}`, {
//         method: 'post',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify( voteString )
//     }).then(res => res.json())
//
// export const editPost = (postId, edited) =>
//     fetch(`${api}/posts/${postId}`, {
//         method: 'PUT',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(edited)
//     }).then(res => res.json())
//
// export const deletePost = (postId) =>
//     fetch(`${api}/posts/${postId}`, {
//         method: 'delete',
//         headers: {
//             ...headers
//         }
//     }).then(res => res.json())
//
//
// // ==========================================================================
// //   THIS IS THE SECTion FOR COMMENTS
// // ==========================================================================
//
// export const getAllComments = (postId) =>
//     fetch(`${api}/posts/${postId}/comments`, { headers })
//         .then(res => res.json())
//
//
// export const addComment = (newComment) =>
//     fetch(`${api}/comments`, {
//         method: 'post',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify( newComment )
//     }).then(res => res.json())
//
//
// export const getComment = (commentId) =>
//     fetch(`${api}/comments/${commentId}`, { headers })
//         .then(res => res.json())
//
// // voteString must have { option: "upVote" or "downVote"}
// export const voteComment = (commentId, voteString) =>
//     fetch(`${api}/comments/${commentId}`, {
//         method: 'post',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify( voteString )
//     }).then(res => res.json())
//
// // The edited Object has the timestamp and body.
// export const editComment = (commentId, edited) =>
//     fetch(`${api}/comments/${commentId}`, {
//         method: 'put',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify( edited )
//     }).then(res => res.json())
//
//
// export const deleteComment = (commentId) =>
//     fetch(`${api}/comments/${commentId}`, {
//         method: 'delete',
//         headers: {
//             ...headers
//         }
//     }).then(res => res.json())
