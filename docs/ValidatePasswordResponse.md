# Userservicejppoldk.ValidatePasswordResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isAuthorized** | **Boolean** | True if the user should be considered logged in based on the input | [optional] 
**userCreated** | **String** | The date and time where the user was created. | [optional] 
**foundMatchingUser** | **Boolean** | True when a user with the given username was found. Will be true even when password did not match. | [optional] 
**identifier** | **String** | Identifier of the user matching both username and password. Will be false when password is incorrect even though a match for username was found. If you need to lookup users, you should use the &#39;lookup&#39; method. | [optional] 
**isActivated** | **Boolean** | True when the user has at some point confirmed ownership to the account. | [optional] 
**isLockedOut** | **Boolean** | True when the user is locked out due to too many wrong password attempts. | [optional] 
**userState** | [**Userstate**](Userstate.md) |  | [optional] 


