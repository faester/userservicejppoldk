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
    instance = new Userservicejppoldk.ChangelogItem();
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

  describe('ChangelogItem', function() {
    it('should create an instance of ChangelogItem', function() {
      // uncomment below and update the code to test ChangelogItem
      //var instane = new Userservicejppoldk.ChangelogItem();
      //expect(instance).to.be.a(Userservicejppoldk.ChangelogItem);
    });

    it('should have the property userIdentifier (base name: "UserIdentifier")', function() {
      // uncomment below and update the code to test the property userIdentifier
      //var instane = new Userservicejppoldk.ChangelogItem();
      //expect(instance).to.be();
    });

    it('should have the property operationNumber (base name: "OperationNumber")', function() {
      // uncomment below and update the code to test the property operationNumber
      //var instane = new Userservicejppoldk.ChangelogItem();
      //expect(instance).to.be();
    });

    it('should have the property operation (base name: "Operation")', function() {
      // uncomment below and update the code to test the property operation
      //var instane = new Userservicejppoldk.ChangelogItem();
      //expect(instance).to.be();
    });

    it('should have the property eventTime (base name: "EventTime")', function() {
      // uncomment below and update the code to test the property eventTime
      //var instane = new Userservicejppoldk.ChangelogItem();
      //expect(instance).to.be();
    });

  });

}));
