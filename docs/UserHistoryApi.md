# Userservicejppoldk.UserHistoryApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistory**](UserHistoryApi.md#getHistory) | **GET** /history/{useridentifier} | Get users property history


<a name="getHistory"></a>
# **getHistory**
> UserHistory getHistory(useridentifier)

Get users property history



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

var apiInstance = new Userservicejppoldk.UserHistoryApi();

var useridentifier = "useridentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHistory(useridentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useridentifier** | **String**|  | 

### Return type

[**UserHistory**](UserHistory.md)

### Authorization

[clientAccess](../README.md#clientAccess), [userAccess](../README.md#userAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

