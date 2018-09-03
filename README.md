# rest-api

List of user routes:

Route | HTTP | Description | Success | Error
------------ | ------------- | ------------- | ------------- | -------------
/api/signup | POST | Sign up with new user info | {message: 'Register user berhasil'} | {error: 'Register user gagal!'}
/api/signip | POST | Sign in while get an access token based on credentials | {token: 'aildgilauliul'} | {error: 'wrong username or password'}
/api/users | GET | Get all the users (only admin) | {users: [ {id: 1, name: 'Tono', username: 'tono', password: 'adsgathah', role: 'client'}, ..... , {....}]} | {error: 'Can't get data'}
/api/users/:id | GET | Get a single user (only authenticated user) | {user: {id: 1, name: 'Tono', username: 'tono', password: 'adsgathah', role: 'client'}} | {error: 'User {id} not found!'}
/api/users | POST | Create a user (only admin)| {message: 'User created!'} | {error: 'Failed to create new user!'}
/api/users/:id | DELETE | Delete a user (only admin) | {message: 'User {id} deleted!'} | {error: 'User {id} not found!'}
/api/users/:id | PUT | Update a user with new info (only authenticated user) | {message: 'User {id} updated!'} | {error: 'User {id} not found!'}

# Usage

With only npm:
```
npm install
npm start
npm run dev
```

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`

# Demo

Live demo at: (https://stark-island-66864.herokuapp.com/)