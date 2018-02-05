# Userservicejppoldk.UsernameAndEmailingApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ssouserSvcMailUseridentifierMailNumberPost**](UsernameAndEmailingApi.md#ssouserSvcMailUseridentifierMailNumberPost) | **POST** /ssouser.svc/mail/{useridentifier}/{mailNumber} | Send one of a brandings custom mails to a user
[**ssouserSvcNewemailUseridentifierRequestedEmailPut**](UsernameAndEmailingApi.md#ssouserSvcNewemailUseridentifierRequestedEmailPut) | **PUT** /ssouser.svc/newemail/{useridentifier}/{requestedEmail} | Let the user change Username
[**ssouserSvcPwdresetUsernamePut**](UsernameAndEmailingApi.md#ssouserSvcPwdresetUsernamePut) | **PUT** /ssouser.svc/pwdreset/{username} | Let the user change or reset password


<a name="ssouserSvcMailUseridentifierMailNumberPost"></a>
# **ssouserSvcMailUseridentifierMailNumberPost**
> Object ssouserSvcMailUseridentifierMailNumberPost(useridentifier, mailNumber, branding)

Send one of a brandings custom mails to a user

Sends a predefined email to the user. The e-mail is defined in a branding which name must also be provided. Custom mails are meant to provide a simple way of sending service mails to the users albeit the limited number of templates also should indicate that this is no e-mail cannon.

### Example
```javascript
var Userservicejppoldk = require('userservicejppoldk');
var defaultClient = Userservicejppoldk.ApiClient.instance;

// Configure OAuth2 access token for authorization: clientAccess
var clientAccess = defaultClient.authentications['clientAccess'];
clientAccess.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Userservicejppoldk.UsernameAndEmailingApi();

var useridentifier = "useridentifier_example"; // String | Identifier of the user to e-mail.

var mailNumber = "mailNumber_example"; // String | Number of the custom mail

var branding = "branding_example"; // String | The branding  defining the e-mail sent to the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ssouserSvcMailUseridentifierMailNumberPost(useridentifier, mailNumber, branding, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useridentifier** | **String**| Identifier of the user to e-mail. | 
 **mailNumber** | **String**| Number of the custom mail | 
 **branding** | **String**| The branding  defining the e-mail sent to the user | 

### Return type

**Object**

### Authorization

[clientAccess](../README.md#clientAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

<a name="ssouserSvcNewemailUseridentifierRequestedEmailPut"></a>
# **ssouserSvcNewemailUseridentifierRequestedEmailPut**
> Object ssouserSvcNewemailUseridentifierRequestedEmailPut(useridentifier, requestedEmail, branding)

Let the user change Username

Trigger an email to the user which can be used to change the Username to the recipient address.

### Example
```javascript
var Userservicejppoldk = require('userservicejppoldk');
var defaultClient = Userservicejppoldk.ApiClient.instance;

// Configure OAuth2 access token for authorization: clientAccess
var clientAccess = defaultClient.authentications['clientAccess'];
clientAccess.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Userservicejppoldk.UsernameAndEmailingApi();

var useridentifier = "useridentifier_example"; // String | The username of the user to authenticate

var requestedEmail = "requestedEmail_example"; // String | The desired new email address for the user.

var branding = "branding_example"; // String | The branding defining the e-mail sent to the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ssouserSvcNewemailUseridentifierRequestedEmailPut(useridentifier, requestedEmail, branding, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useridentifier** | **String**| The username of the user to authenticate | 
 **requestedEmail** | **String**| The desired new email address for the user. | 
 **branding** | **String**| The branding defining the e-mail sent to the user | 

### Return type

**Object**

### Authorization

[clientAccess](../README.md#clientAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

<a name="ssouserSvcPwdresetUsernamePut"></a>
# **ssouserSvcPwdresetUsernamePut**
> Object ssouserSvcPwdresetUsernamePut(username, branding)

Let the user change or reset password

Trigger an email to the user which can be used to reset the users password

### Example
```javascript
var Userservicejppoldk = require('userservicejppoldk');
var defaultClient = Userservicejppoldk.ApiClient.instance;

// Configure OAuth2 access token for authorization: clientAccess
var clientAccess = defaultClient.authentications['clientAccess'];
clientAccess.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Userservicejppoldk.UsernameAndEmailingApi();

var username = "username_example"; // String | The username of the user to reset password for

var branding = "branding_example"; // String | The branding defining the e-mail sent to the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ssouserSvcPwdresetUsernamePut(username, branding, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The username of the user to reset password for | 
 **branding** | **String**| The branding defining the e-mail sent to the user | 

### Return type

**Object**

### Authorization

[clientAccess](../README.md#clientAccess)

### HTTP request headers

 - **Content-Type**: application/json+jsondate
 - **Accept**: application/json+jsondate

