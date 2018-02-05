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
    define(['ApiClient', 'model/UserHistoryItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserHistoryItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Userservicejppoldk) {
      root.Userservicejppoldk = {};
    }
    root.Userservicejppoldk.UserHistory = factory(root.Userservicejppoldk.ApiClient, root.Userservicejppoldk.UserHistoryItem);
  }
}(this, function(ApiClient, UserHistoryItem) {
  'use strict';




  /**
   * The UserHistory model module.
   * @module model/UserHistory
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserHistory</code>.
   * Contains all user property states ever assigned. Will be limited to properties visible to the calling client.
   * @alias module:model/UserHistory
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserHistory} obj Optional instance to populate.
   * @return {module:model/UserHistory} The populated <code>UserHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('UserStates')) {
        obj['UserStates'] = ApiClient.convertToType(data['UserStates'], [UserHistoryItem]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/UserHistoryItem>} UserStates
   */
  exports.prototype['UserStates'] = undefined;



  return exports;
}));


