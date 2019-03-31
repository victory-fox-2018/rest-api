# rest-api

# My Application

## REST API

List of basic routes :

| Route                    | HTTP | Description           |
| ------------------------ | ---- | --------------------- |
| /api/hello?name="{name}" | GET  | Print hello, {name} ! |

List of user routes :

## **Show All User**

Returns json data from all user.

- **URL**

/api/users

- **Method:**

`GET`

- **URL Params**

None

- **Data Params**

None

- **Success Response:**

* **Code:** 200

**Content:** `[ { id : 12, name : "Michael Bloom",email :"johndoe@mail.com" },{ id : 32, name : "Michael Jackson" email : michaeljackson@mail.com}]`

- **Error Response:**

* **Code:** 404 NOT FOUND

**Content:** `{ error : "There are no users" }`

OR

- **Code:** 401 UNAUTHORIZED

**Content:** `{ error : "You are unauthorized to make this request." }`

## **Get A Single User**

Returns json data from a single user.

- **URL**

/api/users/:id

- **Method:**

`GET`

- **URL Params**

**Required:**

`id=[integer]`

- **Data Params**

None

- **Success Response:**

* **Code:** 200

**Content:** `{ id : 12, name : "John Doe", email : "johndoe@gmail.com" }`

- **Error Response:**

* **Code:** 404 NOT FOUND

**Content:** `{ error : "User doesn't exist" }`

OR

- **Code:** 401 UNAUTHORIZED

**Content:** `{ error : "You are unauthorized to make this request." }`

## **Create A User**

Create a user

- **URL**

/api/users

- **Method:**

`POST`

- **URL Params**

None

- **Data Params**

```
{

name : STRING,

email : STRING

}
```

- **Success Response:**

* **Code:** 200

**Content:** `Success adding user`

- **Error Response:**

* **Code:** 404 NOT FOUND

**Content:** `{ error : "Failed adding user" }`

OR

- **Code:** 401 UNAUTHORIZED

**Content:** `{ error : "You are unauthorized to make this request." }`

## **Delete A User**

Delete a user.

- **URL**

/api/users/:id

- **Method:**

`DELETE`

- **URL Params**

**Required:**

`id=[INTEGER]`

- **Data Params**

None

- **Success Response:**

* **Code:** 200

**Content:** `Success deleting user`

- **Error Response:**

* **Code:** 404 NOT FOUND

**Content:** `{ error : "Failed deleting user" }`

OR

- **Code:** 401 UNAUTHORIZED

**Content:** `{ error : "You are unauthorized to make this request." }`

## **Update A User with New Info**

Updating a user with certain ID with all new info.

- **URL**

/api/users

- **Method:**

`PUT`

- **URL Params**

**Required:**

`id=[INTEGER]`

- **Data Params**

```
{

name : STRING,

email : STRING

}
```

- **Success Response:**

* **Code:** 200

**Content:** `Success updating user`

- **Error Response:**

* **Code:** 404 NOT FOUND

**Content:** `{ error : "Failed updating user" }`

OR

- **Code:** 401 UNAUTHORIZED

**Content:** `{ error : "You are unauthorized to make this request." }`

## **Update A User with specific new Info**

Updating a user with a specific info only.

- **URL**

/api/users

- **Method:**

`PATCH`

- **URL Params**

**Required:**

`id=[INTEGER]`

- **Data Params**

```
{

name : STRING,

}

{

email : STRING

}

{

name : STRING,

email : STRING

}
```

- **Success Response:**

* **Code:** 200

**Content:** `Success updating user`

- **Error Response:**

* **Code:** 404 NOT FOUND

**Content:** `{ error : "Failed updating user" }`

OR

- **Code:** 401 UNAUTHORIZED

**Content:** `{ error : "You are unauthorized to make this request." }`

| Route                    | HTTP | Description               |
| ------------------------ | ---- | ------------------------- |
| /api/users?name="{name}" | GET  | Get {name} match in users |
| /api/users?name="{na}"   | GET  | Get {na} like in users    |

## Usage

With only npm :

```
npm install

npm start

npm run dev
```

Access the website via `http://localhost:3000`or API via `http://localhost:3000/api`.

Link heroku = https://intense-depths-39780.herokuapp.com
