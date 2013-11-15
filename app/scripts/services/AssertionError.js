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
