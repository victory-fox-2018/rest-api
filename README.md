# My App

|           Route           |  HTTP  |                         Description                        |
|---------------------------|--------|------------------------------------------------------------|
| /api/signup               | POST   | Sign up with new user info                                 |
| /api/signin               | POST   | Signin with get an access token  based on credentials      |
| /api/users                | GET    | Get all user info (admin only                              |
| /api/users/:id            | GET    | Get a single user info (admin and authenticated user)      |
| /api/users                | POST   | Create a user (admin only)                                 |
| /api/users/:id            | DELETE | Delete a user (admin only)                                 |
| /api/users/:id            | PUT    | Update a user with new info (admin and authenticated user) |


### Usage

Access the website via ```http://localhost:3000 ``` or API via
```http://localhost:3000/api.```
