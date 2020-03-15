
##Document API

With the document api you can manage categories, articles, threads, channels, chat messages and thread posts or article comments.

Each and everyone of the above is a document in the database and is treated using the same structure with optional fields, depending on the case.
####Document structure
```
{
    //document id
    id: '',

    //document parent id
    parent: '',

    //document type: category, thread, article, blog, bookmark, post, channel
    type: '',

    //creation date in unix timestamp
    created: 0,

    //last update date in unix timestamp
    updated: 0,

    //category initials
    initials: '',

    //header e.g. category or thread or article title
    header: '',

    //body e.g. description or post message
    body: '',

    //if thread is sticky
    sticky: false,

    //permissions
    locked: false,
    visible: true,
    inappropriate: false,
    //0: everyone, 1: logged-in, 2: admins
    permission: 0,
    //0: discussion, 1: helpdesk, 2: blog, 3: chat, 4: categories
    usage: 0,

    //denormalized author details
    user_id: '',
    user_username: '',
    user_displayname: '',
    user_avatar: '',

    //reactions (array of usernames)
    react_up: [],
    react_down: [],

    //category/article order
    order: 0,

    //if document is marked for deletion
    archived: false,
    //archived date unix timestamp
    archived_ts: 0
}
```

####Get a document (select)

GET: ```/api/v1/docs/<id>```

Example:

```
curl --user 'myforum:ABCDEF' -X GET -H "Content-Type: application/json" 'http://localhost:3000/api/v1/docs/home'
```

Insert a document (insert)

POST: ```/api/v1/docs```

Example:

```
curl --user 'myforum:ABCDEF' -X POST -H "Content-Type: application/json" -d '{
    "parent": "bugs",
    "type": "thread",
    "header": "Fruum crashes my servers",
    "body": "Hello, please fix this",
    "user_id": "5",
    "user_username": "bob",
    "user_displayname": "Bob",
    "created": 1433463835232,
    "updated": 1433463835232
}' 'http://localhost:3000/api/v1/docs/'
```

####Update an existing document (update)

PUT: ```/api/v1/docs/<id>```

Example:

```
curl --user 'myforum:ABCDEF' -X PUT -H "Content-Type: application/json" -d '{
    "body": "Hello, please fix that",
}' 'http://localhost:3000/api/v1/docs/hello-fix-this'
```

####Delete a document (delete)

DELETE: ```/api/v1/docs/<id>```

Example:

```
curl --user 'myforum:ABCDEF' -X DELETE -H "Content-Type: application/json" 'http://localhost:3000/api/v1/docs/my-category'
```

###What to see next?

[Generating API keys](generating-api-keys.md)

