'use strict';

describe('Service: Koanrunner', function () {

  // load the service's module
  beforeEach(module('EpicjsApp'));

  // instantiate service
  var Koanrunner;
  beforeEach(inject(function (_Koanrunner_) {
    Koanrunner = _Koanrunner_;
  }));

  it('should do something', function () {
    expect(!!Koanrunner).toBe(true);
  });

});
