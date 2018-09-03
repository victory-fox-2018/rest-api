# rest-api

## My App Name
##### Demo app with basic REST API


### REST API
##### List of basic routes:

        Route            |  HTTP  |        Description          |       input         |     output
-------------------------|--------|-----------------------------|---------------------|----------------
/api/hello?name={name}|GET|print hello, {name} !|{name} of variable |JSON

##### List of user routes:

        Route              |  HTTP  |             Description                 |     input               |     output
---------------------------|--------|-----------------------------------------|-------------------------|----------------
/api/users|GET|Get all the users||JSON    
/api/users/:id|GET|Get a single user|id of user|JSON 
/api/users|POST|Create a user|any parameter required |    
/api/users/:id|DELETE|Delete a user|id of user|      
/api/users/:id|PUT|Update a user with new info|id of user|  
/api/users/:id|PATCH|Update a user with specific new info|id of user|      

##### LIst of filter routes:

        Route              |  HTTP  |        Description            |   input                                  |   output
---------------------------|--------|-------------------------------|------------------------------------------|---------------
/api/users?name="{name}"|GET|Get {name} match in users|{name} of variable|   JSON
/api/users?name="{na}"|GET|Get {na} like in users|{na} or partial description of variable|JSON  


#Usage
### With only npm:

##### npm install
##### npm start
##### npm run dev

##### Access the website via http://localhost:3000 or API via http://localhost:3000/api