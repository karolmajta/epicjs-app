'use strict';

angular.module('epicjsApp')
  .controller('koanCtrl', function ($scope, koanRunner, AssertionError) {

    $scope.initWithKoan = function (koan) {
        $scope.koan = koan;
        $scope.solutionStatus = ["unknown", null];
    };
    $scope.runTest = function () {
        var result = koanRunner.testExpressionWithSolution($scope.koan.code, $scope.koan.solution);
        var testPassed = result[0];
        if (testPassed) {
            console.log("testPassed");
            $scope.solutionStatus = ["solved", null];
        } else {
            var exceptionClass = result[1];
            var message = result[2];
            var explanation = exceptionClass.name.toString() + ": " + message.toString();
            if (exceptionClass == AssertionError) {
                $scope.solutionStatus = ["failed", explanation];
            } else {
                $scope.solutionStatus = ["error", explanation];
            }
        }
    };
  });
