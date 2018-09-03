# My App Name
Demo app with basic REST API.

### [Demo Server](http://blog-ws.wahyudisetiaji.xyz)

## Rest API
List of user routes:

Route | HTTP | Description | Attributes
------|------|------------ | ---------
/api/signin | POST | Signin user | email, password
/api/signup | POST | Signin user | firstName, lastName, email, password
/api/users | POST | Create a user | firstName, lastName, email, password
/api/users | GET | Get all the users | -
/api/users/:id | GET | Get a single user | id user
/api/users/:id | DELETE | Delete a user | id user
/api/users/:id | PUT | Update a user with new info | id user, firstName, lastName, email, password

## Usage
with only npm :
```
npm install
npm start
npm run dev
```
Ascess to server via http://localhost:3000/ or API via http://localhost:3000/users.
