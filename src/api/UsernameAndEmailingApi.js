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
    define(['ApiClient', 'model/CompleteUsernameChangeRequest', 'model/CompleteUsernameChangeResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CompleteUsernameChangeRequest'), require('../model/CompleteUsernameChangeResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Userservicejppoldk) {
      root.Userservicejppoldk = {};
    }
    root.Userservicejppoldk.UsernameAndEmailingApi = factory(root.Userservicejppoldk.ApiClient, root.Userservicejppoldk.CompleteUsernameChangeRequest, root.Userservicejppoldk.CompleteUsernameChangeResponse);
  }
}(this, function(ApiClient, CompleteUsernameChangeRequest, CompleteUsernameChangeResponse) {
  'use strict';

  /**
   * UsernameAndEmailing service.
   * @module api/UsernameAndEmailingApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UsernameAndEmailingApi. 
   * @alias module:api/UsernameAndEmailingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the completeUsernameChange operation.
     * @callback module:api/UsernameAndEmailingApi~completeUsernameChangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompleteUsernameChangeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Completes Username change
     * Trigger an email to the user which can be used to change the Username to the recipient address.
     * @param {String} useridentifier The identifier of the user to authenticate
     * @param {Object} opts Optional parameters
     * @param {module:model/CompleteUsernameChangeRequest} opts.completeRequest 
     * @param {module:api/UsernameAndEmailingApi~completeUsernameChangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompleteUsernameChangeResponse}
     */
    this.completeUsernameChange = function(useridentifier, opts, callback) {
      opts = opts || {};
      var postBody = opts['completeRequest'];

      // verify the required parameter 'useridentifier' is set
      if (useridentifier === undefined || useridentifier === null) {
        throw new Error("Missing the required parameter 'useridentifier' when calling completeUsernameChange");
      }


      var pathParams = {
        'useridentifier': useridentifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['clientAccess', 'userAccess'];
      var contentTypes = ['application/json+jsondate'];
      var accepts = ['application/json+jsondate'];
      var returnType = CompleteUsernameChangeResponse;

      return this.apiClient.callApi(
        '/ssouser.svc/changeUsername/{useridentifier}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ssouserSvcMailUseridentifierMailNumberPost operation.
     * @callback module:api/UsernameAndEmailingApi~ssouserSvcMailUseridentifierMailNumberPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send one of a brandings custom mails to a user
     * Sends a predefined email to the user. The e-mail is defined in a branding which name must also be provided. Custom mails are meant to provide a simple way of sending service mails to the users albeit the limited number of templates also should indicate that this is no e-mail cannon.
     * @param {String} useridentifier Identifier of the user to e-mail.
     * @param {module:model/String} mailNumber Number of the custom mail
     * @param {String} branding The branding  defining the e-mail sent to the user
     * @param {module:api/UsernameAndEmailingApi~ssouserSvcMailUseridentifierMailNumberPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.ssouserSvcMailUseridentifierMailNumberPost = function(useridentifier, mailNumber, branding, callback) {
      var postBody = null;

      // verify the required parameter 'useridentifier' is set
      if (useridentifier === undefined || useridentifier === null) {
        throw new Error("Missing the required parameter 'useridentifier' when calling ssouserSvcMailUseridentifierMailNumberPost");
      }

      // verify the required parameter 'mailNumber' is set
      if (mailNumber === undefined || mailNumber === null) {
        throw new Error("Missing the required parameter 'mailNumber' when calling ssouserSvcMailUseridentifierMailNumberPost");
      }

      // verify the required parameter 'branding' is set
      if (branding === undefined || branding === null) {
        throw new Error("Missing the required parameter 'branding' when calling ssouserSvcMailUseridentifierMailNumberPost");
      }


      var pathParams = {
        'useridentifier': useridentifier,
        'mailNumber': mailNumber
      };
      var queryParams = {
        'branding': branding
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['clientAccess'];
      var contentTypes = ['application/json+jsondate'];
      var accepts = ['application/json+jsondate'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/ssouser.svc/mail/{useridentifier}/{mailNumber}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ssouserSvcPwdresetUsernamePut operation.
     * @callback module:api/UsernameAndEmailingApi~ssouserSvcPwdresetUsernamePutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Let the user change or reset password
     * Trigger an email to the user which can be used to reset the users password
     * @param {String} username The username of the user to reset password for
     * @param {String} branding The branding defining the e-mail sent to the user
     * @param {module:api/UsernameAndEmailingApi~ssouserSvcPwdresetUsernamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.ssouserSvcPwdresetUsernamePut = function(username, branding, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling ssouserSvcPwdresetUsernamePut");
      }

      // verify the required parameter 'branding' is set
      if (branding === undefined || branding === null) {
        throw new Error("Missing the required parameter 'branding' when calling ssouserSvcPwdresetUsernamePut");
      }


      var pathParams = {
        'username': username
      };
      var queryParams = {
        'branding': branding
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['clientAccess'];
      var contentTypes = ['application/json+jsondate'];
      var accepts = ['application/json+jsondate'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/ssouser.svc/pwdreset/{username}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startUsernameChange operation.
     * @callback module:api/UsernameAndEmailingApi~startUsernameChangeCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Let the user change Username
     * Trigger an email to the user which can be used to change the Username to the recipient address.
     * @param {String} useridentifier The username of the user to authenticate
     * @param {String} requestedEmail The desired new email address for the user.
     * @param {String} branding The branding defining the e-mail sent to the user
     * @param {module:api/UsernameAndEmailingApi~startUsernameChangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.startUsernameChange = function(useridentifier, requestedEmail, branding, callback) {
      var postBody = null;

      // verify the required parameter 'useridentifier' is set
      if (useridentifier === undefined || useridentifier === null) {
        throw new Error("Missing the required parameter 'useridentifier' when calling startUsernameChange");
      }

      // verify the required parameter 'requestedEmail' is set
      if (requestedEmail === undefined || requestedEmail === null) {
        throw new Error("Missing the required parameter 'requestedEmail' when calling startUsernameChange");
      }

      // verify the required parameter 'branding' is set
      if (branding === undefined || branding === null) {
        throw new Error("Missing the required parameter 'branding' when calling startUsernameChange");
      }


      var pathParams = {
        'useridentifier': useridentifier,
        'requestedEmail': requestedEmail
      };
      var queryParams = {
        'branding': branding
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['clientAccess', 'userAccess'];
      var contentTypes = ['application/json+jsondate'];
      var accepts = ['application/json+jsondate'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/ssouser.svc/newemail/{useridentifier}/{requestedEmail}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
