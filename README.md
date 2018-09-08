# rest-api

# USER

https://glacial-island-46243.herokuapp.com/

## User attributes:
* id (Number)
* name (String)
* email (String)
* username (String)
* password (String)
* role (String)

## User Collection

### Sign up with new user info
* URL

  /api/signup

* Method

  POST

* Input
  ```
  {
    name: 'Anie Doe',
    email: 'aniedoe@mail.com',
    username: 'aniedoe',
    password: '123'
  }
  ```

* Output
  ```
  {
    user: {
      id: 2,
      name: 'Anie Doe',
      email: 'aniedoe@mail.com',
      username: 'aniedoe',
      password: '123',
      role: 'client'
    }
  }
  ```

### Sign in while get an access token based on credentials
----
* URL

  /api/signin

* Method

  POST

* Input
  ```
  {
    username: 'johndoe',
    password: '123'
  }
  ```

* Output
  ```
  {
    message: 'sign in successfully'
  }
  ```

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
      name: 'John Doe',
      email: 'johndoe@mail.com',
      username: 'johndoe',
      password: '123',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Annie Doe',
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
      name: 'Annie Doe',
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
    name: 'Annie Doe',
    email: 'aniedoe@mail.com',
    username: 'aniedoe',
    password: '123'
  }
  ```

* Output
  ```
  {
    user: {
      id: 2,
      name: 'Annie Doe',
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
  ---------- | ----
  :id | Number

* Input
  ```
  {
    name: 'Annie Doe',
    email: 'aniedoe@mail.com',
    username: 'aniedoe',
    password: '123'
  }
  ```

* Output
  ```
  {
    message: 'Updated'
  }
  ```
