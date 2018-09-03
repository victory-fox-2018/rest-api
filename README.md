# REST API

List of user routes:
| Route                     |  HTTP  | Desription                           |
| ------------------------- |:------:| ------------------------------------ |
| /api/signup               | POST   | Sign up withh new user info          |
| /api/signin               | POST   | Sign in while get an access token based on credentials               |
| /api/users                | GET    | Get all the users info (admin only)    |
| /api/users/:id            | GET    | Get a single user info (admin and authenticated user)          |
| /api/users               | POST   | Create a user (admin only)          |
| /api/users/:id               | DELETE   | Delete a user (admin only)          |
| /api/users/:id               | PUT   | Update a user with new info (admin and authenticated user)          |