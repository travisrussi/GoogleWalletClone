'use strict';
angular.module('Gwallet')

  .controller('AppCtrl', ['$scope', '$ionicPopup', '$ionicLoading', function($scope, $ionicPopup, $ionicLoading) {
    // Show popup code
    $scope.showPopup = function(id) {
      $ionicPopup.confirm({
        title: 'Terms of Service',
        templateUrl: 'templates/modals/popup-' + id + '.html',
        buttons: [
          {
            text: 'Cancel',
            type: 'button-gray'
          }, {
            text: 'Accept',
            type: 'button-positive'
          }
        ]
      });
    };

    // Show loading overlay
    $scope.showLoading = function() {
      $ionicLoading.show({
        templateUrl: 'templates/modals/waiting-1.html',
        duration: 3000
      });
    };

  }]);