'use strict';

angular.module('epicjsApp')
  .controller('koanCtrl', function (
        $scope,
        $log,
        koanRunner,
        AssertionError,
        answerPersistor) {

    $scope.initWithKoan = function (meditation, koan) {
        $scope.meditation = meditation;
        $scope.koan = koan;
        $scope.koan.solution = answerPersistor.getSolution($scope.meditation, $scope.koan);
        $scope.solutionStatus = ["unknown", null];
        var cleanedSolution = _.str.trim($scope.koan.solution);
        // run the test only if solution field is non-blank...
        if (cleanedSolution) {
            $scope.runTest();
        }
    };

    $scope.runTest = function () {
        var result = koanRunner.testExpressionWithSolution($scope.koan.code, $scope.koan.solution);
        var testPassed = result[0];
        if (testPassed) {
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

    $scope.persistAnswer = function () {
        answerPersistor.persist($scope.meditation, $scope.koan);
    };

    $scope.runTestAndPersist = function () {
        $scope.runTest();
        $scope.persistAnswer();
    }

  });
