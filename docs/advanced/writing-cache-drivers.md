
##Writing cache drivers

By default, fruum comes with simple memory storage cache. Examples for this could be redis or memcached integrations.

To create a new cache driver do the following:

Create a new file under ```server/backends/cache/``` e.g ```server/backends/cache/mycache.js```

Add the basic code that inherits the master interface for this driver:

```
'use strict';

var _ = require('underscore'),
    Base = require('./base');

function MyCache(options) {
  _.extend(this, new Base(options));
}
module.exports = MyCache;
```

Change the ```config.json``` and declare to use your driver, e.g.

```
{
  ...
  "cache_engine": "mycache",
  ...
}
```

Start overriding the default methods of the driver, e.g.

```
'use strict';

var _ = require('underscore'),
    Base = require('./base');

function MyCache(options) {
  _.extend(this, new Base(options));

  this.put = function(key, value) {};
}
module.exports = MyCache;
```

See a list of overridable methods by viewing the [source](https://github.com/virtualcodewarrior/fruum/blob/master/server/backends/cache/base.js).
