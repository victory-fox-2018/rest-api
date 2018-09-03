# My App Name
Demo app with basic REST API.

### REST API
List of basic routes:

Route                           | HTTP | Description                     | Input          | Output
------------------------------- | ---- | ------------------------------- | -------------- | --------------------------------------
```` /api/hello?name={name} ````| GET  | Print hello, ```` {name} ```` ! | ````{name}```` | **string:** hello, ```` {name} ```` ! 

List of user routes:

Route                   | HTTP   | Description                                    | Input                      | Output
----------------------- | ------ | ---------------------------------------------- | -------------------------- | --------------------
```` /api/users ````    | GET    | Get all the users (admin only)                 |                            | **JSON** of all users
```` /api/users/:id ````| GET    | Get a single user (admin & authenticated user) | ````req.params.id````      | **JSON** of single user
```` /api/users ````    | POST   | Create a user (admin only)                     | data from ````req.body```` | 
```` /api/users/:id ````| DELETE | Delete a user (admin only)                     | ````req.params.id````      | 
```` /api/users/:id ````| PUT    | Update a user with new info (admin & authenticated user) | ````req.params.id```` & data from ````req.body```` |

List of filter routes:

Route                             | HTTP   | Description                       | Input          | Output
--------------------------------- | ------ | --------------------------------- | -------------- | --------------------------
```` /api/users?name="{name}" ````| GET    | Get ````{name}```` match in users | ````{name}```` | **JSON** of matched users
```` /api/users?name="{na}" ````  | GET    | Get ````{na}```` like in users    | ````{na}````   | **JSON** of users

List of sign up & sign in routes:

Route                 | HTTP   | Description                                              | Input                   | Output
--------------------- | ------ | -------------------------------------------------------- | --------------          | -------------------
```` /api/signup ```` | POST   | Sign up with new user info                               | new user data           | 
```` /api/signin ```` | POST   | Sign in while get an access token based on credentials   | user data & credentials | token from jwt

---
### Usage
With only npm:
````
npm install
npm start
npm run dev
````
Access the website via ````http://localhost:3000```` or API via ````http://localhost:3000/api````