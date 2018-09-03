
<!-- Quotes -->
>Muhammad Khodhi Robbani
<!-- Headings # -->

`demo app with REST API`
<!-- link -->
link : 
[retroweb.com](https://damp-crag-57351.herokuapp.com/)

## Models
<!-- UL -->
* User
* Transaction
* Item
<!-- OL -->
1. User relationship :
    1. belongsToMany Item
    1. ...
    1. ...
1. Transaction
1. Item

## Modul Install
```bash
npm install
npm i sequelize
npm i sequelize-cli
npm i express
npm i pg
```

## REST API
List of basic routes :
<!-- TABLE -->
|Route|HTTP|Description|
|-----|----|-----------|
|/api/hello?name={name}|GET|

List of user routes :

|Route|HTTP|Description|
|-----|----|-----------|
|/api/users|GET|Get all the users|
|/api/users/:id|GET|Get all a single users|
|/api/users|POST|Create a user|
|/api/users/:id|DELETE|Delete a user|
|/api/users/:id|PUT|Update a user with new info|
|/api/users/:id|PATCH|Update a user with specific new info|

List of filter routes :

|Route|HTTP|Description|
|-----|----|-----------|
|/api/users?name={name}|GET|Get {name} match in users|
|/api/users?name={na}|GET|Get {na} match in users|

##Usage
with only npm:
```bash
npm install
npm start
npm run dev
```
Access the website via [retroweb.com](http://www.retroweb.com) or API via [http://localhost:300/api](http://localhost:300/api)