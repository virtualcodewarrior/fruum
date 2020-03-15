
## Setting up full page forums
#### Basic setup

By default fruum is loaded in the embedded mode. However there are cases where developers want a dedicated forum page, where fruum is always visible by default in par with the embedded mode.

This has the following benefits:

 - Allow the creation of permalinks to share to other users
 - Allow spiders to index your forum

The first step is to declare the URL of the full page in fruum server by invoking the following command:

```
npm start -- --update-app <app> --fullpage-url <url>
```

For example:

```
npm start -- --update-app myforum --fullpage-url "https://myawesomeapp.com/forum" 
```

Then, you must create a placeholder div in your forum page that will host the fruum content, e.g.

```
<div id="forum-container"></div>
```

Fruum will fit inside that area and it is up to the developer to maintain the size of the container.

Final step is to tell fruum the name of the container object to use by modifying the fruumSettings object, e.g.

```
window.fruumSettings = {
  ...
  container: '#forum-container'
  ...
}
```

Enabling pushState

Enabling pushState on a full page forum is very important for SEO to work.

The first step is to modify your server URL parser to serve all paths under your base forum path on the same page, e.g.

```
https://myawesomeapp.com/forum
https://myawesomeapp.com/forum/foo
https://myawesomeapp.com/forum/foo/bar
```

should all serve the same page as with ```https://myawesomeapp.com/forum```.

You can do that with apache mod_rewrite or with a django URL pattern for example.

Next step is to tell fruum that your full page forum makes use of pushState by executing the following command:

```
npm start -- --update-app <app> --pushstate true
```

