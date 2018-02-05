# Userservicejppoldk.UserCrudApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserCrudApi.md#createUser) | **POST** /user/{useridentifier} | Updates user
[**deleteUser**](UserCrudApi.md#deleteUser) | **DELETE** /user/{useridentifier} | Delete a user
[**getUserById**](UserCrudApi.md#getUserById) | **GET** /user/{useridentifier} | Get user by user identifier
[**updateUser**](UserCrudApi.md#updateUser) | **PUT** /user/{useridentifier} | Updates user


<a name="createUser"></a>
# **createUser**
> createUser(useridentifier, opts)

Updates user

Create a new user. useridentifier in query and Identifier in request must match.

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

var apiInstance = new Userservicejppoldk.UserCrudApi();

var useridentifier = "useridentifier_example"; // String | 

var opts = { 
  'userForCreate': new Userservicejppoldk.UserForUpdate() // UserForUpdate | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createUser(useridentifier, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useridentifier** | **String**|  | 
 **userForCreate** | [**UserForUpdate**](UserForUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[clientAccess](../README.md#clientAccess), [userAccess](../README.md#userAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(useridentifier, action)

Delete a user

Users cannot delete their own account, this requires client access. The &#39;action&#39; parameter instructs Userservice to either *request* deletion of the user which marks the user for deletion after 30 days, to *complete* deletion by removing the user right away or *cancel* a pending delete. Usually clients are not allowed to *complete* user deletion.

### Example
```javascript
var Userservicejppoldk = require('userservicejppoldk');
var defaultClient = Userservicejppoldk.ApiClient.instance;

// Configure OAuth2 access token for authorization: clientAccess
var clientAccess = defaultClient.authentications['clientAccess'];
clientAccess.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Userservicejppoldk.UserCrudApi();

var useridentifier = "useridentifier_example"; // String | 

var action = "action_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUser(useridentifier, action, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useridentifier** | **String**|  | 
 **action** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[clientAccess](../README.md#clientAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

<a name="getUserById"></a>
# **getUserById**
> User getUserById(useridentifier)

Get user by user identifier



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

var apiInstance = new Userservicejppoldk.UserCrudApi();

var useridentifier = "useridentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserById(useridentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useridentifier** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[clientAccess](../README.md#clientAccess), [userAccess](../README.md#userAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

<a name="updateUser"></a>
# **updateUser**
> updateUser(useridentifier, ifMatch, opts)

Updates user

Only send properties you want to change.

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

var apiInstance = new Userservicejppoldk.UserCrudApi();

var useridentifier = "useridentifier_example"; // String | Identifier of the user to update.

var ifMatch = 56; // Number | Value of the 'X-Version' header from last retrieval. Used for avoiding concurrency issues.

var opts = { 
  'userForUpdate': new Userservicejppoldk.UserForUpdate() // UserForUpdate | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateUser(useridentifier, ifMatch, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useridentifier** | **String**| Identifier of the user to update. | 
 **ifMatch** | **Number**| Value of the &#39;X-Version&#39; header from last retrieval. Used for avoiding concurrency issues. | 
 **userForUpdate** | [**UserForUpdate**](UserForUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[clientAccess](../README.md#clientAccess), [userAccess](../README.md#userAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

