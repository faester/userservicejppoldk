# Userservicejppoldk.UserReservationApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reserveUserIdentifier**](UserReservationApi.md#reserveUserIdentifier) | **POST** /reserve | Reserve user identifiers.


<a name="reserveUserIdentifier"></a>
# **reserveUserIdentifier**
> ReservationResponse reserveUserIdentifier(opts)

Reserve user identifiers.

You can send an email and get a existing or new identifier in return. Or an identifier can be reserved in Userservice. This method will create a record in Userservice if no existing user matches the given Username.

### Example
```javascript
var Userservicejppoldk = require('userservicejppoldk');
var defaultClient = Userservicejppoldk.ApiClient.instance;

// Configure OAuth2 access token for authorization: clientAccess
var clientAccess = defaultClient.authentications['clientAccess'];
clientAccess.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Userservicejppoldk.UserReservationApi();

var opts = { 
  'username': new Userservicejppoldk.Username() // Username | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reserveUserIdentifier(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | [**Username**](Username.md)|  | [optional] 

### Return type

[**ReservationResponse**](ReservationResponse.md)

### Authorization

[clientAccess](../README.md#clientAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

