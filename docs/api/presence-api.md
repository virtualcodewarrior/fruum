
##Presence API
####Count online users

GET: ```/api/v1/presence/overview```

Example:

```
curl --user 'myforum:ABCDEF' -X GET 
     -H "Content-Type: application/json"     
     'http://localhost:3000/api/v1/presence/overview'
```

Returns:

```
{
  total: <X + Y>,
  anonymous: <X>,
  authenticated: <Y>
}
```

####Count online users under document

GET: ```/api/v1/presence/overview/<id>```

Returns:

```
{
  total: <X + Y>,
  anonymous: <X>,
  authenticated: <Y>
}
```

> Passing the ```?children``` to the URL will also take into account users visiting document and any of its children.

####Count all users on per document breakdown

GET: ```/api/v1/presence/docs```

Returns:

```
{
  docs: {
    "home": {
      total: X,
      anonymous: Y,
      authenticated: Z
    },
    "bugs": { ... },
    ...
  },
  paths: {
    "home": { ... },
    "home/bugs": { .. },
    "home/bugs/found-a-nasty-bug": { .. }
  }
}
```

Documents that have no visitors are NOT returned by the API.
####Get details of all online users

GET: ```/api/v1/presence/users```

Returns:

```
[
  { id: "", username: "", displayname: "", ... },
  { id: "", username: "", displayname: "", ... }
  ...
]
```

####Get details of all online users viewing document

GET: ```/api/v1/presence/users/<id>```

Returns:

```
[
  { id: "", username: "", displayname: "", ... },
  { id: "", username: "", displayname: "", ... }
  ...
]
```

> Passing the ```?children``` to the URL will also take into account users visiting document and any of its children.

