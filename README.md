# My App Name
Demo app with basic REST API.

### [Demo Server](http://blog-ws.wahyudisetiaji.xyz)

## Rest API
List of index routes:

Route | HTTP | Description | Attributes
------|------|------------|-----------
/signin | POST | Signin user | email, password
/signup | POST | Signin user | firstName, lastName, email, password

List of user routes:

Route | HTTP | Description | Attributes
------|------|------------ | ---------
/users | POST | Create a user | firstName, lastName, email, password
/users | GET | Get all the users | -
/users/:id | GET | Get a single user | id user
/users/:id | DELETE | Delete a user | id user
/users/:id | PUT | Update a user with new info | id user, firstName, lastName, email, password

List of filter routers:

Route | HTTP | Description
------|------|------------
/users?name="{name}" | GET | Get {name} match in users
/users?name="{na"} | GET | Get {na} like users

## Usage
with only npm :
```
npm install
npm start
npm run dev
```
Ascess to server via http://localhost:3000/ or API via http://localhost:3000/users.
