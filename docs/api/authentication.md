
## Authentication

Authentication is performed using [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), with the following credentials:

 - Username: _Forum name, e.g. "myforum"_
 - Password: _API key_

For example:

```
curl --user 'myforum:ABCDEF' http://localhost:3000/api/v1/docs/home
```

or in the browser

```
https://myform:ABCDEF@localhost:3000/api/v1/docs/home
```
