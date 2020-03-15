
## Plugin development guide

Plugins are divided in two categories, server and client plugins.

Server plugins run in the node.js server and are able to modify content, send notifications or implement user commands.

On the other side, client plugins are loaded in the browser and can modify the output of the content, e.g. convert image links to actual images, replace youtube links with youtube embedded video etc.

Plugins are located under the ```plugins/``` folder and follow the structure:

```
plugins/
  <name>/
    /server.js
    /client.js
    /template.html
```

A plugin can be either server side, client side or both. This is defined by the existence of the server.js or client.js files.

In order for a plugin to be used by the system, it must be defined in ```config.json```, for example:

```
{
  ...
  "plugins": [
    "myplugin"
    ...
  ]
  ...
}
```

#### Server plugins

Server plugins work like node.js modules. Under the server.js file define a module using:

```
function MyPlugin(options) {
}
module.exports = MyPlugin;
```

For a list of methods that can be implemented, check the [reference plugin](https://github.com/virtualcodewarrior/fruum/blob/master/plugins/reference/server.js).

Also a good example is the [giphy plugin](https://github.com/virtualcodewarrior/fruum/tree/master/plugins/giphy), which implements a user command such as ```/giphy hello```.
#### Client plugins

Client plugins follow a different initialization structure as they run in the fruum client code. The client.js file, defines a list of methods to implement and the _optional_ template.html file, define [underscore templates](http://underscorejs.org/) that can be used by the plugin.

The basic code for the client.js file is:

```
(function() {
  'use strict';
  window.Fruum.plugins.push(function () {
  });
})();
```

For a list of methods that can be implemented, check the [reference plugin](https://github.com/virtualcodewarrior/fruum/blob/master/plugins/reference/client.js).

Also a good example is the [youtube plugin](https://github.com/virtualcodewarrior/fruum/tree/master/plugins/youtube), which replaces youtube links with video.
