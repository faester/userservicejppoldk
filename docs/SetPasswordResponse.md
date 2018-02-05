# Userservicejppoldk.SetPasswordResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userIdentifier** | [**Guid**](Guid.md) | Identifier of the user matching both username and password. Will be false when password is incorrect even though a match for username was found. If you need to lookup users, you should use the &#39;lookup&#39; method. | [optional] 
**response** | **String** |  | [optional] 


<a name="ResponseEnum"></a>
## Enum: ResponseEnum


* `InvalidPassword` (value: `"InvalidPassword"`)

* `Success` (value: `"Success"`)

* `NoSuchUser` (value: `"NoSuchUser"`)




