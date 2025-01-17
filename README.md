

## Cafeco App

This is the WIP of the front end of team Leaf's web application - CafeCo

CafeCo aims to bring together and promote sustainable cafes and restaurants by enabling users to discover these eateries as well as encouraging them to return with a reward system.

### Version Notes
#### 28/04/2019
The key functionality addressed in this version (28/04/2019) is 'Users can discover sustainable eateries to visit'.
This is supported by:

1. A map that displays markers of all partnered businesses that when clicked on brings the user to the eatery's full profile page with further information on location, opening hours, sustainable practices etc.

2. A complete list of partnered eateries sorted alphabetically.

3. A search bar that searches by eatery name.

The front end of these three features have been implemented and will be fully functional once the back end is connected.

The front end of most other functionalities (e.g. ratings, reviews, login, signup, user profile, business dashboard) are underway if not completed. 


#### 12/05/2019
The four implemented pieces of functionality are:
(see info30005-leaf-cafeco-server/{controllers, routes, models} directory):
* User (CRUD, find all, search, validate, login, get rewards)
* Restaurant (CRUD, find all, search, validate, login)
* Sale (CRUD, find all, search)
* Reward (CRUD, find all, search)


Supported features in this version are:
1. Users can search for eateries:
	- On the home page, there is a search bar function where users can begin to type a cafe name and if it's listed, it'll appear. (http://cafeco-app.herokuapp.com/dashboard)
	- If the user clicks on 'All Eateries' in the navigation or 'View Complete List' on the home page, they can search or view a complete list of cafes partnered with CafeCo. (http://cafeco-app.herokuapp.com/restaurants)
	- Routes: GET /restaurant (all restaurants), GET /restaurant/:restaurantID (gives the restaurant with the restaurant ID)
	- Controllers: retaurant_controller.js
	- Models: restaurant.js
	- Screens: Dashboard.js, RestaurantList.js
	- Components: NavBar.js

2. Users can discover eateries:
	- On the home page, under the 'Discover Eateries' tab, there is a map function. It lists cafes in a map view, if a user clicks the 'food' icon, it takes them to an about page on the chosen cafe. (http://cafeco-app.herokuapp.com/dashboard)
	- Routes: GET /restaurant
	- Controllers: restaurant_controller.js
	- Models: restaurant.js
	- Screens: Dashboard.js
	- Components: NavBar.js

3. Users can sign up:
	- To sign up, users can register with a username & password by clicking the sign up button in the navbar. Once an account is created, 'My Profile' is added to the navbar. (http://cafeco-app.herokuapp.com/dashboard)
	- Routes: POST /user
	- Controllers: user_controller.js
	- Models: user.js
	- Screens: Dashboard.js
	- Components: SignUp.js, NavBar.js

4. Users can log in:
	- Returning users can log in through the log in button.(http://cafeco-app.herokuapp.com/dashboard)
	- Routes: POST /user/login
	- Controllers: user_controller.js
	- Models: user.js
	- Screens: Dashboard.js
	- Components: LogIn.js, NavBar.js

5. Logged in users can save their favourite eateries:
	- In the profile page for their specific cafes, in the 'about section' there is a star users can click, which saves the particular cafe under 'saved eateries' in the my profile section. (http://cafeco-app.herokuapp.com/user/undefined)
	- Routes: PUT /user/:username/savedRestaurants
	- Controllers: user_controller.js
	- Models: user.js
	- Screens: RestaurantDetails.js
	- Components: NavBar.js

6. Logged in users can leave reviews for a cafe:
	- In the profile page for their specific cafe, if users scroll down to the bottom, there is a review section. Users can write a small review & rate their eco-friendliness/experience. (http://cafeco-app.herokuapp.com/restaurant/auctionroom)
	- Routes: PUT /restaurant/:id/review
	- Controllers: restaurant_controller.js
	- Models: restaurant.js
	- Screens: RestaurantDetails.js
	- Components: 

7. Partnered businesses can log in:
	- Link to log in is in the footer.(http://cafeco-app.herokuapp.com/partner/login)
	For demonstration purposes use the following username & password to sign in: 
		USERNAME: auctionroom1 (or any listed cafe name followed by the number 1 e.g. barry1)
		PASSWORD: password
	- Routes: POST /restaurant/login
	- Controllers: restaurant_controller.js
	- Models: restaurant.js
	- Screens: PartnerLogin.js
	- Components: 

8. Logged in Partnered businesses can generate a code after a purchase is made. 
	- Staff in partnered business types in the price of what the user paid and click the 'create' button under the create sale section. A pop up appears with a generated code that users can use to receive credits.(http://cafeco-app.herokuapp.com/partner/home)
	- Routes: POST /sale
	- Controllers: sale_controller.js
	- Models: sales.js
	- Screens: PartnerDashboard.js
	- Components: SaleCreateSuccess.js
	
10. Logged in users can retrieve credits:
	- Users can enter the code generated by the partnered business in the 'credit' section under the my profile page in the user site. (http://cafeco-app.herokuapp.com/user/undefined)
	- Routes: PUT /user/:username/points (changes user's points using the code), DELETE /sale/:id (deletes sale code used)
	- Controllers: user_controller.js, sale_controller.js
	- Models: user.js, sales.js
	- Screens: Profile.js
	- Components: RedeemSuccess.js

11. Logged in users can redeem credits for rewards:
	- The user can go to the particular eatery they want the reward from (e.g. http://cafeco-app.herokuapp.com/restaurant/auctionroom). Under the 'choose your reward' section, they can claim the rewards they've unlocked. Once you click claim, an email with the barcode of the reward is sent to the user (beyond scope) & the overall credit score for the user gets deducted.
	- Routes: PUT /user/:username/points
	- Controllers: user_controller.js
	- Models: user.js
	- Screens: RestaurantDetails.js
	- Components: RewardSelector.js

12. Logged in Partnered businesses can edit their information:
	- Under the 'account' tab in the partner dashboard. (http://cafeco-app.herokuapp.com/partner/home)
	- Routes: PUT /restaurant/:id
	- Controllers: restaurant_controller.js
	- Models: restaurant.js
	- Screens: PartnerDashbaord.js
	- Components: PartnerEdit.js
	
13. Users can view information about sustainability:
	- Under the "Sustainability" tab on the homepage. (http://cafeco-frontend.herokuapp.com/sustainability)
	- Routes: GET /sustainability
	- Screens: Sustainability.js
	- Components: Navbar.js, Footer.js 
	
14. Users can view information about the website:
	- Under the "About" tabs on the homepage. (http://cafeco-frontend.herokuapp.com/about/us) (http://cafeco-frontend.herokuapp.com/about/how)
	- Routes: GET /about/us (about-who), GET/about/how (about-how)
	- Screens: About.js, AboutHow.js
	- Components: Navbar.js, Footer.js 


### Getting Started
This is a react app. https://cafeco-app.herokuapp.com


### NOTE: This repository contains only the frontend web app for the Web Info Tech Project. 

