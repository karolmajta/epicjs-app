'use strict';

describe('Service: Usertoken', function () {

  // load the service's module
  beforeEach(module('EpicjsApp'));

  // instantiate service
  var Usertoken;
  beforeEach(inject(function (_Usertoken_) {
    Usertoken = _Usertoken_;
  }));

  it('should do something', function () {
    expect(!!Usertoken).toBe(true);
  });

});
