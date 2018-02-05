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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Userservicejppoldk) {
      root.Userservicejppoldk = {};
    }
    root.Userservicejppoldk.PasswordCredentials = factory(root.Userservicejppoldk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PasswordCredentials model module.
   * @module model/PasswordCredentials
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PasswordCredentials</code>.
   * The password for request body
   * @alias module:model/PasswordCredentials
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PasswordCredentials</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PasswordCredentials} obj Optional instance to populate.
   * @return {module:model/PasswordCredentials} The populated <code>PasswordCredentials</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));


