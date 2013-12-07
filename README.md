# intel-syslog

A syslog log handler for [intel][].

## Usage

```js
var SyslogHandler = require('intel-syslog');

intel.addHandler(new SyslogHandler({
  name: 'myApp', // output in syslog
  address: '127.0.0.1',
  port: 514,
  facility: 'user'
}));
```

[intel]: http://seanmonstar.github.io/intel
