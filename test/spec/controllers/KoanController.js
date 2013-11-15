'use strict';

describe('Controller: KoancontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('epicjsApp'));

  var KoancontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KoancontrollerCtrl = $controller('KoancontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
