'use strict';

describe('Controller: MeditationsCtrl', function () {

  // load the controller's module
  beforeEach(module('epicjsApp'));

  var MeditationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeditationsCtrl = $controller('MeditationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
