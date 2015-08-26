/**
 * Module dependencies
 */

var util = require('util');
var _ = require('lodash');
_.defaults = require('merge-defaults');


/**
 * sails-generate-viewhelpers
 *
 * Usage:
 * `sails generate viewhelpers`
 *
 * @description Generates a viewhelpers
 * @help See http://links.sailsjs.org/docs/generators
 */

module.exports = {

  /**
   * `before()` is run before executing any of the `targets`
   * defined below.
   *
   * This is where we can validate user input, configure default
   * scope variables, get extra dependencies, and so on.
   *
   * @param  {Object} scope
   * @param  {Function} cb    [callback]
   */

  templatesDirectory: require('path').resolve(__dirname,'../templates'),

  before: function (scope, cb) {
    _.defaults(scope, {
      // foo: scope.args[0]
    });
    if ( !scope.rootPath ) {
      return cb(new Error(
        'Missing scope variable: `rootPath`\n' +
        'Please make sure it is specified and try again.'
      ));
    }

    _.defaults(scope, {
      currentTime: new Date()
    });
    _.defaults(scope, {
      rootPath: scope.rootPath
    });

    cb();
  },



  /**
   * The files/folders to generate.
   * @type {Object}
   */

  targets: {

    './': {
      exec: function(scope, cb) {
        console.log('Running generator (sails-generate-viewhelpers) @ `'+scope.rootPath+'`...');
        cb();
      }
    },

    // the service

    './api/services/vh.js': { template: 'api/services/vh.js'}

  },


  /**
   * The absolute path to the `templates` for this generator
   * (for use with the `template` helper)
   *
   * @type {String}
   */
  templatesDirectory: require('path').resolve(__dirname, './templates')
};





/**
 * INVALID_SCOPE_VARIABLE()
 *
 * Helper method to put together a nice error about a missing or invalid
 * scope variable. We should always validate any required scope variables
 * to avoid inadvertently smashing someone's filesystem.
 *
 * @param {String} varname [the name of the missing/invalid scope variable]
 * @param {String} details [optional - additional details to display on the console]
 * @param {String} message [optional - override for the default message]
 * @return {Error}
 * @api private
 */

function INVALID_SCOPE_VARIABLE (varname, details, message) {
  var DEFAULT_MESSAGE =
  'Issue encountered in generator "viewhelpers":\n'+
  'Missing required scope variable: `%s`"\n' +
  'If you are the author of `sails-generate-viewhelpers`, please resolve this '+
  'issue and publish a new patch release.';

  message = (message || DEFAULT_MESSAGE) + (details ? '\n'+details : '');
  message = util.inspect(message, varname);

  return new Error(message);
}
