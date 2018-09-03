# My App Name
Demo app with basic REST API.

### REST API
List of basic routes:

Route                           | HTTP | Description                     | Input          | Output
------------------------------- | ---- | ------------------------------- | -------------- | --------------------------------------
```` /api/hello?name={name} ````| GET  | Print hello, ```` {name} ```` ! | ````{name}```` | **string:** hello, ```` {name} ```` ! 

List of user routes:

Route                   | HTTP   | Description                          | Input                      | Output
----------------------- | ------ | ------------------------------------ | -------------------------- | --------------------
```` /api/users ````    | GET    | Get all the users                    |                            | **JSON** of all users
```` /api/users/:id ````| GET    | Get a single user                    | ````req.params.id````      | **JSON** of single user
```` /api/users ````    | POST   | Create a user                        | data from ````req.body```` | 
```` /api/users/:id ````| DELETE | Delete a user                        | ````req.params.id````      | 
```` /api/users/:id ````| PUT    | Update a user with new info          | ````req.params.id```` & data from ````req.body```` | 
```` /api/users/:id ````| PATCH  | Update a user with specific new info | ````req.params.id```` & data from ````req.body```` |

List of filter routes:

Route                             | HTTP   | Description                       | Input          | Output
--------------------------------- | ------ | --------------------------------- | -------------- | --------------------------
```` /api/users?name="{name}" ````| GET    | Get ````{name}```` match in users | ````{name}```` | **JSON** of matched users
```` /api/users?name="{na}" ````  | GET    | Get ````{na}```` like in users    | ````{na}````   | **JSON**

---
### Usage
With only npm:
````
npm install
npm start
npm run dev
````
Access the website via ````http://localhost:3000```` or API via ````http://localhost:3000/api````