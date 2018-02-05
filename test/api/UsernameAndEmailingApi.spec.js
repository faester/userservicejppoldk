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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Userservicejppoldk);
  }
}(this, function(expect, Userservicejppoldk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Userservicejppoldk.UsernameAndEmailingApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UsernameAndEmailingApi', function() {
    describe('mailUseridentifierMailNumberPost', function() {
      it('should call mailUseridentifierMailNumberPost successfully', function(done) {
        //uncomment below and update the code to test mailUseridentifierMailNumberPost
        //instance.mailUseridentifierMailNumberPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newemailUseridentifierRequestedEmailPut', function() {
      it('should call newemailUseridentifierRequestedEmailPut successfully', function(done) {
        //uncomment below and update the code to test newemailUseridentifierRequestedEmailPut
        //instance.newemailUseridentifierRequestedEmailPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pwdresetUsernamePut', function() {
      it('should call pwdresetUsernamePut successfully', function(done) {
        //uncomment below and update the code to test pwdresetUsernamePut
        //instance.pwdresetUsernamePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
