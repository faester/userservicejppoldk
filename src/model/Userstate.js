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
    root.Userservicejppoldk.Userstate = factory(root.Userservicejppoldk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class Userstate.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "Reserved"
     * @const
     */
    "Reserved": "Reserved",
    /**
     * value: "Activated"
     * @const
     */
    "Activated": "Activated",
    /**
     * value: "PendingDelete"
     * @const
     */
    "PendingDelete": "PendingDelete",
    /**
     * value: "LoginCreated"
     * @const
     */
    "LoginCreated": "LoginCreated"  };

  /**
   * Returns a <code>Userstate</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/Userstate} The enum <code>Userstate</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));

