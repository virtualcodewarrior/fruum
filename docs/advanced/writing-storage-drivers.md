
## Writing storage drivers

By default, fruum comes with an elasticsearch storage driver. Potential examples for this driver could be MySQL, Postgres or MongoDB integrations.

To create a new storage driver do the following:

Create a new file under ```server/backends/storage/``` e.g ```server/backends/storage/mystorage.js```

Add the basic code that inherits the master interface for this driver:

```
'use strict';

var _ = require('underscore'),
    Base = require('./base');

function MyStorage(options) {
  _.extend(this, new Base(options));
}
module.exports = MyStorage;
```

Change the ```config.json``` and declare to use your driver, e.g.

```
{
  ...
  "storage_engine": "mystorage",
  ...
}
```

Start overriding the default methods of the driver, e.g.

```
'use strict';

var _ = require('underscore'),
    Base = require('./base');

function MyStorage(options) {
  _.extend(this, new Base(options));

  this.setup = function() { 
    // my setup code
  };
}
module.exports = MyStorage;
```

See a list of overridable methods by viewing the [source](https://github.com/virtualcodewarrior/fruum/blob/master/server/backends/storage/base.js).
