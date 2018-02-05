# Userservicejppoldk.PasswordApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ssouserSvcAuthenticateUsernamePut**](PasswordApi.md#ssouserSvcAuthenticateUsernamePut) | **PUT** /ssouser.svc/authenticate/{username} | Validate a users password
[**ssousersSvcPasswordUseridentifierPost**](PasswordApi.md#ssousersSvcPasswordUseridentifierPost) | **POST** /ssousers.svc/password/{useridentifier} | Set a users password


<a name="ssouserSvcAuthenticateUsernamePut"></a>
# **ssouserSvcAuthenticateUsernamePut**
> ValidatePasswordResponse ssouserSvcAuthenticateUsernamePut(username, opts)

Validate a users password

Allows password validation using web service calls. Usually discouraged method. Response will contain additional informatino about the user if username was found and even more when password was matched.

### Example
```javascript
var Userservicejppoldk = require('userservicejppoldk');
var defaultClient = Userservicejppoldk.ApiClient.instance;

// Configure OAuth2 access token for authorization: clientAccess
var clientAccess = defaultClient.authentications['clientAccess'];
clientAccess.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Userservicejppoldk.PasswordApi();

var username = "username_example"; // String | The username of the user to authenticate

var opts = { 
  'password': new Userservicejppoldk.PasswordCredentials() // PasswordCredentials | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ssouserSvcAuthenticateUsernamePut(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The username of the user to authenticate | 
 **password** | [**PasswordCredentials**](PasswordCredentials.md)|  | [optional] 

### Return type

[**ValidatePasswordResponse**](ValidatePasswordResponse.md)

### Authorization

[clientAccess](../README.md#clientAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

<a name="ssousersSvcPasswordUseridentifierPost"></a>
# **ssousersSvcPasswordUseridentifierPost**
> SetPasswordResponse ssousersSvcPasswordUseridentifierPost(useridentifier, opts)

Set a users password

Allows password validation using web service calls. Usually discouraged method. Response will contain additional informatino about the user if username was found and even more when password was matched.

### Example
```javascript
var Userservicejppoldk = require('userservicejppoldk');
var defaultClient = Userservicejppoldk.ApiClient.instance;

// Configure OAuth2 access token for authorization: clientAccess
var clientAccess = defaultClient.authentications['clientAccess'];
clientAccess.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Userservicejppoldk.PasswordApi();

var useridentifier = "useridentifier_example"; // String | The username of the user to authenticate

var opts = { 
  'password': new Userservicejppoldk.PasswordCredentials() // PasswordCredentials | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ssousersSvcPasswordUseridentifierPost(useridentifier, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useridentifier** | **String**| The username of the user to authenticate | 
 **password** | [**PasswordCredentials**](PasswordCredentials.md)|  | [optional] 

### Return type

[**SetPasswordResponse**](SetPasswordResponse.md)

### Authorization

[clientAccess](../README.md#clientAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

