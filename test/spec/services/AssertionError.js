'use strict';

describe('Service: Assertionerror', function () {

  // load the service's module
  beforeEach(module('EpicjsApp'));

  // instantiate service
  var Assertionerror;
  beforeEach(inject(function (_Assertionerror_) {
    Assertionerror = _Assertionerror_;
  }));

  it('should do something', function () {
    expect(!!Assertionerror).toBe(true);
  });

});
