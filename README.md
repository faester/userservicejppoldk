# userservicejppoldk

Userservicejppoldk - JavaScript client for userservicejppoldk
This is a client for the userservice.jppol.dk service @ JP/Politikens Hus
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install userservicejppoldk --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your userservicejppoldk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('userservicejppoldk')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/userservicejppoldk
then install it via:

```shell
    npm install YOUR_USERNAME/userservicejppoldk --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Userservicejppoldk = require('userservicejppoldk');

var defaultClient = Userservicejppoldk.ApiClient.instance;

// Configure OAuth2 access token for authorization: clientAccess
var clientAccess = defaultClient.authentications['clientAccess'];
clientAccess.accessToken = "YOUR ACCESS TOKEN"

var api = new Userservicejppoldk.LookupAndValidateApi()

var minChangeNumber = 56; // {Number} First change of interest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getChanges(minChangeNumber, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Userservicejppoldk.LookupAndValidateApi* | [**getChanges**](docs/LookupAndValidateApi.md#getChanges) | **GET** /changes/{minChangeNumber} | Get changes
*Userservicejppoldk.LookupAndValidateApi* | [**lookupByUsername**](docs/LookupAndValidateApi.md#lookupByUsername) | **GET** /lookup/{username} | Get users identifier based on current Username
*Userservicejppoldk.LookupAndValidateApi* | [**queryUsers**](docs/LookupAndValidateApi.md#queryUsers) | **PUT** /query | Query users matching a query predicate
*Userservicejppoldk.LookupAndValidateApi* | [**validateEmail**](docs/LookupAndValidateApi.md#validateEmail) | **POST** /validateEmail/{email} | Get users identifier based on current Username
*Userservicejppoldk.PasswordApi* | [**authenticateUsernamePut**](docs/PasswordApi.md#authenticateUsernamePut) | **PUT** /authenticate/{username} | Validate a users password
*Userservicejppoldk.PasswordApi* | [**passwordUseridentifierPost**](docs/PasswordApi.md#passwordUseridentifierPost) | **POST** /password/{useridentifier} | Set a users password
*Userservicejppoldk.UserCrudApi* | [**createUser**](docs/UserCrudApi.md#createUser) | **POST** /user/{useridentifier} | Updates user
*Userservicejppoldk.UserCrudApi* | [**deleteUser**](docs/UserCrudApi.md#deleteUser) | **DELETE** /user/{useridentifier} | Delete a user
*Userservicejppoldk.UserCrudApi* | [**getUserById**](docs/UserCrudApi.md#getUserById) | **GET** /user/{useridentifier} | Get user by user identifier
*Userservicejppoldk.UserCrudApi* | [**updateUser**](docs/UserCrudApi.md#updateUser) | **PUT** /user/{useridentifier} | Updates user
*Userservicejppoldk.UserHistoryApi* | [**getHistory**](docs/UserHistoryApi.md#getHistory) | **GET** /history/{useridentifier} | Get users property history
*Userservicejppoldk.UserReservationApi* | [**reserveUserIdentifier**](docs/UserReservationApi.md#reserveUserIdentifier) | **POST** /reserve | Reserve user identifiers.
*Userservicejppoldk.UsernameAndEmailingApi* | [**mailUseridentifierMailNumberPost**](docs/UsernameAndEmailingApi.md#mailUseridentifierMailNumberPost) | **POST** /mail/{useridentifier}/{mailNumber} | Send one of a brandings custom mails to a user
*Userservicejppoldk.UsernameAndEmailingApi* | [**newemailUseridentifierRequestedEmailPut**](docs/UsernameAndEmailingApi.md#newemailUseridentifierRequestedEmailPut) | **PUT** /newemail/{useridentifier}/{requestedEmail} | Let the user change Username
*Userservicejppoldk.UsernameAndEmailingApi* | [**pwdresetUsernamePut**](docs/UsernameAndEmailingApi.md#pwdresetUsernamePut) | **PUT** /pwdreset/{username} | Let the user change or reset password


## Documentation for Models

 - [Userservicejppoldk.ChangelogItem](docs/ChangelogItem.md)
 - [Userservicejppoldk.EmailValidationCode](docs/EmailValidationCode.md)
 - [Userservicejppoldk.EmailValidationResult](docs/EmailValidationResult.md)
 - [Userservicejppoldk.ErrorResponse](docs/ErrorResponse.md)
 - [Userservicejppoldk.Guid](docs/Guid.md)
 - [Userservicejppoldk.LookupResponse](docs/LookupResponse.md)
 - [Userservicejppoldk.MapItem](docs/MapItem.md)
 - [Userservicejppoldk.MatchResult](docs/MatchResult.md)
 - [Userservicejppoldk.PasswordCredentials](docs/PasswordCredentials.md)
 - [Userservicejppoldk.PendingDelete](docs/PendingDelete.md)
 - [Userservicejppoldk.PropertyBag](docs/PropertyBag.md)
 - [Userservicejppoldk.Query](docs/Query.md)
 - [Userservicejppoldk.ReservationResponse](docs/ReservationResponse.md)
 - [Userservicejppoldk.SetPasswordResponse](docs/SetPasswordResponse.md)
 - [Userservicejppoldk.User](docs/User.md)
 - [Userservicejppoldk.UserForUpdate](docs/UserForUpdate.md)
 - [Userservicejppoldk.UserHistory](docs/UserHistory.md)
 - [Userservicejppoldk.UserHistoryItem](docs/UserHistoryItem.md)
 - [Userservicejppoldk.Username](docs/Username.md)
 - [Userservicejppoldk.Userstate](docs/Userstate.md)
 - [Userservicejppoldk.ValidatePasswordResponse](docs/ValidatePasswordResponse.md)


## Documentation for Authorization


### clientAccess

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - userservice: access as described for your application

### userAccess

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: https://devauth.jppol.dk/connect/authorize
- **Scopes**: 
  - userservice: access as described for your application
