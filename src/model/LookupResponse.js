/**
 * userservice.jppol.dk
 * This is a client for the userservice.jppol.dk service @ JP/Politikens Hus
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mail@medielogin.dk
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Guid', 'model/Userstate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Guid'), require('./Userstate'));
  } else {
    // Browser globals (root is window)
    if (!root.Userservicejppoldk) {
      root.Userservicejppoldk = {};
    }
    root.Userservicejppoldk.LookupResponse = factory(root.Userservicejppoldk.ApiClient, root.Userservicejppoldk.Guid, root.Userservicejppoldk.Userstate);
  }
}(this, function(ApiClient, Guid, Userstate) {
  'use strict';




  /**
   * The LookupResponse model module.
   * @module model/LookupResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LookupResponse</code>.
   * Information about a user lookup
   * @alias module:model/LookupResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>LookupResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LookupResponse} obj Optional instance to populate.
   * @return {module:model/LookupResponse} The populated <code>LookupResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Identifier')) {
        obj['Identifier'] = Guid.constructFromObject(data['Identifier']);
      }
      if (data.hasOwnProperty('IsActivated')) {
        obj['IsActivated'] = ApiClient.convertToType(data['IsActivated'], 'Boolean');
      }
      if (data.hasOwnProperty('IsLockedOut')) {
        obj['IsLockedOut'] = ApiClient.convertToType(data['IsLockedOut'], 'Boolean');
      }
      if (data.hasOwnProperty('State')) {
        obj['State'] = Userstate.constructFromObject(data['State']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Guid} Identifier
   */
  exports.prototype['Identifier'] = undefined;
  /**
   * @member {Boolean} IsActivated
   */
  exports.prototype['IsActivated'] = undefined;
  /**
   * @member {Boolean} IsLockedOut
   */
  exports.prototype['IsLockedOut'] = undefined;
  /**
   * @member {module:model/Userstate} State
   */
  exports.prototype['State'] = undefined;



  return exports;
}));


