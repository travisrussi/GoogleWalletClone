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

    .state('app.search', {
      url: '/search',
      views: {
        'menuContent' :{
          templateUrl: 'templates/search.html'
        }
      }
    })

    .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent' :{
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent' :{
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: '/playlists/:playlistId',
      views: {
        'menuContent' :{
          templateUrl: 'templates/playlist.html',
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
}]);