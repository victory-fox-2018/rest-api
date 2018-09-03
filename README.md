# My App Name
Demo app with basic REST API
# REST API
List of routes:

Route          | HTTP   | Description
---------------|:------:|------------
/api/signup    | POST   | Sign up with new new user info
/api/signin    | POST   | Sign in while get an access token based on credentials
/api/users     | GET    | Get all the users info (admin only)
/api/users/:id | GET    | Get a single user info (admin and authenticated user)
/api/users     | POST   | Create a user (admin only)
/api/users/:id | DELETE | Delete a user (admin only)
/api/users/:id | PUT    | Update a user with new info (admin and authenticated user)
#Usage
With only npm:
npm install
npm start (node) / npm run dev (nodemon)

###### Access the website via http://localhost:3000 or API via http://localhost:3000/api