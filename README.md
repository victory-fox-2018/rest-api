# rest-api

List of basic routes:

Route | HTTP | Description | Success | Error
------------ | ------------- | ------------- | ------------- | -------------
/api/hello?name={name} | GET | Print hello, {name}! | {message: 'Hello, {name}!'} | {error: '{name} not found!'}

List of user routes:

Route | HTTP | Description | Success | Error
------------ | ------------- | ------------- | ------------- | -------------
/api/users | GET | Get all the users | { users: [ {id: 1, name: 'Tono', location: 'Jakarta'}, ..... , {....} ]} | {error: 'Can't get data'}
/api/users/:id | GET | Get a single user | { user: {id: 1, name: 'Tono', location: 'Jakarta'} } | {error: 'User {id} not found!'}
/api/users | POST | Create a user | {message: 'User created!'} | {error: 'Failed to create new user!'}
/api/users/:id | DELETE | Delete a user | {message: 'User {id} deleted!'} | {error: 'Failed to delete user {id}'}
/api/users/:id | PUT | Update a user with new info | {message: 'User {id} updated!'} | {error: 'Failed to update user {id}'}
/api/users/:id | PATCH | Update a user with spesific new info | {message: 'User {id} updated!'} | {error: 'Failed to update user {id}'}

List of filter routes:

Route | HTTP | Description | Success | Error
------------ | ------------- | ------------- | ------------- | -------------
/api/users?name="{name}" | GET | Get {name} match in users | {user: {name: 'Tono'}} | {error: '{name} not found!'}
/api/users?name="{na}" | GET | Get {na} like in users | { user: {name: {na}} } | {error: '{na} not found!'}

# Usage

With only npm:
```
npm install
npm start
npm run dev
```

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`