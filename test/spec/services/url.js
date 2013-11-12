'use strict';

describe('Service: Url', function () {

  // load the service's module
  beforeEach(module('EpicjsApp'));

  // instantiate service
  var Url;
  beforeEach(inject(function (_Url_) {
    Url = _Url_;
  }));

  it('should do something', function () {
    expect(!!Url).toBe(true);
  });

});
