'use strict';
angular.module('Gwallet')

  .controller('KeyboardCtrl', ['$scope', function($scope) {
    $scope.total = 0.00;

    var updateTotal = function(number) {
      number = parseInt(number);
      //make sure the first number is not 0
      if($scope.total === 0 && number === 0) {
        return;
      } else {
        $scope.total = $scope.total === 0 ? String(number) : String($scope.total) + String(number);
      }
    };

    var performOperation = function(operation) {
      if(operation !== 'undo') {
        return;
      } else {
        if($scope.total !== 0) {
          var str = String($scope.total);
          $scope.total = str.substring(0,str.length - 1);
        }
      }
    };

    $scope.updateTotal = updateTotal;
    $scope.performOperation = performOperation;
  }]);
