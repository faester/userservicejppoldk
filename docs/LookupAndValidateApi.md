# Userservicejppoldk.LookupAndValidateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChanges**](LookupAndValidateApi.md#getChanges) | **GET** /changes/{minChangeNumber} | Get changes
[**lookupByUsername**](LookupAndValidateApi.md#lookupByUsername) | **GET** /lookup/{username} | Get users identifier based on current Username
[**queryUsers**](LookupAndValidateApi.md#queryUsers) | **PUT** /query | Query users matching a query predicate
[**validateEmail**](LookupAndValidateApi.md#validateEmail) | **POST** /validateEmail/{email} | Get users identifier based on current Username


<a name="getChanges"></a>
# **getChanges**
> [ChangelogItem] getChanges(minChangeNumber)

Get changes

Allows retrieval of all changes ever applied to user states in the system. This endpoint only returns meta data by identifying *that* an operation has been applied to a user. No user state is ever returned. But the endpoint can be used to get notified whenever a user has been changed which might be usefull for cache busting. The endpoint only returns CRUD operations. No information can be retrieved about emailing etc.

### Example
```javascript
var Userservicejppoldk = require('userservicejppoldk');
var defaultClient = Userservicejppoldk.ApiClient.instance;

// Configure OAuth2 access token for authorization: clientAccess
var clientAccess = defaultClient.authentications['clientAccess'];
clientAccess.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Userservicejppoldk.LookupAndValidateApi();

var minChangeNumber = 56; // Number | First change of interest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChanges(minChangeNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minChangeNumber** | **Number**| First change of interest | 

### Return type

[**[ChangelogItem]**](ChangelogItem.md)

### Authorization

[clientAccess](../README.md#clientAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

<a name="lookupByUsername"></a>
# **lookupByUsername**
> LookupResponse lookupByUsername(username)

Get users identifier based on current Username

### Example
```javascript
var Userservicejppoldk = require('userservicejppoldk');
var defaultClient = Userservicejppoldk.ApiClient.instance;

// Configure OAuth2 access token for authorization: clientAccess
var clientAccess = defaultClient.authentications['clientAccess'];
clientAccess.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Userservicejppoldk.LookupAndValidateApi();

var username = "username_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lookupByUsername(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 

### Return type

[**LookupResponse**](LookupResponse.md)

### Authorization

[clientAccess](../README.md#clientAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

<a name="queryUsers"></a>
# **queryUsers**
> MatchResult queryUsers(opts)

Query users matching a query predicate

### Example
```javascript
var Userservicejppoldk = require('userservicejppoldk');
var defaultClient = Userservicejppoldk.ApiClient.instance;

// Configure OAuth2 access token for authorization: clientAccess
var clientAccess = defaultClient.authentications['clientAccess'];
clientAccess.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: userAccess
var userAccess = defaultClient.authentications['userAccess'];
userAccess.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Userservicejppoldk.LookupAndValidateApi();

var opts = { 
  'page': 56, // Number | 
  'userQuery': new Userservicejppoldk.Query() // Query | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queryUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **userQuery** | [**Query**](Query.md)|  | [optional] 

### Return type

[**MatchResult**](MatchResult.md)

### Authorization

[clientAccess](../README.md#clientAccess), [userAccess](../README.md#userAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

<a name="validateEmail"></a>
# **validateEmail**
> EmailValidationResult validateEmail(email)

Get users identifier based on current Username

### Example
```javascript
var Userservicejppoldk = require('userservicejppoldk');
var defaultClient = Userservicejppoldk.ApiClient.instance;

// Configure OAuth2 access token for authorization: clientAccess
var clientAccess = defaultClient.authentications['clientAccess'];
clientAccess.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Userservicejppoldk.LookupAndValidateApi();

var email = "email_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateEmail(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 

### Return type

[**EmailValidationResult**](EmailValidationResult.md)

### Authorization

[clientAccess](../README.md#clientAccess)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

