
## User API

Use the User API to manage your users. Get info about their profile and their activity.
#### User structure

```
{
  //user id
  id: '',
  
  //is administrator?
  admin: false,
  
  //is blocked?
  blocked: false,
  
  //user details
  username: '',
  displayname: '',
  email: '',
  
  //link to avatar
  avatar: '',
  
  //creation date in unix timestamp
  created: 0,
  
  //last login date in unix timestamp
  last_login: 0,
  
  //last logout date in unix timestamp
  last_logout: 0,
  
  //karma
  karma: 0  
}
```

#### Get user profile

GET: ```/api/v1/users/<id>```

Example:

```
curl --user 'myforum:ABCDEF' -X GET 
     -H "Content-Type: application/json"     
     'http://localhost:3000/api/v1/users/56'
```

Returns:

```
{
  id: <id>,
  admin: <boolean>,
  blocked: <boolean>,
  username: <string>,
  displayname: <string>,
  email: <string>,
  avatar: <string>,
  created: <date>,
  last_login: <date>,
  last_logout: <date>,
  karma: <number>
}
```

Add user

POST: ```/api/v1/users```

Example:

```
curl --user 'myforum:ABCDEF' -X POST -H "Content-Type: application/json" -d '{
    "id": 101,
    "username": "foo"
}' 'http://localhost:3000/api/v1/users'
```

Returns the user model (similar to GET)
#### Update user

PUT: ```/api/v1/users/<id>```

Returns the user model (similar to GET)
#### Get user topics

GET: ```/api/v1/users/<id>/topics[?admin]```

Returns:

```
[
  { id:.. , type: ... },
  { id:.. , type: ... },
  { id:.. , type: ... },
  ...
]
```

> By default only public topics are returned. To return all topics including administrator permissive ones, pass the **&admin** param to the request.

####Count user topics

GET: ```/api/v1/users/<id>/topics?count[&admin]```

Returns the number of user created topics.

> By default only public topics are counted. To count all topics including administrator permissive ones, pass the **&admin** param to the request.

#### Get user replies

GET: ```/api/v1/users/<id>/replies[?admin]```

Returns:

```
[
  { id:.. , type: ... },
  { id:.. , type: ... },
  { id:.. , type: ... },
  ...
]
```

> By default only public replies are returned. To return all replies including administrator permissive ones, pass the **&admin** param to the request.

#### Count user replies

GET: ```/api/v1/users/<id>/replies?count[&admin]```

Returns the number of user replies.

> By default only public replies are counted. To count all replies including administrator permissive ones, pass the **&admin** param to the request.

