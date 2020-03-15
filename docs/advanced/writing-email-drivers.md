
### Writing email drivers

By default, fruum comes with mandrill, mailgun and a generic SMTP email driver. Other examples could be Sendgrid or gmail drivers.

To create a new email driver do the following:

Create a new file under ```server/backends/email/``` e.g ```server/backends/email/myemail.js```

Add the basic code that inherits the master interface for this driver:

```
'use strict';

var _ = require('underscore'),
    Base = require('./base');

function MyEmail(options) {
  _.extend(this, new Base(options));
}
module.exports = MyEmail;
```

Change the ```config.json``` and declare to use your driver, e.g.

```
{
  ...
  "email_engine": "myemail",
  ...
}
```

Start overriding the default methods of the driver, e.g.

```
'use strict';

var _ = require('underscore'),
    Base = require('./base');

function MyEmail(options) {
  _.extend(this, new Base(options));

  this.send = function(application, user, message, callback) {
    callback();
  }
}
module.exports = MyEmail;
```

See a list of overridable methods by viewing the [source](https://github.com/virtualcodewarrior/fruum/blob/master/server/backends/email/base.js).
