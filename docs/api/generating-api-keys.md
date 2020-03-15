
## Generating API keys

To use the API you must generate API keys for your forum. Assuming that your forum is being register as myforum, execute the following command to generate an api key:

```
npm start -- --create-api-key myforum
```

This will return an API key, e.g. ABCD

API requests are HTTP REST calls that are made to the hosting server by using the URL pattern:

```
[https|http]://<host>/api/v1/<command>
```

The API is 100% JSON based, meaning that the body part of the request is a JSON object and the response is a JSON object as well.

To delete or list the available API keys of a forum see the [management commands](../developers/management-commands.md) documentation.
