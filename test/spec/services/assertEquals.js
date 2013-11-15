'use strict';

describe('Service: Assertequals', function () {

  // load the service's module
  beforeEach(module('EpicjsApp'));

  // instantiate service
  var Assertequals;
  beforeEach(inject(function (_Assertequals_) {
    Assertequals = _Assertequals_;
  }));

  it('should do something', function () {
    expect(!!Assertequals).toBe(true);
  });

});
