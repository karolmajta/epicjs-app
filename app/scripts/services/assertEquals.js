'use strict';

angular.module('epicjsApp')
  .factory('assertEquals', function (AssertionError) {
    return function (a, b) {
        if (!(a == b)) {
            throw new AssertionError(a.toString() + " is not equal to " + b.toString());
        }
    };
  });