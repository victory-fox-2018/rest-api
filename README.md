# rest-api

## My App Name
##### Demo app with basic REST API


### REST API
##### List of basic routes:

### /api/hello?name={name} 
##### HTTP : GET
##### Description : print hello, {name} !
##### Input : {name} of variable 
##### Output : JSON


### List of user routes:


### /api/signup 
##### HTTP : POST
##### Description : Sign up with new user info
##### Input : any parameter required
##### Output : -

### /api/signin
##### HTTP : POST
##### Description : Sign in while get an access token based on credentials
##### Input : any parameter required
##### Output : -

### /api/users 
##### HTTP : GET
##### Description : Get all the users info (admin only)
##### Input : -
##### Output : JSON

### /api/users/:id 
##### HTTP : GET
##### Description : Get a single user (admin and authenticated user)
##### Input : id of user
##### Output : JSON

### /api/users 
##### HTTP : POST
##### Description : Create a user (admin only)
##### Input : any parameter required
##### Output : -

### /api/users/:id 
##### HTTP : DELETE
##### Description : Delete a user (admin only)
##### Input : id of user
##### Output : -

### /api/users/:id 
##### HTTP : PUT
##### Description : Update a user with new info (admin and authenticated user)
##### Input : id of user
##### Output : -

### /api/users/:id 
##### HTTP : PATCH
##### Description : Update a user with specific new info
##### Input : id of user
##### Output : -
 


### List of filter routes:

### /api/users?name="{name}" 
##### HTTP : GET
##### Description : Get {name} match in users
##### Input : {name} of variable
##### Output : JSON

### /api/users?name="{na}" 
##### HTTP : GET
##### Description : Get {na} like in users
##### Input : {na} or partial description of variable
##### Output : JSON




#Usage
### With only npm:

##### npm install
##### npm start
##### npm run dev

##### Access the website via http://localhost:3000 or API via http://localhost:3000/api