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
    define(['ApiClient', 'model/ErrorResponse', 'model/ReservationResponse', 'model/Username'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/ReservationResponse'), require('../model/Username'));
  } else {
    // Browser globals (root is window)
    if (!root.Userservicejppoldk) {
      root.Userservicejppoldk = {};
    }
    root.Userservicejppoldk.UserReservationApi = factory(root.Userservicejppoldk.ApiClient, root.Userservicejppoldk.ErrorResponse, root.Userservicejppoldk.ReservationResponse, root.Userservicejppoldk.Username);
  }
}(this, function(ApiClient, ErrorResponse, ReservationResponse, Username) {
  'use strict';

  /**
   * UserReservation service.
   * @module api/UserReservationApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UserReservationApi. 
   * @alias module:api/UserReservationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the reserveUserIdentifier operation.
     * @callback module:api/UserReservationApi~reserveUserIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReservationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reserve user identifiers.
     * You can send an email and get a existing or new identifier in return. Or an identifier can be reserved in Userservice. This method will create a record in Userservice if no existing user matches the given Username.
     * @param {Object} opts Optional parameters
     * @param {module:model/Username} opts.username 
     * @param {module:api/UserReservationApi~reserveUserIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReservationResponse}
     */
    this.reserveUserIdentifier = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['username'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['clientAccess'];
      var contentTypes = ['application/json+jsondate'];
      var accepts = ['application/json+jsondate'];
      var returnType = ReservationResponse;

      return this.apiClient.callApi(
        '/reserve', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));