# My App Name
### Demo app with basic REST API.
## REST API
### List of basic routes:

| Route | HTTP | Description |
| :---         |     :---      |          :--- |
| <span style="color:red">/api/hello?name={name}</span>   | GET     | Print hello,   <span style="color:red">{name}</span>    |





### List of basic routes:

| Route | HTTP | Description |
| :---         |     :---      |          :--- |
| <span style="color:red">/api/users</span>   | GET     | Get all the users    |
| <span style="color:red">/api/users/:id</span>     | GET       | Get a single user      |
|<span style="color:red">/api/users</span>   | POST     | Create a user    |
| <span style="color:red">/api/users/:id</span>     | DELETE       | Delete a user      |
| <span style="color:red">/api/users/:id</span>     | PUT       | Update a user with new info      |
| <span style="color:red">/api/users/:id</span>     | PATCH       | Update a user with  specific new info      |

### List of filter routes:

| Route | HTTP | Description |
| :---         |     :---      |          :--- |
| <span style="color:red">/api/users?name="{name}"</span>   | GET     | Get <span style="color:red">{name}</span> match in users    |
| <span style="color:red">/api/users?name="{na}"</span>     | GET       | Get <span style="color:red">{na}</span> like in users      |

## Usage
### With only npm:
```
npm install
npm start
npm run dev
```

Access the website via http://localhost:3000 or API via http://localhost:3000/api .






