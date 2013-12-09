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

Or with [intel.config()][config]:

```js
intel.config({
  // formatters...
  handlers: {
    syslog: {
      'class': 'intel-syslog',
      'name': 'myApp',
      'address': '127.0.0.1' // etc
    }
  }
  //loggers
});
```

[intel]: http://seanmonstar.github.io/intel
[config]: http://seanmonstar.github.io/intel#config
