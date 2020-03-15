
## Writing authentication drivers

By default, fruum comes with remote authentication driver. Potential examples for this driver could be using Passport for authentication.

To create a new authentication driver do the following:

Create a new file under ```server/backends/auth/``` e.g ```server/backends/auth/myauth.js```

Add the basic code that inherits the master interface for this driver:

```
'use strict';

var _ = require('underscore'),
    Base = require('./base');

function MyAuth(options) {
  _.extend(this, new Base(options));
}
module.exports = MyAuth;
```

Change the ```config.json``` and declare to use your driver, e.g.

```
{
  ...
  "auth_engine": "myauth",
  ...
}
```

Start overriding the default methods of the driver, e.g.

```
'use strict';

var _ = require('underscore'),
    Base = require('./base');

function MyAuth(options) {
  _.extend(this, new Base(options));

  this.authenticate = function(application, user_payload, callback) {
    callback();
  }
}
module.exports = MyAuth;
```

See a list of overridable methods by viewing the [source](https://github.com/virtualcodewarrior/fruum/blob/master/server/backends/auth/base.js).
