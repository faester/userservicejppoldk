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
    define(['ApiClient', 'model/Guid'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Guid'));
  } else {
    // Browser globals (root is window)
    if (!root.Userservicejppoldk) {
      root.Userservicejppoldk = {};
    }
    root.Userservicejppoldk.MatchResult = factory(root.Userservicejppoldk.ApiClient, root.Userservicejppoldk.Guid);
  }
}(this, function(ApiClient, Guid) {
  'use strict';




  /**
   * The MatchResult model module.
   * @module model/MatchResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MatchResult</code>.
   * Contains ids of users as well as some meta information about the query. Results are paged.
   * @alias module:model/MatchResult
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>MatchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MatchResult} obj Optional instance to populate.
   * @return {module:model/MatchResult} The populated <code>MatchResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('MatchCount')) {
        obj['MatchCount'] = ApiClient.convertToType(data['MatchCount'], 'Number');
      }
      if (data.hasOwnProperty('Page')) {
        obj['Page'] = ApiClient.convertToType(data['Page'], 'Number');
      }
      if (data.hasOwnProperty('NumberOfPages')) {
        obj['NumberOfPages'] = ApiClient.convertToType(data['NumberOfPages'], 'Number');
      }
      if (data.hasOwnProperty('Query')) {
        obj['Query'] = ApiClient.convertToType(data['Query'], 'String');
      }
      if (data.hasOwnProperty('IdsOfMatchingUser')) {
        obj['IdsOfMatchingUser'] = ApiClient.convertToType(data['IdsOfMatchingUser'], [Guid]);
      }
    }
    return obj;
  }

  /**
   * Number of matching users
   * @member {Number} MatchCount
   */
  exports.prototype['MatchCount'] = undefined;
  /**
   * Current page
   * @member {Number} Page
   */
  exports.prototype['Page'] = undefined;
  /**
   * The total number of pages for the query
   * @member {Number} NumberOfPages
   */
  exports.prototype['NumberOfPages'] = undefined;
  /**
   * Echo of the query
   * @member {String} Query
   */
  exports.prototype['Query'] = undefined;
  /**
   * @member {Array.<module:model/Guid>} IdsOfMatchingUser
   */
  exports.prototype['IdsOfMatchingUser'] = undefined;



  return exports;
}));


