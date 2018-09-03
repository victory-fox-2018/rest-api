# rest-api

# USER

## User attributes:
* id (Number)
* firstName (String)
* lastName (String)
* email (String)
* username (String)
* password (String)
* role (String)

## User Collection

### Get all the users:
----
* URL

  /api/users

* Method

  GET

* Output

  ```
  [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      username: 'johndoe',
      password: '123',
      role: 'client'
    },
    {
      id: 2,
      firstName: 'Anie',
      lastName: 'Doe',
      email: 'aniedoe@mail.com',
      username: 'aniedoe',
      password: '123',
      role: 'client'
    }
  ]
  ```



### Get a single user
----
* URL

  /api/users/:id

* Method

  GET

  Parameters | Type
  ---------- | ----
  :id | Number

* Input
  ```
  /api/users/2
  ```

* Output
  ```
  {
    user: {
      id: 2,
      firstName: 'Anie',
      lastName: 'Doe',
      email: 'aniedoe@mail.com',
      username: 'aniedoe',
      password: '123',
      role: 'client'
    }
  }
  ```

### Create a user
----
* URL

  /api/users

* Method

  POST

* Input
  ```
  {
    id: 2,
    firstName: 'Anie',
    lastName: 'Doe',
    email: 'aniedoe@mail.com',
    username: 'aniedoe',
    password: '123',
    role: 'client'
  }
  ```

* Output
  ```
  {
    user: {
      id: 2,
      firstName: 'Anie',
      lastName: 'Doe',
      email: 'aniedoe@mail.com',
      username: 'aniedoe',
      password: '123',
      role: 'client'
    }
  }
  ```

### Delete a user
----
* URL

  /api/users/:id

* Method
  
  DELETE

  Parameters | Type
  ----- | ----
  :id | Number

* Input

  ```
  /api/users/2
  ```

* Output

  ```
  {
    message: 'Deleted'
  }
  ```

### Update a user with new info
----
* URL

  /api/users/:id

* Method
  
  PUT

  Parameters | Type
  ----- | ----
  :id | Number

* Input
  ```
  {
    id: 2,
    firstName: 'Anie',
    lastName: 'Doe',
    email: 'aniedoe@mail.com',
    username: 'aniedoe',
    password: '123',
    role: 'client'
  }
  ```

* Output
  ```
  {
    user: {
      id: 2,
      firstName: 'Jenni',
      lastName: 'Doe',
      email: 'jennidoe@mail.com',
      username: 'doe',
      password: '123',
      role: 'client'
    }
  }
  ```

### Update a user with specific new info
----
* URL

  /api/users/:id

* Method
  
  PATCH

  Parameters | Type
  ----- | ----
  :id | Number

* Input
  ```
  /api/users/1
  ```

  ```
  {
    role: 'admin'
  }
  ```

* Output
  ```
  {
    user: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      username: 'johndoe',
      password: '123',
      role: 'admin'
    }
  }
  ```
