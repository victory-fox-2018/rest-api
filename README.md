# Rest-api Documentation

## Route 

Route|Http|Description
------|-----|-----------
`/api/signup`|POST|Signup with new user info
`/api/signin`|POST|Signin while get an access token based on credential
`/api/users`|GET|Get all users info (admin only)
`/api/users/:id`|GET|Get a single user info (admin and authenticate user)
`/api/users`|POST|Create a user (admin only)
`/api/users/:id`|DELETE|Delete a user (admin only)
`/api/users/:id`|PUT|Update a user with new info (admin and authenticate user)