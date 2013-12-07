/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const assert = require('assert');
const dgram = require('dgram');

const intel = require('intel');
const SyslogHandler = require('../');

module.exports = {
  'SyslogHandler': {
    'should send messages to syslog': function(done) {
      var server = dgram.createSocket('udp4');
      server.once('listening', function() {
        var handler = new SyslogHandler({
          name: 'intel-syslog',
          port: server.address().port
        });

        var logger = intel.getLogger('herp');
        logger.propagate = false;
        logger.addHandler(handler);
        logger.info('derp');
      });

      server.on('message', function(buf) {
        assert(/derp$/.test(buf.toString()));
        done();
      });
      server.bind(0);
    }
  }
};
