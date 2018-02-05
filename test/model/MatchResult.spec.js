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
    instance = new Userservicejppoldk.MatchResult();
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

  describe('MatchResult', function() {
    it('should create an instance of MatchResult', function() {
      // uncomment below and update the code to test MatchResult
      //var instane = new Userservicejppoldk.MatchResult();
      //expect(instance).to.be.a(Userservicejppoldk.MatchResult);
    });

    it('should have the property matchCount (base name: "MatchCount")', function() {
      // uncomment below and update the code to test the property matchCount
      //var instane = new Userservicejppoldk.MatchResult();
      //expect(instance).to.be();
    });

    it('should have the property page (base name: "Page")', function() {
      // uncomment below and update the code to test the property page
      //var instane = new Userservicejppoldk.MatchResult();
      //expect(instance).to.be();
    });

    it('should have the property numberOfPages (base name: "NumberOfPages")', function() {
      // uncomment below and update the code to test the property numberOfPages
      //var instane = new Userservicejppoldk.MatchResult();
      //expect(instance).to.be();
    });

    it('should have the property query (base name: "Query")', function() {
      // uncomment below and update the code to test the property query
      //var instane = new Userservicejppoldk.MatchResult();
      //expect(instance).to.be();
    });

    it('should have the property idsOfMatchingUser (base name: "IdsOfMatchingUser")', function() {
      // uncomment below and update the code to test the property idsOfMatchingUser
      //var instane = new Userservicejppoldk.MatchResult();
      //expect(instance).to.be();
    });

  });

}));