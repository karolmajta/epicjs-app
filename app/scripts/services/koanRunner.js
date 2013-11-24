'use strict';

angular.module('epicjsApp')
  .service('koanRunner', function koanRunner(
        KOAN_PLACEHOLDER,
        assertEquals) {
    this.testExpressionWithSolution = function (baseExpr, solution) {
      var re = new RegExp(KOAN_PLACEHOLDER, 'g');
      var expr = baseExpr.replace(re, solution);
      try {
        eval(expr);
      } catch (e) {
          return [false, e.constructor, e.message];
      }
      return [true, null, null];
    };
  });