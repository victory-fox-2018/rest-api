# REST API

*DOCUMENTATION OF AUTHENTICATED ROUTING*
| ROUTE         | HTTP          | DESCRIPTION  | INPUT    |
| ------------- |:-------------:| -----:| -----------:
| **/api/signup**      | POST | Sign Up With New User Info |  **BASIC ROUTING** |
| **/api/signin**      | POST  | Sign In While Get an Access Token Based On Credential | **BASIC ROUTING**           |
| **/api/users** | GET      | Get All User Info | **BASIC ROUTING**            |
| **/api/users/:id** | GET  | Get a Single User Info (Admin and Authenticated User) | **req.params.id**            |
| **/api/users** |POST  | Create a user (admin only) | **BASIC ROUTING**
| **/api/users/:id** |DELETE  | Delete a user (admin only) | **req.params.id**
| **/api/users/:id** |PUT  | Update a user with new info (admin only) | **req.params.id**

*DOCUMENTATION OF BASIC ROUTE*
| ROUTE         | HTTP          | DESCRIPTION  | INPUT    |
| ------------- |:-------------:| -----:| -----------:
| **/api/hello?name={name}"** | GET      | PRINT hello, {name}! | **BASIC ROUTING**|

*DOCUMENTATION OF USER ROUTE*
| ROUTE         | HTTP          | DESCRIPTION  | INPUT    |
| ------------- |:-------------:| -----:| -----------:
| **/api/users**      | GET | GET ALL USER |  **BASIC ROUTING** |
| **/api/users/:id**      | GET  |   GET SINGLE ROUTE | **req.params.id**           |
| **/api/users | POST      | CREATE A USER | **BASIC ROUTING**            |
| **/api/users/:id** | DELETE      | DELETE A USER | **req.params.id**            |
| **/api/users/:id** | PATCH      | UPDATE A USER WITH SPESIFIC NEW INFO | **req.params.id**            |

*DOCUMENTATION OF BASIC ROUTE*
| ROUTE         | HTTP          | DESCRIPTION  | INPUT    |
| ------------- |:-------------:| -----:| -----------:
| **/api/users?name="{name}"** | GET      | GET {NAME} MATCH IN USER | **req.params.string**|
| **/api/users?name="{na}"** | GET      | GET {NA} LIKE IN USER | **req.params.string**|

# USAGE
##### WITH ONLY NPM
```npm install```
```npm start```
```npm run dev```
