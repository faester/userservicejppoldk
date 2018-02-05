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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ChangelogItem', 'model/EmailValidationCode', 'model/EmailValidationResult', 'model/ErrorResponse', 'model/LookupResponse', 'model/MapItem', 'model/MatchResult', 'model/PasswordCredentials', 'model/PendingDelete', 'model/PropertyBag', 'model/Query', 'model/ReservationResponse', 'model/SetPasswordResponse', 'model/User', 'model/UserForUpdate', 'model/UserHistory', 'model/UserHistoryItem', 'model/Username', 'model/Userstate', 'model/ValidatePasswordResponse', 'api/LookupAndValidateApi', 'api/PasswordApi', 'api/UserCrudApi', 'api/UserHistoryApi', 'api/UserReservationApi', 'api/UsernameAndEmailingApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ChangelogItem'), require('./model/EmailValidationCode'), require('./model/EmailValidationResult'), require('./model/ErrorResponse'), require('./model/LookupResponse'), require('./model/MapItem'), require('./model/MatchResult'), require('./model/PasswordCredentials'), require('./model/PendingDelete'), require('./model/PropertyBag'), require('./model/Query'), require('./model/ReservationResponse'), require('./model/SetPasswordResponse'), require('./model/User'), require('./model/UserForUpdate'), require('./model/UserHistory'), require('./model/UserHistoryItem'), require('./model/Username'), require('./model/Userstate'), require('./model/ValidatePasswordResponse'), require('./api/LookupAndValidateApi'), require('./api/PasswordApi'), require('./api/UserCrudApi'), require('./api/UserHistoryApi'), require('./api/UserReservationApi'), require('./api/UsernameAndEmailingApi'));
  }
}(function(ApiClient, ChangelogItem, EmailValidationCode, EmailValidationResult, ErrorResponse, LookupResponse, MapItem, MatchResult, PasswordCredentials, PendingDelete, PropertyBag, Query, ReservationResponse, SetPasswordResponse, User, UserForUpdate, UserHistory, UserHistoryItem, Username, Userstate, ValidatePasswordResponse, LookupAndValidateApi, PasswordApi, UserCrudApi, UserHistoryApi, UserReservationApi, UsernameAndEmailingApi) {
  'use strict';

  /**
   * This_is_a_client_for_the_userservice_jppol_dk_service__JPPolitikens_Hus.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Userservicejppoldk = require('index'); // See note below*.
   * var xxxSvc = new Userservicejppoldk.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Userservicejppoldk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Userservicejppoldk.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Userservicejppoldk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ChangelogItem model constructor.
     * @property {module:model/ChangelogItem}
     */
    ChangelogItem: ChangelogItem,
    /**
     * The EmailValidationCode model constructor.
     * @property {module:model/EmailValidationCode}
     */
    EmailValidationCode: EmailValidationCode,
    /**
     * The EmailValidationResult model constructor.
     * @property {module:model/EmailValidationResult}
     */
    EmailValidationResult: EmailValidationResult,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The LookupResponse model constructor.
     * @property {module:model/LookupResponse}
     */
    LookupResponse: LookupResponse,
    /**
     * The MapItem model constructor.
     * @property {module:model/MapItem}
     */
    MapItem: MapItem,
    /**
     * The MatchResult model constructor.
     * @property {module:model/MatchResult}
     */
    MatchResult: MatchResult,
    /**
     * The PasswordCredentials model constructor.
     * @property {module:model/PasswordCredentials}
     */
    PasswordCredentials: PasswordCredentials,
    /**
     * The PendingDelete model constructor.
     * @property {module:model/PendingDelete}
     */
    PendingDelete: PendingDelete,
    /**
     * The PropertyBag model constructor.
     * @property {module:model/PropertyBag}
     */
    PropertyBag: PropertyBag,
    /**
     * The Query model constructor.
     * @property {module:model/Query}
     */
    Query: Query,
    /**
     * The ReservationResponse model constructor.
     * @property {module:model/ReservationResponse}
     */
    ReservationResponse: ReservationResponse,
    /**
     * The SetPasswordResponse model constructor.
     * @property {module:model/SetPasswordResponse}
     */
    SetPasswordResponse: SetPasswordResponse,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserForUpdate model constructor.
     * @property {module:model/UserForUpdate}
     */
    UserForUpdate: UserForUpdate,
    /**
     * The UserHistory model constructor.
     * @property {module:model/UserHistory}
     */
    UserHistory: UserHistory,
    /**
     * The UserHistoryItem model constructor.
     * @property {module:model/UserHistoryItem}
     */
    UserHistoryItem: UserHistoryItem,
    /**
     * The Username model constructor.
     * @property {module:model/Username}
     */
    Username: Username,
    /**
     * The Userstate model constructor.
     * @property {module:model/Userstate}
     */
    Userstate: Userstate,
    /**
     * The ValidatePasswordResponse model constructor.
     * @property {module:model/ValidatePasswordResponse}
     */
    ValidatePasswordResponse: ValidatePasswordResponse,
    /**
     * The LookupAndValidateApi service constructor.
     * @property {module:api/LookupAndValidateApi}
     */
    LookupAndValidateApi: LookupAndValidateApi,
    /**
     * The PasswordApi service constructor.
     * @property {module:api/PasswordApi}
     */
    PasswordApi: PasswordApi,
    /**
     * The UserCrudApi service constructor.
     * @property {module:api/UserCrudApi}
     */
    UserCrudApi: UserCrudApi,
    /**
     * The UserHistoryApi service constructor.
     * @property {module:api/UserHistoryApi}
     */
    UserHistoryApi: UserHistoryApi,
    /**
     * The UserReservationApi service constructor.
     * @property {module:api/UserReservationApi}
     */
    UserReservationApi: UserReservationApi,
    /**
     * The UsernameAndEmailingApi service constructor.
     * @property {module:api/UsernameAndEmailingApi}
     */
    UsernameAndEmailingApi: UsernameAndEmailingApi
  };

  return exports;
}));
