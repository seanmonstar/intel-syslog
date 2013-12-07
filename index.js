/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const util = require('util');

const intel = require('intel');
const SysLogger = require('syslogger');

function SyslogHandler(options) {
  this._syslog = new SysLogger({
    name: options.name,
    address: options.address,
    port: options.port,
    facility: options.facility
  });
  this._timeout = 0;
  intel.Handler.call(this, options);
}
util.inherits(SyslogHandler, intel.Handler);

const INTEL_TO_SYSLOG = {
  verbose: 'debug',
  debug: 'debug',
  info: 'info',
  warn: 'warn',
  error: 'err',
  critical: 'crit'
};

SyslogHandler.prototype.emit = function syslogEmit(record, callback) {
  var severity = INTEL_TO_SYSLOG[record.levelname.toLowerCase()] || 'notice';
  this._syslog.log(severity, this.format(record));
  // udp, so do we care to wait around?
  callback();
};

module.exports = SyslogHandler;
