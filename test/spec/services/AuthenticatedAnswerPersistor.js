'use strict';

describe('Service: Authenticatedanswerpersistor', function () {

  // load the service's module
  beforeEach(module('EpicjsApp'));

  // instantiate service
  var Authenticatedanswerpersistor;
  beforeEach(inject(function (_Authenticatedanswerpersistor_) {
    Authenticatedanswerpersistor = _Authenticatedanswerpersistor_;
  }));

  it('should do something', function () {
    expect(!!Authenticatedanswerpersistor).toBe(true);
  });

});
