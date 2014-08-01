'use strict';
angular.module('Gwallet')

  .controller('KeyboardCtrl', ['$scope', function($scope) {
    $scope.total = 0.00;
    $scope.pin = '';

    var decimalPlaces, updateInput, performOperation;
    var updatePin, removeDigits;

    decimalPlaces = function(number) {
      return ((+number).toFixed(2)).replace(/^-?\d*\.?|0+$/g, '').length;
    };

    updateInput = function(input) {
      var str = String($scope.total),
          total = parseFloat($scope.total),
          decimals = decimalPlaces(total);

      if(
          (str.indexOf('.') !== -1 && input === '.') || //if the user is entering . but there already is one
          ($scope.total === 0 && parseInt(input) === 0) //if the user is trying to enter a 0 at the beginning
        ) {
        return;
      }

      //if the user is entering decimals
      if(str.indexOf('.') !== -1) {
        if(decimals === 2) { //but there are already enough decimals, just replace the last one
          $scope.total = str.substring(0,str.length - 1) + input;
        } else {
          $scope.total = str + input;
        }

        return;
      }

      //if the user is entering . and the total is 0
      if(input === '.' && $scope.total === 0) {
        $scope.total = '0.';
        return;
      }

      //if the user is entering a number
      $scope.total = $scope.total === 0 ? String(input) : String($scope.total) + String(input);
    };

    performOperation = function(operation) {
      if(operation !== 'undo') {
        return;
      } else {
        if($scope.total !== 0) {
          var str = String($scope.total);
          $scope.total = str.substring(0,str.length - 1);
        }
      }
    };

    updatePin = function(input) {
      var pin = String($scope.pin);
      if(pin.length < 4) {
        $scope.pin = pin + String(input);
      }

      console.log($scope.pin.length);
    };

    removeDigits = function(all) {
      if(all) {
        $scope.pin = '';
      } else {
        $scope.pin = String($scope.pin).substring(0,String($scope.pin).length - 1);
      }
    };

    $scope.updateInput = updateInput;
    $scope.performOperation = performOperation;
    $scope.updatePin = updatePin;
    $scope.removeDigits = removeDigits;
  }]);
