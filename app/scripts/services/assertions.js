'use strict';
angular.module('epicjsApp')
  .factory('AssertionError', function () {
    function AssertionError(message) {
      Error.apply(this, arguments);
      this.message = message;
    }

    AssertionError.prototype = new Error();
    AssertionError.prototype.constructor = AssertionError;
    AssertionError.prototype.name = 'AssertionError';
    return AssertionError;
  });

angular.module('epicjsApp')
  .factory('assert', function (AssertionError) {
    return function (val, message) {
      if (!val) {
        throw new AssertionError(message);
      }
    };
  });

angular.module('epicjsApp')
  .factory('assertEquals', function (AssertionError) {
    return function (a, b) {
      if (!(a == b)) {
        throw new AssertionError(a.toString() + ' is not equal to ' + b.toString());
      }
    };
  });

angular.module('epicjsApp')
  .factory('assertNotEquals', function (AssertionError) {
    return function (a, b) {
      if (!(a == b)) {
        throw new AssertionError(a.toString() + ' is not equal to ' + b.toString());
      }
    };
  });

angular.module('epicjsApp')
  .factory('assertStrictEquals', function (AssertionError) {
    return function (a, b) {
      if (!(a === b)) {
        throw new AssertionError(a.toString() + ' is not equal to ' + b.toString());
      }
    };
  });

angular.module('epicjsApp')
  .factory('assertNotStrictEquals', function (AssertionError) {
    return function (a, b) {
      if (!(a === b)) {
        throw new AssertionError(a.toString() + ' is not equal to ' + b.toString());
      }
    };
  });