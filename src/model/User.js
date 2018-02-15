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
    define(['ApiClient', 'model/PendingDelete', 'model/PropertyBag', 'model/Userstate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PendingDelete'), require('./PropertyBag'), require('./Userstate'));
  } else {
    // Browser globals (root is window)
    if (!root.Userservicejppoldk) {
      root.Userservicejppoldk = {};
    }
    root.Userservicejppoldk.User = factory(root.Userservicejppoldk.ApiClient, root.Userservicejppoldk.PendingDelete, root.Userservicejppoldk.PropertyBag, root.Userservicejppoldk.Userstate);
  }
}(this, function(ApiClient, PendingDelete, PropertyBag, Userstate) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Identifier')) {
        obj['Identifier'] = ApiClient.convertToType(data['Identifier'], 'String');
      }
      if (data.hasOwnProperty('Created')) {
        obj['Created'] = ApiClient.convertToType(data['Created'], 'String');
      }
      if (data.hasOwnProperty('Version')) {
        obj['Version'] = ApiClient.convertToType(data['Version'], 'Number');
      }
      if (data.hasOwnProperty('State')) {
        obj['State'] = Userstate.constructFromObject(data['State']);
      }
      if (data.hasOwnProperty('PendingDelete')) {
        obj['PendingDelete'] = PendingDelete.constructFromObject(data['PendingDelete']);
      }
      if (data.hasOwnProperty('Properties')) {
        obj['Properties'] = PropertyBag.constructFromObject(data['Properties']);
      }
    }
    return obj;
  }

  /**
   * @member {String} Identifier
   */
  exports.prototype['Identifier'] = undefined;
  /**
   * @member {String} Created
   */
  exports.prototype['Created'] = undefined;
  /**
   * @member {Number} Version
   */
  exports.prototype['Version'] = undefined;
  /**
   * @member {module:model/Userstate} State
   */
  exports.prototype['State'] = undefined;
  /**
   * @member {module:model/PendingDelete} PendingDelete
   */
  exports.prototype['PendingDelete'] = undefined;
  /**
   * @member {module:model/PropertyBag} Properties
   */
  exports.prototype['Properties'] = undefined;



  return exports;
}));


