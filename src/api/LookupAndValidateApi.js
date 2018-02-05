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
    define(['ApiClient', 'model/ChangelogItem', 'model/EmailValidationResult', 'model/ErrorResponse', 'model/LookupResponse', 'model/MatchResult', 'model/Query'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ChangelogItem'), require('../model/EmailValidationResult'), require('../model/ErrorResponse'), require('../model/LookupResponse'), require('../model/MatchResult'), require('../model/Query'));
  } else {
    // Browser globals (root is window)
    if (!root.Userservicejppoldk) {
      root.Userservicejppoldk = {};
    }
    root.Userservicejppoldk.LookupAndValidateApi = factory(root.Userservicejppoldk.ApiClient, root.Userservicejppoldk.ChangelogItem, root.Userservicejppoldk.EmailValidationResult, root.Userservicejppoldk.ErrorResponse, root.Userservicejppoldk.LookupResponse, root.Userservicejppoldk.MatchResult, root.Userservicejppoldk.Query);
  }
}(this, function(ApiClient, ChangelogItem, EmailValidationResult, ErrorResponse, LookupResponse, MatchResult, Query) {
  'use strict';

  /**
   * LookupAndValidate service.
   * @module api/LookupAndValidateApi
   * @version 1.0.0
   */

  /**
   * Constructs a new LookupAndValidateApi. 
   * @alias module:api/LookupAndValidateApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getChanges operation.
     * @callback module:api/LookupAndValidateApi~getChangesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ChangelogItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get changes
     * Allows retrieval of all changes ever applied to user states in the system. This endpoint only returns meta data by identifying *that* an operation has been applied to a user. No user state is ever returned. But the endpoint can be used to get notified whenever a user has been changed which might be usefull for cache busting. The endpoint only returns CRUD operations. No information can be retrieved about emailing etc.
     * @param {Number} minChangeNumber First change of interest
     * @param {module:api/LookupAndValidateApi~getChangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ChangelogItem>}
     */
    this.getChanges = function(minChangeNumber, callback) {
      var postBody = null;

      // verify the required parameter 'minChangeNumber' is set
      if (minChangeNumber === undefined || minChangeNumber === null) {
        throw new Error("Missing the required parameter 'minChangeNumber' when calling getChanges");
      }


      var pathParams = {
        'minChangeNumber': minChangeNumber
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
      var returnType = [ChangelogItem];

      return this.apiClient.callApi(
        '/changes/{minChangeNumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lookupByUsername operation.
     * @callback module:api/LookupAndValidateApi~lookupByUsernameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get users identifier based on current Username
     * @param {String} username 
     * @param {module:api/LookupAndValidateApi~lookupByUsernameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LookupResponse}
     */
    this.lookupByUsername = function(username, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling lookupByUsername");
      }


      var pathParams = {
        'username': username
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
      var returnType = LookupResponse;

      return this.apiClient.callApi(
        '/lookup/{username}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queryUsers operation.
     * @callback module:api/LookupAndValidateApi~queryUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MatchResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query users matching a query predicate
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {module:model/Query} opts.userQuery 
     * @param {module:api/LookupAndValidateApi~queryUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MatchResult}
     */
    this.queryUsers = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['userQuery'];


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['clientAccess', 'userAccess'];
      var contentTypes = ['application/json+jsondate'];
      var accepts = ['application/json+jsondate'];
      var returnType = MatchResult;

      return this.apiClient.callApi(
        '/query', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateEmail operation.
     * @callback module:api/LookupAndValidateApi~validateEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get users identifier based on current Username
     * @param {String} email 
     * @param {module:api/LookupAndValidateApi~validateEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailValidationResult}
     */
    this.validateEmail = function(email, callback) {
      var postBody = null;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling validateEmail");
      }


      var pathParams = {
        'email': email
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['clientAccess'];
      var contentTypes = [];
      var accepts = [];
      var returnType = EmailValidationResult;

      return this.apiClient.callApi(
        '/validateEmail/{email}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
