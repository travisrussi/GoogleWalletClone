'use strict';

angular.module('Gwallet')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/_partials/sidemenu.html',
      controller: 'AppCtrl'
    })

    .state('app.full-page-2', {
      url: '/full-page-2',
      views: {
        'menuContent': {
          templateUrl: 'templates/pages/full-page-2.html'
        }
      }
    })

    .state('app.full-page-4', {
      url: '/full-page-4',
      views: {
        'menuContent': {
          templateUrl: 'templates/pages/full-page-4.html'
        }
      }
    })

    .state('app.full-page-8', {
      url: '/full-page-8',
      views: {
        'menuContent': {
          templateUrl: 'templates/pages/full-page-8.html'
        }
      }
    })

    .state('app.input-1', {
      url: '/input-1',
      views: {
        'menuContent': {
          templateUrl: 'templates/pages/input-1.html',
          controller: 'KeyboardCtrl'
        }
      }
    })

    .state('app.input-2', {
      url: '/input-2',
      views: {
        'menuContent': {
          templateUrl: 'templates/pages/input-2.html'
        }
      }
    })

    .state('app.input-4', {
      url: '/input-4',
      views: {
        'menuContent': {
          templateUrl: 'templates/pages/input-4.html'
        }
      }
    })

    .state('app.input-7', {
      url: '/input-7',
      views: {
        'menuContent': {
          templateUrl: 'templates/pages/input-7.html'
        }
      }
    })

    .state('app.input-8', {
      url: '/input-8',
      views: {
        'menuContent': {
          templateUrl: 'templates/pages/input-8.html',
          controller: 'UsersCtrl'
        }
      }
    })

    .state('app.input-10', {
      url: '/input-10',
      views: {
        'menuContent': {
          templateUrl: 'templates/pages/input-10.html',
          controller: 'KeyboardCtrl'
        }
      }
    })

    .state('app.input-11', {
      url: '/input-11',
      views: {
        'menuContent': {
          templateUrl: 'templates/pages/input-11.html'
        }
      }
    })

    .state('app.cards-2', {
      url: '/cards-2',
      views: {
        'menuContent': {
          templateUrl: 'templates/cards/cards-2.html'
        }
      }
    })

    .state('app.cards-6', {
      url: '/cards-6',
      views: {
        'menuContent': {
          templateUrl: 'templates/cards/cards-6.html'
        }
      }
    })

    .state('app.cards-7', {
      url: '/cards-7',
      views: {
        'menuContent': {
          templateUrl: 'templates/cards/cards-7.html'
        }
      }
    })

    .state('app.cards-8', {
      url: '/cards-8',
      views: {
        'menuContent': {
          templateUrl: 'templates/cards/cards-8.html'
        }
      }
    })

    .state('app.cards-9', {
      url: '/cards-9',
      views: {
        'menuContent': {
          templateUrl: 'templates/cards/cards-9.html'
        }
      }
    })

    .state('app.cards-10', {
      url: '/cards-10',
      views: {
        'menuContent': {
          templateUrl: 'templates/cards/cards-10.html'
        }
      }
    })

      .state('app.popup-2', {
          url: '/popup-2',
          views: {
              'menuContent': {
                  templateUrl: 'templates/modals/popup-2.html'
              }
          }
      })

      .state('app.waiting-1', {
          url: '/waiting-1',
          views: {
              'menuContent': {
                  templateUrl: 'templates/modals/waiting-1.html'
              }
          }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/full-page-2');
}]);