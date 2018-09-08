# rest-api


Install the dependencies and devDependencies and start the server.

```sh
$ npm install -d
$ npm run dev
```

| Route          | HTTP   | Description                                                |
|----------------|--------|------------------------------------------------------------|
| /api/signup    | POST   | sign up with new user info                                 |
| /api/signin    | POST   | sign in while get an access token based on credential      |
| /api/users     | GET    | Get all the users info (admin only)                        |
| /api/userd/:id | GET    | Get a single user info (admin and authenticated user)      |
| /api/users     | POST   | Create a user (admin only)                                 |
| /api/users/:id | DELETE | Delete a user(admin only)                                  |
| /api/users/:id | PUT    | Update a user with new info (admin and authenticated user) |