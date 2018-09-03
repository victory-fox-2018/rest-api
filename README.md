# rest-api

## My App Name
##### Demo app with basic REST API


### REST API
##### List of basic routes:


Route            |  HTTP  |        Description          |       input         |     output
------------------------ | ------ | --------------------------- | ------------------- | ---------------
````/api/hello?name={name}````   |  GET   |   print hello, {name} !     |  {name} of variable |       JSON


### List of user routes:

Route     |  HTTP  |       Description           |     input         |     output
-------------- | ------ | --------------------- | ----------------------- | ---------------
````/api/signup```` | POST | Sign up with new user info |   |     |
````/api/signin```` | POST | Sign in while get an access token based on credentials |   |     |
````/api/users````    |  GET   |  Get all the users (admin only)  |         |    JSON    
````/api/users/:id````  |  GET   |  Get a single user (admin only and authorized user)  | id of user |  JSON 
````/api/users````      |  POST  |  Create a user (admin only)     |  any parameter required |    
````/api/users/:id````  | DELETE |  Delete a user  (admin only)  |  id of user             |      
````/api/users/:id````  |  PUT   |  Update a user with new info (admin only and authorized user) | id of user |  |      

 

### List of filter routes:

Route     |  HTTP  |       Description           |     input         |     output
-------------- | ------ | --------------------- | ----------------------- | ---------------
````/api/users?name="{name}"```` | GET | Get {name} match in users | {name} of variable  | JSON
````/api/users?name="{na}"```` | GET | Get {na} like in users | {na} or partial description of variable  | JSON



#Usage
### With only npm:

##### npm install
##### npm start
##### npm run dev

##### Access the website via http://localhost:3000 or API via http://localhost:3000/api