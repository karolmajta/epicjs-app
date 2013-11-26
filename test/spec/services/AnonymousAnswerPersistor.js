'use strict';

describe('Service: Answerpersistor', function () {

  // load the service's module
  beforeEach(module('EpicjsApp'));

  // instantiate service
  var Answerpersistor;
  beforeEach(inject(function (_Answerpersistor_) {
    Answerpersistor = _Answerpersistor_;
  }));

  it('should do something', function () {
    expect(!!Answerpersistor).toBe(true);
  });

});
